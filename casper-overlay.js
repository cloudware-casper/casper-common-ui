/*
  - Copyright (c) 2016 Cloudware S.A. All rights reserved.
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

import { mixinBehaviors } from '@polymer/polymer/lib/legacy/class.js';
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { IronOverlayBehavior } from '@polymer/iron-overlay-behavior/iron-overlay-behavior.js';

class CasperOverlay extends mixinBehaviors([IronOverlayBehavior], Element) {
	static get is () {
    return 'casper-overlay';
  }

  static get template () {
    return html`
      <style>
        :host {
          background: var(--casper-overlay-background, white);
          color: black;
          border-radius: var(--radius-primary, 6px);
          box-shadow: rgba(0, 0, 0, 0.24) -2px 5px 12px 0px, rgba(0, 0, 0, 0.12) 0px 0px 12px 0px;
        }
      </style>
      <slot></slot>
    `;
  }
}

customElements.define(CasperOverlay.is, CasperOverlay);
