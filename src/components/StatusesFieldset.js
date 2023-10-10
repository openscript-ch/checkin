import { loadMarkup } from "../loaders/loadMarkup.js";

const template = await loadMarkup("./StatusesFieldset.html", import.meta.url);

customElements.define(
  "checkin-statuses-fieldset",
  class extends HTMLElement {
    rowCounter = 0;

    constructor() {
      super();
    }

    async connectedCallback() {
      const shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.appendChild(template.content.cloneNode(true));

      const addButton = this.shadowRoot.querySelector("#add-status");

    }

    setStatuses(statuses) {
      const tbody = this.shadowRoot.querySelector("tbody");
      tbody.innerHTML = statuses.map((s, i) => this.createRow(i, s.icon, s.title)).join('');
    }

    createRow(id, icon, title) {
      const row = `
        <tr>
          <td><input name="statuses[${id}][title]" value="${title}" /></td>
          <td><input name="statuses[${id}][icon]" value="${icon}" /></td>
          <td><button class="remove-status" data-status-id="${id}">Remove</button></td>
        </tr>
      `;
      this.rowCounter++;
      return row;
    }
  },
);
