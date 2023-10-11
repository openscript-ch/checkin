import { loadMarkup } from "../utils/loadMarkup.js";

const template = await loadMarkup("./TaskSection.html", import.meta.url);

customElements.define(
  "checkin-task-section",
  class extends HTMLElement {
    constructor() {
      super();

      const shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.appendChild(template.content.cloneNode(true));
    }

    async connectedCallback() {
    }

    setSection(id, section) {
      const fieldset = this.shadowRoot.querySelector("fieldset");
      fieldset.dataset.id = id;
      fieldset.innerHTML = `<legend><input name="sections[${id}][title]" value="${section.title}" /></legend>`;
    }
  },
);
