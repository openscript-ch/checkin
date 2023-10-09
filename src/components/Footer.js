import { loadMarkup } from "../loaders/loadMarkup.js";

customElements.define(
  "checkin-footer",
  class extends HTMLElement {
    constructor() {
      super();
    }

    async connectedCallback() {
      const template = await loadMarkup("./Footer.html", import.meta.url);

      const shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.appendChild(template.content.cloneNode(true));
    }
  },
);
