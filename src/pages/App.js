import { loadMarkup } from "../loaders/loadMarkup";

customElements.define(
  "checkin-app",
  class extends HTMLElement {
    constructor() {
      super();
      this.initialize();
    }

    async initialize() {
      const template = await loadMarkup("./App.html", import.meta.url);

      const shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.appendChild(template.content.cloneNode(true));
    }
  },
);
