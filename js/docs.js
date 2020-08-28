fetch("/docs/nav.html")
  .then(function(e) {
    return e.text();
  })
  .then(function(e) {
    document.getElementById("sidebar").innerHTML = e
      .split("-->")[1]
      .split("<!--")[0];
  });