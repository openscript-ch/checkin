import { loadMarkup } from "../loaders/loadMarkup.js";
import { getSettings, setSettings } from "../models/settings.js";
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
    }

    loadStatuses() {
      this.settings = getSettings();
      const statusesForm = this.shadowRoot.querySelector("checkin-statuses-fieldset");
      statusesForm.setStatuses(this.settings.statuses);
    }
  },
);
