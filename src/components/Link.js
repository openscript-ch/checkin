import { loadMarkup } from "../loaders/loadMarkup.js";

customElements.define(
  "checkin-link",
  class extends HTMLElement {
    constructor() {
      super();
    }

    async connectedCallback() {
      const template = await loadMarkup("./Link.html", import.meta.url);

      const shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.appendChild(template.content.cloneNode(true));

      const link = shadowRoot.querySelector("a")
      link.setAttribute("href", this.getAttribute("href"));
      link.addEventListener("click", (e) => {
        e.preventDefault();
        window.history.pushState("", null, e.target.closest("a").href);
        const locationChangeEvent = new CustomEvent("checkin-navigate");
        window.dispatchEvent(locationChangeEvent);
      })
    }
  },
);
