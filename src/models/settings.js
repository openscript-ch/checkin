const STORAGE_KEY = "CHECKIN_SETTINGS";


export function getSettings() {
  return localStorage.getItem(STORAGE_KEY);
}

export function setSettings(settings) {
  localStorage.setItem(STORAGE_KEY, settings);
}
