//necesitamos usar un servidor de desarrollo especial (web-dev-server) que sea capaz de cambiar este nombre del paquete "lit", por un nombre de ruta.
import { LitElement, html, css } from 'lit';

//defino la clase con la que implemento el componente
class DwMessage extends LitElement {
  static styles = css`
    :host {
      margin: 0;
    }
    div {
      background-color: red;
    }
    p {
      color: blue;
    }
  `;

static properties= {
  message: { type: String },
  counter: { type: Number },
};

  constructor() {
    super();
    this.message = 'Hola Mundo';
    this.counter = 0;
  }

  firstUpdated() {
    console.log('Primera actualización');
  }

  updated(changedProperties) {
    console.log('Actualización');
  }

  disconnectedCallback() {
    console.log('Eliminación');
  }

  incrementCounter() {
    this.counter++;
  }

  // el método render() define la vista del componente
  render() {
    return html`
      <div>Hola Litstillos</div>
      <p>Y un párrafo por aquí</p>
      <p>${this.message}</p>
      <button @click="${this.incrementCounter}">Incrementar contador: ${this.counter}</button>
    `;
  }
}
//asocio la clase a un nombre de componente, componente
customElements.define('dw-message', DwMessage);
