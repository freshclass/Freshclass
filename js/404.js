var path = location.pathname;
if (path.length > 20) {
  path = path.substr(0, 17) + "...";
}
document.getElementById("path").innerHTML = path;
