# CSE 134B Homework 5

Matthew Gunawan

## Portfolio

The Web Component can be found at `projects.html`.

## Web Component

A Cat Facts Web Component showing cat facts and fetching live facts with Cat Facts API.

Visitors can:
- View the next sample fact.
Ask for a real cat fact,
Switch between a compact view and an expanded view.

## Design Note

If the visitor chooses to click "Get Live Cat Fact", he or she will get a new fact.
On click, the component will use fetch to perform a GET request to `https://catfact.ninja/fact.
The component shows the loading message and inactivates the request button until the response comes.
On success, the response received is a JSON object which is validated to ensure that it contains a string `fact`. Paragraph is displayed using textContent which does not require a page reload. A success message is then displayed.
The component will show an error message if the request fails and will change the button to "Try Again. The facts from the previous time are still there to be seen, and the visitor can try again without having to refresh the website.
The "compact view" or "extended view" preference is stored in `localStorage` and recalled on page reload.
Write a short static site generator.Write a small static site generator.
The Eleventy exercise is in the `ssg-exercise/`.

The two pages that they produced are:
- Home: `src/index.njk`
- About: `src/about.njk`

The shared footer is used on both pages in src/_includes/footer.njk.

### Installation

From the `ssg-exercise` folder:

```bash
npm install
```

### Build

```bash
npx @11ty/eleventy
```

### Preview

```bash
npx @11ty/eleventy --serve
```

Look at the pages that will be created at:
- http://localhost:8080/
- http://localhost:8080/about.html

More instructions are in ssg-exercise/README.md.

The Eleventy exercise is not part of the main portfolio.