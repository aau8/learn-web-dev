(() => {
    "use strict";
    const e = document.querySelectorAll(".lesson-content");
    for (let t = 0; t < e.length; t++) {
        const l = e[t],
            n = l.parentElement,
            r = n.clientWidth,
            c = n.querySelector("pre code"),
            o = l.innerHTML.match(/\t+/)[0];
        c.parentElement.style.width = r + "px", c.innerHTML = l.innerHTML.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(new RegExp(o, "g"), "").replace(/	/g, "    ")
    }
    document.querySelectorAll("pre code").forEach((e => {
        hljs.highlightElement(e)
    }))
})();