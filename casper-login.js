import './casper-socket2.js';
import '@polymer/paper-dialog/paper-dialog.js';
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class CasperLogin extends PolymerElement {

  static get is () {
    return 'casper-login';
  }

  static get properties () {
    return {
      url: {
        type: String
      },
      _loginParams: {
        type: Object,
        value: null
      }
    };
  }

  static get template () {
    return html`
      <style>
        :host {
          display: block;
        }

        paper-button {
          font-family: 'Roboto', 'Noto', sans-serif;
          font-weight: normal;
          font-size: 14px;
          -webkit-font-smoothing: antialiased;
          background-color: #101010;
          color: white;
          margin: 0px;
        }

        #panel {
          width: 300px;
        }

        #login-panel {
          margin: 0px;
          margin-top: 6px;
        }
      </style>
      <casper-socket2 id="socket"></casper-socket2>
      <paper-dialog opened="" modal="">
        <div id="panel">
          <paper-input id="email" label="email"></paper-input>
          <paper-input id="password" type="password" label="password"></paper-input>
          <div>
            <paper-checkbox></paper-checkbox><span>Remember me</span>
          </div>
          <div id="login-panel">
            <paper-button on-click="signIn" raised="">login</paper-button><span>Forgot password</span>
          </div>
        </div>
      </paper-dialog>
    `;
  }

  attached () {
    this.$.socket.client = this;
    this.$.socket.connect();
    // body...
  }

  detached (argument) {
    // body...
    this.$.socket.disconnect();
  }

  onSocketOpen (message) {
    // The socket is opened
  }

  onCasperNotification (argument) {
    // body...
  }

  onSocketClose (argument) {

  }

  signIn () {
    //this._loginParams = { email: this.$.email.value, password: btoa(this.$.password.value) };
    //this.$.xhr.body = JSON.stringify(this._loginParams);
    //this.$.xhr.generateRequest();
    this.$.socket.submitJob(
      {
        tube: 'toconline-login',
        email: this.$.email.value,
        password: btoa(this.$.password.value)
      },
      this.signInResponse.bind(this));
  }

  signInResponse () {
    //var response = this.$.xhr.lastResponse;
    //window.localStorage.setItem('Casper-Session', response.casper_session);
    //window.location.href = response.impersonate_url;
  }
}
