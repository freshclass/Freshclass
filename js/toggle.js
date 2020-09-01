(function(Declass, doc) {
  Declass.included = !!doc.querySelector(
    'link[rel="stylesheet"][href*="declass"]'
  );
  Declass.include = function(e) {
    var link = doc.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://declass.netlify.app/css/" + e;
    doc.head.appendChild(link);
  };
  if (Declass.included === false) {
    Declass.include("declass.min.css");
  }
  Declass.include("toggle.css");
  Declass.button = doc.createElement("button");
  Declass.button.id = "declass-button";
  Declass.button.textContent = "🌓";
  doc.body.appendChild(Declass.button);
})({}, document);
