const toggle = document.querySelector("#theme-toggle");
const root = document.documentElement;

function saveTheme(theme) {
    try {
        localStorage.setItem("theme", theme);
    } catch (error) {
        // Theme still works when storage is unavailable.
    }
}

function getSavedTheme() {
    try {
        return localStorage.getItem("theme");
    } catch (error) {
        return null;
    }
}

function applyTheme(theme) {
    root.dataset.theme = theme;

    if (toggle) {
        toggle.textContent = theme === "dark"
            ? "Switch to Light"
            : "Switch to Dark";
    }
}

const savedTheme = getSavedTheme();
applyTheme(savedTheme === "dark" ? "dark" : "light");

if (toggle) {
    toggle.hidden = false;

    toggle.addEventListener("click", () => {
        const nextTheme = root.dataset.theme === "dark"
            ? "light"
            : "dark";

        const changeTheme = () => {
            applyTheme(nextTheme);
            saveTheme(nextTheme);
        };

        const reducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (document.startViewTransition && !reducedMotion) {
            document.startViewTransition(changeTheme);
        } else {
            changeTheme();
        }
    });
}