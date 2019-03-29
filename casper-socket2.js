/*
  - Copyright (c) 2014-2016 Neto Ranito & Seabra LDA. All rights reserved.
  -
  - This file is part of casper-common-ui.
  -
  - casper-common-ui is free software: you can redistribute it and/or modify
  - it under the terms of the GNU Affero General Public License as published by
  - the Free Software Foundation, either version 3 of the License, or
  - (at your option) any later version.
  -
  - casper-common-ui  is distributed in the hope that it will be useful,
  - but WITHOUT ANY WARRANTY; without even the implied warranty of
  - MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  - GNU General Public License for more details.
  -
  - You should have received a copy of the GNU Affero General Public License
  - along with casper-common-ui.  If not, see <http://www.gnu.org/licenses/>.
  -
 */

import { PolymerElement } from '@polymer/polymer/polymer-element.js';

class CasperSocket2 extends PolymerElement {

  static get is () {
    return 'casper-socket2';
  }

  static get properties () {
    return {
      /** The client object TODO multiclients */
      client: {
        type: Object
      },
      /** websocket schema + hostname (no port no path) */
      url: {
        type: String
      },
      /** websocket port number, defaults to current page port */
      port: {
        type: String
      },
      /** Path or route that connects to casper-epaper module */
      path: {
        type: String
      },
      /** When true socket will connect on attachment */
      autoConnect: {
        type: Boolean,
        value: false
      }
    };
  }

  ready () {
    if ( this.url === undefined ) {
      if ( window.location.protocol === 'https:' ) {
        this.url = 'wss://' + window.location.hostname;
      } else {
        this.url = 'ws://' + window.location.hostname;
      }
    }
    this.port = this.port || window.location.port;
    this.path = this.path || 'epaper';
    this._freedInvokes   = [];
    this._activeRequests = {};
    this._nextInvokeId   = 1;
    this._pendingCommand = undefined;
  }

  attached () {
    this._socket = undefined;
    if ( this.autoConnect ) {
      this.connect(); // ?? auto or manual?
    }
  }

  detached () {
    this._freedInvokes   = null;
    this._activeRequests = null;
    this.disconnect();
  }

  connect () {
    this._ws_url = this.url + ((this.port != undefined && this.port !== '') ? ':' + this.port : '') + '/' + this.path;
    if (typeof MozWebSocket != "undefined") {
      this._socket = new MozWebSocket(this._ws_url, "casper");
    } else {
      this._socket = new WebSocket(this._ws_url, "casper");
    }
    this._socket.onmessage = this._onSocketMessage.bind(this);

    this._socket.onopen = function (message) {
      if ( this._pendingCommand !== undefined ) {
        this._socket.send(this._pendingCommand);
        this._pendingCommand = undefined;
      }
      this.client.onSocketOpen(message);
    }.bind(this);

    this._socket.onclose = function (message) {
      this.client.onSocketClose(message);
    }.bind(this);
  }

  /**
   * Terminate connection to casper server
   */
  disconnect () {
    if ( this._socket ) {
      this._socket.close();
    }
  }


  /**
  * socket state
  */
  _socketState() {
    if (this._socket === undefined) {
      return 3; // CLOSED
    }
    return this._socket.readyState;
  }

  /**
   * Send text message to casper server
   *
   * @param {String} message the plain text message to send
   */
  _send (message) {
    if (this._socket === undefined || this._socket.readyState === 0) {
      this._pendingCommand = message;
      this.connect()
    } else if (this._socket.readyState === 1 ) {
      this._socket.send(message);
    }
  }

  _onSocketMessage (message) {
    try {
      var request, payload, invokeId;

      if ( message.data.indexOf('0:N:{') === 0 ) {
        payload = JSON.parse(message.data.substring(message.data.indexOf('"}:{"')+3));
        this.client.onCasperNotification(payload);
        return; // We are good
      }

      invokeId = parseInt(message.data);
      if ( !isNaN(invokeId) ) {
        request = this._activeRequests[invokeId];
        if ( request !== undefined ) {

          // console.log('Got reply to ivk:'+invokeId);
          var jso = message.data.indexOf(':R:{');
          if ( jso === -1 ) {
            jso = message.data.indexOf(':S:{');
            if ( jso === -1 ) {
              jso = message.data.indexOf(':E:{');
            }
          }
          delete this._activeRequests[invokeId];
          this._freedInvokes.push(invokeId);

          if ( jso !== - 1 ) {
            payload = JSON.parse(message.data.substring(jso + 3));
            if ( request.callback !== undefined ) {
              request.callback(payload);
            }
            return; // We are good
          }

        }
      }
    } catch (exception) {
      console.log(exception);
    }
    // cleanup and rollbar??
    return;
  }

  submitJob (job, callback, options) {
    var request = { job: job, callback: callback };
    var target = {target: 'job-queue', tube: job.tube};
    if ( options ) {
      if (options.ttr) {
        target.ttr = options.ttr;
      }
      if (options.validity) {
        target.validity = options.validity;
      }
    }
    this._registerRequest(request);
    this._send(request.invokeId + ':PUT:' + JSON.stringify(target)+':'+JSON.stringify(job));
  }

  subscribeJob (jobId, callback) {
    var p = jobId.split(':');
    var request = { tube: p[0], id: p[1], callback: callback };
    this._registerRequest(request);
    this._send(request.invokeId + ':SUBSCRIBE:' + JSON.stringify({ target: 'job', tube: request.tube, id: request.id }));
  }

  cancelJob (jobId, callback) {
    var p = jobId.split(':');
    var request = { tube: p[0], id: p[1], callback: callback };
    this._registerRequest(request);
    this._send(request.invokeId + ':CANCEL:' + JSON.stringify({ target: 'job-queue', tube: request.tube, id: request.id }));
  }

  updateUI (jobId, uiState, callback) {
    var p = jobId.split(':');
    var request = { tube: p[0], id: p[1], callback: callback };
    this._registerRequest(request);
    this._send(request.invokeId + ':PUT:' + JSON.stringify({ target: 'job-ui', tube: request.tube, id: request.id })+':'+JSON.stringify(uiState));
  }

  _registerRequest (request) {
    var ivk;

    if ( this._freedInvokes.length === 0 ) {
      ivk = this._nextInvokeId++;
    } else {
      ivk = this._freedInvokes.shift()
    }
    request.invokeId = ivk;
    this._activeRequests[ivk] = request;
  }
}