import { loadMarkup } from "../loaders/loadMarkup.js";
import "../components/Settings.js";
import "../components/Input.js";
import "../components/Output.js";

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
