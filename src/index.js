import { toKebabCase } from "./utils/toKebabCase";
import { defaultOptions, selectors } from "./constants";
import "./styles.css";

const { ids, classes } = selectors;

const createTitleElement = (title) => {
    const titleElement = document.createElement("div");

    titleElement.id = ids.titleElement;
    titleElement.innerText = title;

    return titleElement;
};

const createHeaderLinkElement = (headerText, headerId) => {
    const linkElement = document.createElement("a");

    linkElement.classList.add(classes.headerLinkElement);
    linkElement.classList.add(classes.headerLinkElementHidden);
    linkElement.href = `${window.location.pathname}#${headerId}`;
    linkElement.innerText = headerText;

    return linkElement;
};

const init = (userOptions) => {
    const options = { ...defaultOptions, ...userOptions };

    const postContainerElement = document.getElementById(options.containerId);

    if (!postContainerElement) {
        console.error(
            `Table of contents could not be generated for content container with ID '${options.containerId}'.`
        );
        return;
    }

    const tableOfContentsContainer = document.getElementById(
        ids.tocContainerElement
    );

    if (!tableOfContentsContainer) {
        console.error(
            [
                `Table of contents container with ID '${ids.tocContainerElement}' could not be found.`,
                `Ensure that you have an element with ID '${ids.tocContainerElement}' created and try again.`,
            ].join(" ")
        );
        return;
    }

    const headerElements = postContainerElement.querySelectorAll(
        options.headers.join(", ")
    );

    if (headerElements.length === 0) {
        console.error(
            `Table of contents could not be generated for selectors '${options.headers}'.`
        );
        return;
    }

    if (options.title !== false) {
        const titleElement = createTitleElement(options.title);
        tableOfContentsContainer.append(titleElement);
    }

    for (let i = 0; i < headerElements.length; i++) {
        const header = headerElements[i];

        if (!header.innerText) {
            continue;
        }

        if (!header.id) {
            header.id = toKebabCase(header.innerText);
        }

        const headerElement = createHeaderLinkElement(
            header.innerText,
            header.id
        );
        tableOfContentsContainer.append(headerElement);
    }

    const headerLinkElements = document.getElementsByClassName(
        classes.headerLinkElement
    );

    const toggleHeaderLinkClasses = () => {
        for (let i = 0; i < headerLinkElements.length; i++) {
            const header = headerLinkElements[i];
            header.classList.toggle(classes.headerLinkElementHidden);
            header.classList.toggle(classes.headerLinkElementVisible);
        }
    };

    tableOfContentsContainer.addEventListener(
        "mouseover",
        toggleHeaderLinkClasses
    );
    tableOfContentsContainer.addEventListener(
        "mouseout",
        toggleHeaderLinkClasses
    );
};

export { init };
