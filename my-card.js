
import { LitElement, html, css } from 'lit';

import './my-card.js';

export class MyCard extends LitElement {
  static properties = {
    title: { type: String },
    description: { type: String },
    image: { type: String }
  };

  static styles = css`
    :host {
      --card-bg: #ffffff;
      --card-text: #222;
      --card-border: #ddd;
      --card-radius: 12px;
      --card-width: 260px;
      display: inline-block;
    }

    .card {
      width: var(--card-width);
      background: var(--card-bg);
      color: var(--card-text);
      border: 1px solid var(--card-border);
      border-radius: var(--card-radius);
      padding: 1rem;
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
      font-family: system-ui, sans-serif;
    }

    img {
      width: 100%;
      height: 140px;
      object-fit: cover;
      border-radius: calc(var(--card-radius) - 4px);
    }

    h3 {
      margin: 0.5rem 0 0.25rem;
      font-size: 1.1rem;
    }

    p {
      font-size: 0.9rem;
      line-height: 1.4;
    }

    a {
      display: inline-block;
      margin-top: 0.5rem;
      text-decoration: none;
      color: #0066cc;
      font-weight: 600;
    }
  `;

  constructor() {
    super();
    this.title = '';
    this.description = '';
    this.image = '';
  }

  render() {
    return html`
      <div class="card">
        ${this.image ? html`<img src="${this.image}" alt="" />` : ''}
        <h3>${this.title}</h3>
        <p>${this.description}</p>
        <a href="https://hax.psu.edu">Details</a>
      </div>
    `;
  }
}

customElements.define('my-card', MyCard);

