var exercise = new URLSearchParams(location.search).get("exercise");
var code = document.getElementById("code");
var iframe = document.getElementById("result");
var result = iframe.contentWindow.document;
function write(e) {
  result.open();
  result.write(e);
  result.close();
}
function run() {
  write(
    code.innerHTML
      .replace(/\t\n/g, "")
      .replace(/\&gt\;/g, ">")
      .replace(/\&lt\;/g, "<")
  );
}
if (exercise) {
  fetch("/docs/editor/exercises/" + exercise + ".txt")
    .then(function(e) {
      return e.text();
    })
    .then(function(e) {
      if (e.indexOf("404") < 0 && e.indexOf("Not Found") < 0) {
        code.textContent = e;
        write(e.replace(/\t\n/g, ""));
        document.title =
          "Declass / Editor / " +
          exercise
            .replace(/\-\-/g, "")
            .replace(/k-m/g, "km")
            .replace(/\-/g, " / ")
            .replace(/km/g, "k m")
            .replace(/(?:^|\s|["'([{])+\S/g, match => match.toUpperCase());
      } else {
        code.textContent =
          "Exercise not found, please make sure you're using a valid link.";
        document.title = "Declass / Editor / Not Found";
      }
    });
}
code.addEventListener("keydown", tab);
function tab(e) {
  if (e.keyCode === 9) {
    e.preventDefault();
    var cursor = getSelection().getRangeAt(0);
    var text = document.createTextNode("\u00a0\u00a0");
    cursor.insertNode(text);
    cursor.setStartAfter(text);
    cursor.setEndAfter(text);
  }
}
iframe.onload = function() {
  iframe.style.height = result.body.scrollHeight + 2 + "px";
};
