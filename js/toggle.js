// (function(Declass) {
//   Declass.toggled = false;
//   Declass.root = document.documentElement;
//   Declass.include = function(e) {
//     var link = document.createElement("link");
//     link.rel = "stylesheet";
//     link.href = "https://" + location.hostname + "/css/" + e;
//     document.head.appendChild(link);
//   };
//   Declass.toggle = function(e) {
//     localStorage.declass =  e;
//     Declass.toggled =e;
//     if (e === true) {
//       Declass.root.style.setProperty("--black", "white");
//       Declass.root.style.setProperty("--white", "black");
//     } else {
//       Declass.root.style.setProperty("--black", "black");
//       Declass.root.style.setProperty("--white", "white");
//     }
//   };
//   if (!document.querySelector('link[rel="stylesheet"][href*="declass"]')) {
//     Declass.include("declass.min.css");
//   }
//   Declass.include("toggle.css");
//   Declass.button = document.createElement("button");
//   Declass.button.id = "declass-button";
//   Declass.button.textContent = "🌓";
//   Declass.button.onclick = function() {
//     if (Declass.toggled) {
//       Declass.toggle(false);
//     } else {
//       Declass.toggle(true);
//     }
//   };
//   document.body.appendChild(Declass.button);
//   if (localStorage.declass) {
//     Declass.toggle(localStorage.declass);
//   }
// })({});
