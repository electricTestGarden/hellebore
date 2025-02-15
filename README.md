# Hellebore Astro Comic Theme 
This is a work in progress - a simple Astro theme aimed at providing a simple way to get a webcomic up and running.

## Description
This simple Astro theme is designed to let you get your comic online quickly with some comic centric features.
It is adapted from a personal comic site to help avoid duplication of effort. 

## Current features
* Automatic pagination by date
* Arrow keys navigate forward and backward on desktop
* Swipe gestures navigate forward and backward on mobile
* Tag archive pages are automatically created
    * Optional tag descriptions can be added to archive pages
* Character archive pages are automatically created
    * Optional character descriptions can be added, and will add characters to the 'characters' page
* Social media previews
* prev and next metadata (used by some comic bookmarking tools) 

## Roadmap features
* Long press to zoom
* Optional separate image for mobile formats
* 'Save my place' functionality

## Project Structure
Most of the project structure follows the default Astro structure: 

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

Hellebore adds a few more directories

```text
/
├── example/
├── public/
├── src/
│   └── assets/
│       └── js/ 
│       └── styles/ 
│   └── pages/
│       └── comic/ 
│       └── index.astro
│   └── data/
└── package.json
```

* Assets is where our js and styles live. 
* Data is where collections such as characters and tags are stored in json files.
  You can find examples of these in the example directory. 
* Comics should be added as markdown (.md) files in the `pages/comic` directory. 
  You can find example comics in the `example/assets/comics` directory.
  Comic files can be added to the `public` directory. We suggest `public/assets/images/comics`.
* Hellebore comes with some useful pages. 
    * archive.astro - full archive of your comic in date order.
    * characters.astro - uses `data/characters.json` file to produce a page with character descriptions and images.
    * index.astro - your main page with your latest comic and blog post.
    * `comic/character/[character].astro` - generates a page for an individual character
    * `comic/tag/[tag].astro` - generates a page for an individual tag

## Updating your site

### Sitewide variables
Sitewide variables, such as your site name, can be added in your .env file. Copy example.env to .env to 
get started.

### Comics
Hellebore is designed to allow you to make updates that you need. Your comic files should never be overwritten, all example comic updates are made in the `example` directory. Each comic file includes
some meta data about the comic, and an optional blog post. Some meta data is optional, such as the 
transcript, but we'd suggest adding one for better accessibility and search discoverability. 

### Styles
SCSS updates can be made in the `src/assets/styles/user-styles` directory. `_user-variables.scss` allows you
to overwrite color and font variables, and other changes can be made in `_main.scss`

### JS
User JS hooks are currently a roadmap feature.

### Hooks
Other hooks are currently a roadmap feature. If there's a spot you'd like to add additional code, 
leave an issue explaining what you'd like it for, and we'll see if it can be integrated.

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
| `npm run setup:examples`  | Setup example comics and pages                   |
| `npm run cleanup:examples`| Remove example comics and pages                  |

## Local development
We use yarn for package management, but this project should be compatible with npm, etc.

* Run `yarn install` or `npm install` 
* Run `yarn dev` or `npm run dev`

Your local site should be available at `locahost:4321`

## Deploying your site
Astro is compatible with many different deployment methods. Check out [their documentation page](https://docs.astro.build/en/guides/deploy/) on the subject to learn more! We're partial to Cloudflare Pages. 


## 👀 Want to learn more about Astro?

Feel free to check [Astro's documentation](https://docs.astro.build) or jump into their [Discord server](https://astro.build/chat).
