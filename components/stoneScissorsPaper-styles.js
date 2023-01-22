import { css } from 'lit';

export const StonePaperScissorsStyles = css`
  :host {
    display: block;
  }
  button {
    padding: 8px 16px;
    border: none;
    margin-right: 8px;
    font-size: 1rem;
    cursor: pointer;
  }

  button:hover {
    background-color: #ddd;
  }

  /* .container {
    display: flex;
    flex-direction: column;
  } */

  .result {
    margin-top: 16px;
    font-size: 1.5rem;
    font-weight: bold;
  }
`;
