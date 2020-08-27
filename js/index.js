function about() {
  history.pushState({}, document.title, "#about");
  window.scroll({
    top: document.getElementById("about").getBoundingClientRect().top - 90,
    behavior: "smooth"
  });
}
function copy() {
  var e = document.createElement("textarea");
  e.value =
    '<link rel="stylesheet" href="https://declass.glitch.me/1.min.css">';
  document.body.appendChild(e);
  e.select();
  document.execCommand("copy");
  document.body.removeChild(e);
}
