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
        case "#doc":
          await import("./pages/Doc.js");
          this.shadowRoot.innerHTML = "<checkin-pages-doc />";
          break;

        default:
          break;
      }
    }
  }
);
