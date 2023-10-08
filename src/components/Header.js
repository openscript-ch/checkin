import { loadMarkup } from "../loaders/loadMarkup.js";

customElements.define(
  "checkin-header",
  class extends HTMLElement {
    constructor() {
      super();
    }

    async connectedCallback() {
      const template = await loadMarkup("./Header.html", import.meta.url);

      const shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.appendChild(template.content.cloneNode(true));
    }
  },
);
