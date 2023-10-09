import "./pages/App.js";
import "./pages/Documentation.js";
import "./pages/Guide.js";

customElements.define(
  "checkin-router",
  class extends HTMLElement {
    constructor() {
      super();
    }

    async connectedCallback() {
      const page = document.createElement("template");
      const shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.appendChild(page.content.cloneNode(true));
      await this.load();

      window.addEventListener("hashchange", () => this.load());
    }

    async load() {
      switch (location.hash) {
        case "":
          this.shadowRoot.innerHTML = "<checkin-pages-app />";
          break;
        case "#documentation":
          this.shadowRoot.innerHTML = "<checkin-pages-documentation />";
          break;
        case "#guide":
          this.shadowRoot.innerHTML = "<checkin-pages-guide />";
          break;

        default:
          break;
      }
    }
  }
);
