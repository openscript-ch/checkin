export async function loadMarkup(path, origin) {
  const ressource = new URL(path, origin);
  const rawData = await fetch(ressource.pathname);
  const rawMarkup = await rawData.text();
  const template = document.createElement("template");
  template.innerHTML = rawMarkup;
  return template;
}
