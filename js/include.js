window.addEventListener("DOMContentLoaded", async () => {

    async function load(id, file) {

        const target = document.getElementById(id);

        if (!target) return;

        const res = await fetch(file);

        target.innerHTML = await res.text();

    }

    await load("header-html", "/include/header.html");

    if (typeof initMenu === "function") {

        initMenu();

    }

    await load("subHead-html", "/include/subHead.html");

    await load("footer-html", "/include/footer.html");

});