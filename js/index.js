function scrollto(e) {
  history.pushState({}, document.title, "#" + e);
  window.scroll({
    top: document.getElementById(e).getBoundingClientRect().top - 90,
    behavior: "smooth"
  });
}
function copy(x) {
  var e = document.createElement("textarea");
  if (x) {
    e.value = 'https://declass.netlify.app'+location.pathname+x;
  } else {
    e.value =
      '<link rel="stylesheet" href="https://declass.netlify.app/css/declass.min.css">';
  }
  document.body.appendChild(e);
  e.select();
  document.execCommand("copy");
  document.body.removeChild(e);
}
if (location.hash) {
  scrollTo(0, 0);
  scrollto(location.hash.replace("#", ""));
}
