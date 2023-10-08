import { loadMarkup } from "../loaders/loadMarkup.js";

customElements.define(
  "checkin-pages-doc",
  class extends HTMLElement {
    constructor() {
      super();
    }

    async connectedCallback() {
      const template = await loadMarkup("./Doc.html", import.meta.url);

      const shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.appendChild(template.content.cloneNode(true));
    }
  },
);
