const closestElement = (selector, target) => {
  const found = target.closest(selector);

  if (found) {
    return found;
  }

  const root = target.getRootNode();

  if (root === document || !(root instanceof ShadowRoot)) {
    return null;
  }

  return closestElement(selector, root.host);
};


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

      window.addEventListener("popstate", () => this.load());
      window.addEventListener("checkin-navigate", () => this.load());
    }

    async load() {
      switch (location.pathname) {
        case "/":
          await import("./pages/App.js");
          this.shadowRoot.innerHTML = "<checkin-pages-app />";
          break;
        case "/doc":
          await import("./pages/Doc.js");
          this.shadowRoot.innerHTML = "<checkin-pages-doc />";
          break;

        default:
          break;
      }
    }
  }
);
