const catFactPanel = document.querySelector("#portfolio-cat-facts");
const modeButton = document.querySelector("#fact-mode-toggle");
const storageKey = "hw5-cat-fact-panel-mode";

function setCompactMode(isCompact) {
    catFactPanel.toggleAttribute("compact", isCompact);

    modeButton.textContent = isCompact
        ? "Use Expanded View"
        : "Use Compact View";

    modeButton.setAttribute("aria-pressed", String(isCompact));
}

function getSavedMode() {
    try {
        return localStorage.getItem(storageKey);
    } catch (error) {
        return null;
    }
}

function saveMode(mode) {
    try {
        localStorage.setItem(storageKey, mode);
    } catch (error) {
        // Compact View still works if storage is unavailable.
    }
}

const savedMode = getSavedMode();

setCompactMode(savedMode === "compact");

modeButton.addEventListener("click", () => {
    const isCompact = !catFactPanel.hasAttribute("compact");

    setCompactMode(isCompact);
    saveMode(isCompact ? "compact" : "expanded");
});