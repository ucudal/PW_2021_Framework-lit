import {LitElement, html, css} from 'lit';

export class ElementMy extends LitElement {
  render() {
    return html`
      <div>Hello from MyElement!</div>
    `;
  }
}

customElements.define('elemento_lit', ElementMy);