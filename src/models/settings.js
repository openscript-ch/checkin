const STORAGE_KEY = "CHECKIN_SETTINGS";
const DEFAULT_SETTINGS = {
  statuses: [
    {
      icon: "🗓️",
      title: "Scheduled"
    },
    {
      icon: "✅",
      title: "Done"
    },
    {
      icon: "❌",
      title: "Canceled"
    },
    {
      icon: "⏯️",
      title: "Continued"
    },
    {
      icon: "⏸️",
      title: "Paused"
    },
    {
      icon: "⏹️",
      title: "Stopped"
    }
  ],
  sections: [
    {
      title: "Yesterday",
    },
    {
      title: "Today"
    },
    {
      title: "Backlog"
    }
  ]
}

if (!localStorage.getItem(STORAGE_KEY)) {
  setSettings(DEFAULT_SETTINGS);
}

export function getSettings() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY));
}

export function setSettings(settings) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
}
