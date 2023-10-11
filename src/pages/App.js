import { loadMarkup } from "../utils/loadMarkup.js";
import "../sections/Settings.js";
import "../sections/Input.js";
import "../sections/Output.js";

const template = await loadMarkup("./App.html", import.meta.url);

customElements.define(
  "checkin-pages-app",
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
