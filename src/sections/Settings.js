import { loadMarkup } from "../utils/loadMarkup.js";
import { getSettings, setSettings } from "../models/settings.js";
import { serializeFormData } from "../utils/serializeFormData.js";
import "../components/StatusesFieldset.js";

const template = await loadMarkup("./Settings.html", import.meta.url);

customElements.define(
  "checkin-settings",
  class extends HTMLElement {
    settings = {}

    constructor() {
      super();
    }

    async connectedCallback() {
      const shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.appendChild(template.content.cloneNode(true));
      this.loadStatuses();

      const form = this.shadowRoot.querySelector("form");
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        console.log(serializeFormData(formData));
      })
    }

    loadStatuses() {
      this.settings = getSettings();
      const statusesForm = this.shadowRoot.querySelector("checkin-statuses-fieldset");
      statusesForm.setStatuses(this.settings.statuses);
    }
  },
);
