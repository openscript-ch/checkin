const STORAGE_KEY = "CHECKIN_DATA";

export function getData() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY));
}

export function setData(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}
