import { LitElement, html, css } from 'lit';

export class EitCounter extends LitElement {
  static styles = [
    css`
      :host {
        display: inline-block;
        padding: 1em;
        border: 1px solid #ccc;
      }
      h2 {
        color: red;
      }
      .parrafo {
        color: blue;
        font-size: 1.5em;
      }
      input {
        width: 30px;
        font-size: 1.5em;
        padding: 0.5em;
      }
    `,
  ];
  /* En vez de : 
  static get properties() {
    return {
      prop1: { type: String },
    };
  }*/
  // las propiedades las declaro en un objeto y las creo dentro de éste. Recuerda: counter es una propiedad
  static properties = {
    counter: { type: Number },
  };

  //arriba la propiedad está creada, a countinuación la voy a inicializar:
  //Usamos super para llamar al constructor de la clase madre: LitElement (que es la class que estamos extendiendo) y así inicializar los mecanismos propios de la librería
  constructor() {
    super();
    this.counter = 0;
  }



  render() {
    return html`
      <slot></slot>
      <h2>Mi contador</h2>
      <p class="parrafo">${this.counter}</p>
      <p>
        <input id="quantity" type="number" value="1" />
      </p>
      <!-- declaro el manejador de evento on click -->
      <button @click=${this.increment}>+1</button>
      <button @click=${this.decrement}>-1</button>
    `;
  }

  increment() {
    let quantity = this.shadowRoot.getElementById('quantity').value;
    this.counter += parseInt(quantity);
  }
  decrement() {
    let quantity = this.shadowRoot.getElementById('quantity').value;
    this.counter -= parseInt(quantity);
  }
}

customElements.define('eit-counter', EitCounter);
