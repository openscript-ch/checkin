import { loadMarkup } from "../utils/loadMarkup.js";
import { getData, setData } from "../models/data.js";
import "../components/TaskSection.js";

const template = await loadMarkup("./Input.html", import.meta.url);

customElements.define(
  "checkin-input",
  class extends HTMLElement {
    data = {}

    constructor() {
      super();
      const shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.appendChild(template.content.cloneNode(true));
    }

    async connectedCallback() {
      this.loadData();
    }

    loadData() {
      this.data = getData();
      const form = this.shadowRoot.querySelector("form");

      if(this.data.sections) {
        this.data.sections.forEach((s, i) => {
          const section = document.createElement("checkin-task-section");
          section.slot = "fieldset";
          section.setSection(i, s);
          this.append(section);
        });
      }
    }
  },
);
