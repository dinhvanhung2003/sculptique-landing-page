async function loadHTML(selector, url) {
  const el = document.querySelector(selector);
  if (!el) return;
  const res = await fetch(url);
  el.innerHTML = await res.text();
}

loadHTML("#slot-01", "./partials/01-header-brand.html");
loadHTML("#slot-02", "./partials/02-hero.html");
loadHTML("#slot-03", "./partials/03-gallery-stats.html");
loadHTML("#slot-04", "./partials/04-bundle-selector.html");
loadHTML("#slot-05", "./partials/05-review-card.html");
loadHTML("#slot-06", "./partials/06-as-seen-in.html");
loadHTML("#slot-07", "./partials/07-connected-cards.html");
loadHTML("#slot-08", "./partials/08-hidden-drainage.html");
loadHTML("#slot-09", "./partials/09-why-nothing-worked.html");
loadHTML("#slot-10", "./partials/10-3-ingredient-system.html");
loadHTML("#slot-11", "./partials/11-testimonials.html");
loadHTML("#slot-12", "./partials/12-trust-icons.html");
loadHTML("#slot-13", "./partials/13-expert-advice.html");
loadHTML("#slot-14", "./partials/14-faq.html");
loadHTML("#slot-15", "./partials/15-footer.html");
