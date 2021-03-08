function get() {
  fetch("/docs/nav.html")
    .then(function(e) {
      return e.text();
    })
    .then(function(e) {
      document.getElementById("sidebar").innerHTML = e
        .split("-->")[1]
        .split("<!--")[0];
    });
}
var currentPage = location.href;
setInterval(function() {
  if (currentPage != location.href) {
    get();
    currentPage = location.href;
  }
}, 500);
get();
