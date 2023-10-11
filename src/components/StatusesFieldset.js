import { loadMarkup } from "../utils/loadMarkup.js";

const template = await loadMarkup("./StatusesFieldset.html", import.meta.url);

customElements.define(
  "checkin-statuses-fieldset",
  class extends HTMLElement {
    static formAssociated = true;

    constructor() {
      super();
      this.internals = this.attachInternals();
    }

    async connectedCallback() {
      const shadowRoot = this.attachShadow({ mode: "open" });
      shadowRoot.appendChild(template.content.cloneNode(true));

      const addButton = this.shadowRoot.querySelector("#add-status");
      addButton.addEventListener("click", () => {
        const lastRow = this.shadowRoot.querySelector("tbody tr:last-of-type");
        this.appendEmptyRow(parseInt(lastRow.dataset.id) + 1);
      });

      const tbody = this.shadowRoot.querySelector("tbody");
      tbody.addEventListener("click", (e) => {
        const target = e.target.closest("button[data-action]");
        if(target) {
          switch (target.dataset.action) {
            case "remove":
              this.removeRow(target.dataset.id)
              break;
            default:
              break;
          };
        }
      });
      tbody.addEventListener("input", (e) => {
        const target = e.target.closest("input[name]");
        if (target) {
          const formData = new FormData(this.internals.form);
          formData.set(target.name, target.value);
          this.internals.setFormValue(formData);
        }
      });
    }

    setStatuses(statuses) {
      const tbody = this.shadowRoot.querySelector("tbody");
      tbody.innerHTML = "";
      tbody.append(...statuses.map((s, i) => this.createRow(i, s.icon, s.title)));
      this.mapFormData();
    }

    removeRow(id) {
      const row = this.shadowRoot.querySelector(`tbody tr[data-id="${id}"]`);
      row.remove();
      this.mapFormData();
    }

    appendEmptyRow(id) {
      const tbody = this.shadowRoot.querySelector("tbody");
      tbody.append(this.createRow(id, "", ""));
      this.mapFormData();
    }

    createRow(id, icon, title) {
      const statusTitleName = `statuses[${id}][title]`;
      const statusIconName = `statuses[${id}][icon]`;
      const row = document.createElement("tr");
      row.dataset.id = id;
      row.innerHTML = `
        <td><input name="${statusTitleName}" value="${title}" /></td>
        <td><input name="${statusIconName}" value="${icon}" /></td>
        <td><button data-action="remove" data-id="${id}">Remove</button></td>
      `;
      return row;
    }

    mapFormData() {
      const inputs = this.shadowRoot.querySelectorAll("input[name]");
      const formData = new FormData(this.internals.form);
      Array.from(formData.keys()).forEach((k) => {
        if(k.startsWith("statuses")) {
          formData.delete(k);
        }
      });
      inputs.forEach((i) => {
        formData.set(i.name, i.value);
      });
      this.internals.setFormValue(formData);
    }
  },
);
