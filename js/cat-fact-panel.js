class CatFactPanel extends HTMLElement {
    static get observedAttributes() {
        return ["compact"];
    }

    constructor() {
        super();

        this.facts = [
            "Cats use their whiskers to sense nearby objects.",
            "A cat's tail helps it maintain balance."
        ];

        this.currentIndex = 0;
    }

    connectedCallback() {
        if (this.initialized) return;
        this.initialized = true;

        const heading = document.createElement("h3");
        heading.textContent = "Cat Fact Explorer";

        this.factText = document.createElement("p");
        this.factText.textContent = this.facts[this.currentIndex];

        this.details = document.createElement("p");
        this.details.textContent = "Explore interesting facts about cats.";

        const nextButton = document.createElement("button");
        nextButton.type = "button";
        nextButton.textContent = "Next Fact";

        const liveButton = document.createElement("button");
        liveButton.type = "button";
        liveButton.textContent = "Get Live Cat Fact";

        this.liveButton = liveButton;

        this.status = document.createElement("p");
        this.status.setAttribute("role", "status");
        this.status.textContent = "Fact 1 of 2";

        nextButton.addEventListener("click", () => {
            this.currentIndex =
                (this.currentIndex + 1) % this.facts.length;

            this.factText.textContent =
                this.facts[this.currentIndex];

            this.status.textContent =
                `Fact ${this.currentIndex + 1} of ${this.facts.length}`;
        });

        liveButton.addEventListener("click", () => {
            this.loadLiveFact();
        });

        this.append(
            heading,
            this.factText,
            this.details,
            nextButton,
            liveButton,
            this.status
        );

        this.updateMode();
    }

    attributeChangedCallback(name) {
        if (name === "compact") {
            this.updateMode();
        }
    }

    updateMode() {
        if (!this.details) return;

        this.details.hidden = this.hasAttribute("compact");
    }

    async loadLiveFact() {
        this.status.textContent = "Loading cat fact...";
        this.liveButton.disabled = true;

        try {
            const response = await fetch("https://catfact.ninja/fact");

            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }

            const data = await response.json();

            if (typeof data?.fact !== "string" || !data.fact.trim()) {
                throw new Error("Invalid API response.");
            }

            this.factText.textContent = data.fact;
            this.status.textContent = "Live cat fact loaded successfully.";
            this.liveButton.textContent = "Get Live Cat Fact";

        } catch (error) {
            console.error("Failed to load cat fact:", error);

            this.status.textContent =
                "Could not load a cat fact. Please try again.";

            this.liveButton.textContent = "Try Again";

        } finally {
            this.liveButton.disabled = false;
        }
    }
}

customElements.define("cat-fact-panel", CatFactPanel);