const STORAGE_KEY = "CHECKIN_DATA";

export function getData() {
  return localStorage.getItem(STORAGE_KEY);
}

export function setData(data) {
  localStorage.setItem(STORAGE_KEY, data);
}
