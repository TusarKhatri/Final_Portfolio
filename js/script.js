
const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const nav = $(".navbar");
    const menuButton = $(".menu-btn");
    const navLinks = $(".nav-links");
    const themeButton = $(".theme-btn");
    const backTop = $(".back-top");

    // Theme
    const savedTheme = localStorage.getItem("tusar-portfolio-theme");
    if (savedTheme === "light" || savedTheme === "dark") {
        body.dataset.theme = savedTheme;
    } else {
        body.dataset.theme = "light";
    }

    updateThemeIcon();

    themeButton?.addEventListener("click", () => {
        const nextTheme = body.dataset.theme === "dark" ? "light" : "dark";
        body.dataset.theme = nextTheme;
        localStorage.setItem("tusar-portfolio-theme", nextTheme);
        updateThemeIcon();
    });

    function updateThemeIcon() {
        if (!themeButton) return;
        const dark = body.dataset.theme === "dark";
        themeButton.innerHTML = dark
            ? '<i class="fa-solid fa-sun"></i>'
            : '<i class="fa-solid fa-moon"></i>';
        themeButton.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
    }

    // Mobile menu
    menuButton?.addEventListener("click", () => {
        const open = navLinks?.classList.toggle("open");
        menuButton.innerHTML = open
            ? '<i class="fa-solid fa-xmark"></i>'
            : '<i class="fa-solid fa-bars"></i>';
    });

    $$(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks?.classList.remove("open");
            if (menuButton) menuButton.innerHTML = '<i class="fa-solid fa-bars"></i>';
        });
    });

    // Header and back-to-top
    const updateScrollUI = () => {
        nav?.classList.toggle("scrolled", window.scrollY > 8);
        backTop?.classList.toggle("show", window.scrollY > 500);
    };

    window.addEventListener("scroll", updateScrollUI, { passive: true });
    updateScrollUI();

    backTop?.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Reveal animations
    const revealElements = $$(".reveal");

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            });
        }, { threshold: 0.12 });

        revealElements.forEach(element => observer.observe(element));
    } else {
        revealElements.forEach(element => element.classList.add("visible"));
    }

    // Project filtering
    const filters = $$(".filter");
    const projects = $$(".project[data-category]");

    filters.forEach(filter => {
        filter.addEventListener("click", () => {
            filters.forEach(item => item.classList.remove("active"));
            filter.classList.add("active");

            const selected = filter.dataset.filter;

            projects.forEach(project => {
                const categories = project.dataset.category.split(" ");
                const visible = selected === "all" || categories.includes(selected);
                project.classList.toggle("hidden", !visible);
            });
        });
    });

    // Contact form: no fake backend. Opens the visitor's email client.
    const contactForm = $("#contactForm");

    contactForm?.addEventListener("submit", event => {
        event.preventDefault();

        const name = $("#name")?.value.trim();
        const email = $("#email")?.value.trim();
        const subject = $("#subject")?.value.trim() || "Portfolio enquiry";
        const message = $("#message")?.value.trim();

        if (!name || !email || !message) {
            showToast("Please complete the required fields.");
            return;
        }

        const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
        const gmailUrl =
            `https://mail.google.com/mail/?view=cm&fs=1` +
            `&to=tusharkhatri888@gmail.com` +
            `&su=${encodeURIComponent(subject)}` +
            `&body=${encodeURIComponent(body)}`;

        window.open(gmailUrl, "_blank", "noopener,noreferrer");
        contactForm.reset();
    });

    function showToast(message) {
        const toast = $(".toast");
        if (!toast) return;

        toast.textContent = message;
        toast.classList.add("show");

        window.setTimeout(() => toast.classList.remove("show"), 2300);
    }

    $$(".current-year").forEach(element => {
        element.textContent = new Date().getFullYear();
    });
});
