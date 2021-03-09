!(function (t, e, o) {
    (t.root = e.documentElement),
        (t.include = function (t) {
            var o = e.createElement("link");
            (o.rel = "stylesheet"), (o.href = "https://freshclass.netlify.app/css/" + t), e.head.appendChild(o);
        }),
        (t.toggle = function () {
            var e = "black",
                o = "white",
                l = "--";
            t.toggled
                ? (t.root.style.setProperty(l + e, e), t.root.style.setProperty(l + o, o), localStorage.removeItem("toggled"), (t.toggled = !1))
                : (t.root.style.setProperty(l + e, o), t.root.style.setProperty(l + o, e), (localStorage.toggled = t.toggled = !0));
        }),
        e.querySelector('link[rel="stylesheet"][href*="freshclass"]') || t.include("freshclass.min.css"),
        t.include("toggle.css"),
        (t.button = e.createElement("button")),
        (t.button.id = "freshclass-button"),
        (t.button.textContent = "🌓"),
        (t.button.onclick = t.toggle),
        e.body.appendChild(t.button),
        setInterval(function () {
            o !== location.href && (e.body.appendChild(t.button), (o = location.href));
        }, 500),
        e.body.appendChild(t.button),
        localStorage.toggled && t.toggle();
})({}, document, location.href);

