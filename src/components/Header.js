import { loadMarkup } from "../loaders/loadMarkup.js";

const template = await loadMarkup("./Header.html", import.meta.url);

customElements.define(
  "checkin-header",
  class extends HTMLElement {
    constructor() {
      super();
    }

    async connectedCallback() {
      const shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.appendChild(template.content.cloneNode(true));
      this.markAsActive();
      window.addEventListener("hashchange", () => this.markAsActive());
    }

    markAsActive() {
      this.shadowRoot.querySelectorAll("a").forEach((el) => {
        const href = new URL(el.href);
        if (href.hash === location.hash) {
          el.classList.add("active");
        } else {
          el.classList.remove("active");
        }
      });
    }
  },
);
