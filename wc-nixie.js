class WebComponentNixie extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this._shadowRoot.innerHTML = `
          <style>
              :host {
                  color: #CCC;
                  font-size: 32px;
              }
          </style>
          <div class="nixie"></div>`;

    this.$nixie = this._shadowRoot.querySelector('.nixie');

    setInterval(() => {
      const date = new Date();
      this.$nixie.innerHTML =
        ('0' + date.getHours()).slice(-2) +
        ':' +
        ('0' + date.getMinutes()).slice(-2) +
        ':' +
        ('0' + date.getSeconds()).slice(-2);
    }, 1000);
  }
}

window.customElements.define('wc-nixie', WebComponentNixie);
