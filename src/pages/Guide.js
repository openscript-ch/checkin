import { loadMarkup } from "../loaders/loadMarkup.js";

const template = await loadMarkup("./Guide.html", import.meta.url);

customElements.define(
  "checkin-pages-guide",
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
