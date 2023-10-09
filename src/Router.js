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
          await import("./pages/App.js");
          this.shadowRoot.innerHTML = "<checkin-pages-app />";
          break;
        case "#documentation":
          await import("./pages/Documentation.js");
          this.shadowRoot.innerHTML = "<checkin-pages-documentation />";
          break;
        case "#guide":
          await import("./pages/Guide.js");
          this.shadowRoot.innerHTML = "<checkin-pages-guide />";
          break;

        default:
          break;
      }
    }
  }
);
