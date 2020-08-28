function scrollto(e) {
  history.pushState({}, document.title, "#" + e);
  if (e === "about") {
    document.title = "Declass | About";
  }
  scroll({
    top: document.getElementById(e).getBoundingClientRect().top - 90,
    behavior: "smooth"
  });
  onpopstate = scrollTo(0, 0);
}
function copy(x) {
  var e = document.createElement("textarea");
  if (x) {
    e.value =
      "https://declass.netlify.app" +
      location.pathname +
      (location.pathname.endsWith("/") ? "" : "/") +
      x;
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
