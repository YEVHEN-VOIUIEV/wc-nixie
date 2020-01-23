class WebComponentNixie extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this._shadowRoot.innerHTML = `
      <style>
        .clock {
          display: grid;
          grid-template-columns: auto auto auto auto auto auto;
        }

        .digit {
          width: 100%;
          border-radius: 50%;
          background-repeat: no-repeat;
          background-position: center;
          background-size: 100% 100%;
          background-color: #070000;
        }

        .digit:before {
          content: '';
          display: block;
          padding-top: 100%;
        }
      </style>
      <div class="nixie"></div>`;

    this.$nixie = this._shadowRoot.querySelector('.nixie');

    setInterval(() => {
      const date = new Date();
      const timeString =
        ('0' + date.getHours()).slice(-2) +
        ('0' + date.getMinutes()).slice(-2) +
        ('0' + date.getSeconds()).slice(-2);

      this.$nixie.innerHTML = `
        <div class="clock">
          ${[0, 1, 2, 3, 4, 5]
            .map(i => {
              const style = `background-image: url('./images/${timeString[i]}.jpg')`;
              return `<div class="digit" style="${style}"></div>`;
            })
            .join('')}
        </div>
        `;
    }, 1000);
  }
}

window.customElements.define('wc-nixie', WebComponentNixie);
