import { loadMarkup } from "../utils/loadMarkup.js";

const template = await loadMarkup("./Input.html", import.meta.url);

customElements.define(
  "checkin-input",
  class extends HTMLElement {
    constructor() {
      super();
    }

    async connectedCallback() {
      const shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.appendChild(template.content.cloneNode(true));
    }
  },
);
