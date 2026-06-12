const menuButton = document.querySelector(".menu-button");
const siteNav = document.querySelector(".site-nav");
const navLinks = document.querySelectorAll(".site-nav a");
const currentYear = document.querySelector("#current-year");
const timeGreeting = document.querySelector("#time-greeting");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}

if (timeGreeting) {
    const currentHour = new Date().getHours();

    if (currentHour >= 4 && currentHour < 10) {
        timeGreeting.textContent = "おはよう！";
    } else if (currentHour >= 10 && currentHour < 19) {
        timeGreeting.textContent = "こんにちは！";
    } else {
        timeGreeting.textContent = "こんばんは！";
    }
}

if (menuButton && siteNav) {
    menuButton.addEventListener("click", () => {
        const isOpen = menuButton.getAttribute("aria-expanded") === "true";
        menuButton.setAttribute("aria-expanded", String(!isOpen));
        menuButton.setAttribute("aria-label", isOpen ? "メニューを開く" : "メニューを閉じる");
        siteNav.classList.toggle("is-open", !isOpen);
        document.body.classList.toggle("menu-open", !isOpen);
    });

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            menuButton.setAttribute("aria-expanded", "false");
            menuButton.setAttribute("aria-label", "メニューを開く");
            siteNav.classList.remove("is-open");
            document.body.classList.remove("menu-open");
        });
    });
}

const revealTargets = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.16
    });

    revealTargets.forEach((target) => revealObserver.observe(target));
} else {
    revealTargets.forEach((target) => target.classList.add("is-visible"));
}

const sections = document.querySelectorAll("main section[id]");

if ("IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) {
                return;
            }

            navLinks.forEach((link) => {
                link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
            });
        });
    }, {
        rootMargin: "-35% 0px -55% 0px"
    });

    sections.forEach((section) => sectionObserver.observe(section));
}
