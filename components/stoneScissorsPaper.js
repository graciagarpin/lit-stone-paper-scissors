import { LitElement, html } from 'lit';
import { StonePaperScissorsStyles } from './stoneScissorsPaper-styles.js';

export class StonePaperScissors extends LitElement {
  //vamos a hacer un template reactivo
  static get properties() {
    return {
      playerChoice: { type: String },
      computerChoice: { type: String },
      result: { type: String },
    };
  }

  static get styles() {
    return [StonePaperScissorsStyles];
  }

  constructor() {
    super();
    this.playerChoice = '';
    this.computerChoice = '';
    this.result = '';
  }

  play(playerChoice) {
    this.playerChoice = playerChoice;
    this.computerChoice = this.getComputerChoice();
    this.result = this.getResult();
  }

  getComputerChoice() {
    const choices = ['stone', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
  }

  getResult() {
    if (this.playerChoice === this.computerChoice) {
      return 'Empate';
    } else if (
      (this.playerChoice === 'stone' && this.computerChoice === 'scissors') ||
      (this.playerChoice === 'paper' && this.computerChoice === 'stone') ||
      (this.playerChoice === 'scissors' && this.computerChoice === 'paper')
    ) {
      return 'Ganaste';
    } else {
      return 'Perdiste';
    }
  }

  render() {
    return html`
      <div>
        <button @click="${() => this.play('stone')}">Stone</button>
        <button @click="${() => this.play('paper')}">Paper</button>
        <button @click="${() => this.play('scissors')}">Scissors</button>
      </div>
      <div class="container">
        <div class="result" type="text">Tu elección: ${this.playerChoice}</div>
        <div class="result" type="text">
          Elección de la computadora: ${this.computerChoice}
        </div>
        <div class="result" type="text">Resultado: ${this.result}</div>
      </div>
    `;
  }
}

customElements.define('stone-paper-scissors', StonePaperScissors);