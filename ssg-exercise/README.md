# Eleventy SSG Exercise

The static site generator exercise for CSE 134B Homework 5 is in this folder.

## Pages

The exercise creates two pages that are copied from my portfolio.

- Home: `src/index.njk`
- About: `src/about.njk`

The common footer is used for both pages, from `src/_includes/footer.njk`.

## Installation

Open terminal in ssg-exercise folder, and execute:

```bash
npm install
```

## Build

Create HTML pages:

```bash
npx @11ty/eleventy
```

The files that are created are:

- `_site/index.html`
- `_site/about.html`

## Preview

Start the development server:

```bash
npx @11ty/eleventy --serve
```

Open:

- Home: http://localhost:8080/
- About: http://localhost:8080/about.html

## Shared Footer

The same template `footer.njk` is used for both pages.

If you edit the shared footer and rebuild the site, the footer is updated on both pages generated.

This exercise is seperate from the Original Portfolio.