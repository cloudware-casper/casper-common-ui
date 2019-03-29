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

class CasperSocket extends PolymerElement {

  static get is () {
    return 'casper-socket';
  };

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
  }

  attached () {
    if ( this.autoConnect ) {
      this.connect(); // ?? auto or manual?
    }
  }

  detached () {
    this.disconnect();
  }

  connect () {
    this._ws_url = this.url + ((this.port != undefined && this.port !== '') ? ':' + this.port : '') + '/' + this.path;
    if (typeof MozWebSocket != "undefined") {
      this._socket = new MozWebSocket(this._ws_url, "skunk-epaper");
    } else {
      this._socket = new WebSocket(this._ws_url, "skunk-epaper");
    }
    this._socket.onmessage = function (message) {
      this.client.onSocketMessage(message);
    }.bind(this);

    this._socket.onopen = function (message) {
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
    this._socket.close();
  }

  /**
   * Send text message to casper server
   *
   * @param {String} message the plain text message to send
   */
  sendCommand (message) {
    this._socket.send(message);
  }
}
