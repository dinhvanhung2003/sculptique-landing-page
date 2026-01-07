async function loadInto(selector, url) {
  const el = document.querySelector(selector);
  if (!el) return;

  const res = await fetch(url);
  el.innerHTML = await res.text();
}

Promise.all([
  loadInto("#slot-hero", "./partials/hero.html"),
  loadInto("#slot-left", "./partials/gallery-stats.html"),
  loadInto("#slot-right", "./partials/bundle-card.html"),
]);
