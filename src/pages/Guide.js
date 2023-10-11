import { loadMarkup } from "../utils/loadMarkup.js";

const template = await loadMarkup("./Guide.html", import.meta.url);

customElements.define(
  "checkin-pages-guide",
  class extends HTMLElement {
    constructor() {
      super();
      const shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.appendChild(template.content.cloneNode(true));
    }
  },
);
