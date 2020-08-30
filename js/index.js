function scrollto(e) {
  history.pushState({}, document.title, "#" + e);
  if (e === "about" && location.pathname === "/") {
    document.title = "Declass | About";
  }
  scroll({
    top: document.getElementById(e).getBoundingClientRect().top - 90,
    behavior: "smooth"
  });
}
function copy(x) {
  var e = document.createElement("textarea");
  if (x.startsWith("#")) {
    e.value =
      "https://" +
      location.hostname +
      location.pathname +
      (location.pathname.endsWith("/") ? "" : "/") +
      x;
  } else {
    e.value = x;
  }
  document.body.appendChild(e);
  e.select();
  document.execCommand("copy");
  document.body.removeChild(e);
}
scrollTo(0, 0);
onload = function() {
  if (location.hash) {
    scrollto(location.hash.replace("#", ""));
  }
};
onhashchange = function() {
  scrollto(location.hash.replace("#", ""));
};
