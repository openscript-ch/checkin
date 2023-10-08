import { loadMarkup } from "../loaders/loadMarkup.js";

customElements.define(
  "checkin-pages-app",
  class extends HTMLElement {
    constructor() {
      super();
    }

    async connectedCallback() {
      const template = await loadMarkup("./App.html", import.meta.url);

      const shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.appendChild(template.content.cloneNode(true));
    }
  },
);
