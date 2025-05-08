# Expanding Table of Contents Component

[BibleProject](https://bibleproject.com/) had a neat expanding table of contents (ToC) component shown on their blog posts. This repo contains a simple clone and some examples I built in 2021.

On page load, the ToC hides the header characters and displays horizontal lines with matching lengths. On hover, the ToC expands and displays the header title links, which navigate to the headers on click.

## Demo

https://www.loom.com/share/7e0ec001a2d34110b86ce0df792f4527

## Usage

To add the expanding ToC component to your page, you'll need to do the following:

1. Include the ToC styles

```html
<head>
    <link rel="stylesheet" href="toc.css" />
</head>
```

2. Add a container element with `id="toc-content"` around your content

```html
<div id="toc-content">
    <h1>All About Turtles</h1>
    <!-- ... -->
</div>
```

3. Add an empty element for the component with `id="toc"`

```html
<body>
    <!-- ... -->
    <div id="toc"></div>
</body>
```

4. Include the ToC JavaScript files and initialize the component

```html
<body>
    <!-- ... -->
    <div id="toc"></div>

    <script src="toc.js"></script>
    <script>
        toc.init();
    </script>
</body>
```

Here's a simple example following this setup:

```html
<html lang="en">
    <head>
        <title>My Turtle Blog | All About Turtles</title>
        <link rel="stylesheet" href="toc.css" />
    </head>
    <body>
        <div id="toc-content">
            <h1>All About Turtles</h1>
            <p>...</p>
            <h2>Etymology</h2>
            <p>...</p>
            <h2>Human Culture</h2>
            <p>...</p>
            <h2>Anatomy</h2>
            <p>...</p>
            <h2>Ecology & History</h2>
            <p>...</p>
            <h3>Sources</h3>
            <p>...</p>
        </div>

        <div id="toc"></div>

        <script src="toc.js"></script>
        <script>
            toc.init();
        </script>
    </body>
</html>
```

## API and customization

You can customize the ToC component to fit your preferences and theming. `init` accepts the following options:

-   `title`: The title to display above the component. Set to `false` to hide the title. Defaults to `'Table of Contents'`.
-   `containerId`: The ID of the content container element which contains the ToC headers. Defaults to `'toc-content'`.
-   `headerSelectors`: An array of CSS selectors that identify the header elements within the targeted `containerId`. Defaults to `['h2', 'h3', 'h4']`.

Here's a fully customized example:

```html
<html lang="en">
    <head>
        <title>My Turtle Blog | All About Turtles</title>
        <link rel="stylesheet" href="toc.css" />
        <style>
            #toc_title-header {
                color: #648c6a;
            }
            .toc_header-link {
                color: #8f8389;
                border-bottom-color: #3097bf;
            }
            .toc_header-link:hover {
                color: #3097bf;
            }
        </style>
    </head>
    <body>
        <div id="post-content">
            <h1>All About Turtles</h1>
            <p>...</p>
            <h2 class="post-header">Etymology</h2>
            <p>...</p>
            <h2 class="post-header">Human Culture</h2>
            <p>...</p>
            <h2 class="post-header">Anatomy</h2>
            <p>...</p>
            <h2 class="post-header">Ecology & History</h2>
            <p>...</p>
        </div>

        <div id="toc"></div>

        <script src="toc.js"></script>
        <script>
            toc.init({
                title: false,
                containerId: 'post-content',
                headerSelectors: ['.post-header'],
            });
        </script>
    </body>
</html>
```

## Running the examples locally

1. Run `$ yarn && yarn build`. Currently tested with Node v16.
2. Run `$ yarn dev`; the dev server will be live at `http://localhost:3000`.
