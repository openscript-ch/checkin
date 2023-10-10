import { loadMarkup } from "../loaders/loadMarkup.js";

const template = await loadMarkup("./StatusesFieldset.html", import.meta.url);

customElements.define(
  "checkin-statuses-fieldset",
  class extends HTMLElement {

    constructor() {
      super();
    }

    async connectedCallback() {
      const shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.appendChild(template.content.cloneNode(true));

      const addButton = this.shadowRoot.querySelector("#add-status");
      addButton.addEventListener("click", () => {
        const nextId = this.shadowRoot.querySelectorAll("tbody tr").length;
        this.appendEmptyRow(nextId);
      });

      const tbody = this.shadowRoot.querySelector("tbody");
      tbody.addEventListener("click", (e) => {
        const target = e.target.closest("button");
        switch (target.dataset.action) {
          case "remove":
            this.removeRow(target.dataset.id)
            break;
          default:
            break;
        };
      })
    }

    setStatuses(statuses) {
      const tbody = this.shadowRoot.querySelector("tbody");
      tbody.innerHTML = "";
      tbody.append(...statuses.map((s, i) => this.createRow(i, s.icon, s.title)));
    }

    removeRow(id) {
      const row = this.shadowRoot.querySelector(`tbody tr[data-id="${id}"]`);
      row.remove();
    }

    appendEmptyRow(id) {
      const tbody = this.shadowRoot.querySelector("tbody");
      tbody.append(this.createRow(id, "", ""));
    }

    createRow(id, icon, title) {
      const row = document.createElement("tr");
      row.dataset.id = id;
      row.innerHTML = `
        <td><input name="statuses[${id}][title]" value="${title}" /></td>
        <td><input name="statuses[${id}][icon]" value="${icon}" /></td>
        <td><button data-action="remove" data-id="${id}">Remove</button></td>
      `;
      return row;
    }
  },
);
