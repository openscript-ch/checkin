const STORAGE_KEY = "CHECKIN_DATA";
const DEFAULT_DATA = {
  sections: [
    {
      title: "Yesterday",
      tasks: []
    },
    {
      title: "Tomorrow",
      tasks: []
    },
    {
      title: "Backlog",
      tasks: []
    }
  ]
}

if (!localStorage.getItem(STORAGE_KEY)) {
  setData(DEFAULT_DATA);
}

export function getData() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY));
}

export function setData(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}
