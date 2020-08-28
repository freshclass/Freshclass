var exercise = new URLSearchParams(location.search).get("exercise");
var code = document.getElementById("code");
var result = document.getElementById("result").contentWindow.document;
function write(e) {
  result.open();
  result.write(e);
  result.close();
}
function run() {
  write(code.innerHTML.replace(/\t\n/g, ""));
}
if (exercise) {
  fetch("/docs/editor/" + exercise + ".txt")
    .then(function(e) {
      return e.text();
    })
    .then(function(e) {
      code.textContent = e;
      write(e);
    });
}
code.addEventListener("keydown", insertTabAtCaret);
function insertTabAtCaret(event) {
  if (event.keyCode === 9) {
    event.preventDefault();
    var range = getSelection().getRangeAt(0);
    var tabNode = document.createTextNode("\u00a0\u00a0");
    range.insertNode(tabNode);
    range.setStartAfter(tabNode);
    range.setEndAfter(tabNode);
  }
}
