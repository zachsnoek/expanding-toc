import { toKebabCase } from './utils/toKebabCase';
import { defaultOptions, selectors } from './constants';
import './styles.css';

const { ids, classes } = selectors;

const createTitleElement = (title) => {
    const titleElement = document.createElement('h2');

    titleElement.id = ids.titleElement;
    titleElement.innerText = title;

    return titleElement;
};

const createHeaderLinkElement = (id, text) => {
    const linkElement = document.createElement('a');

    linkElement.classList.add(classes.headerLinkElement);
    linkElement.classList.add(classes.headerLinkElementHidden);
    linkElement.href = `${window.location.pathname}#${id}`;
    linkElement.innerText = text;

    return linkElement;
};

const init = (userOptions) => {
    const options = { ...defaultOptions, ...userOptions };

    const contentContainerElement = document.getElementById(options.containerId);

    if (!contentContainerElement) {
        console.error(
            `Table of contents could not be generated for content container with ID '${options.containerId}'.`
        );
        return;
    }

    const tocContainerElement = document.getElementById(ids.tocContainerElement);

    if (!tocContainerElement) {
        console.error(
            [
                `Table of contents container with ID '${ids.tocContainerElement}' could not be found.`,
                `Ensure that you have an element with ID '${ids.tocContainerElement}' created and try again.`,
            ].join(' ')
        );
        return;
    }

    const headerElements = contentContainerElement.querySelectorAll(
        options.headerSelectors.join(', ')
    );

    if (headerElements.length === 0) {
        console.error(
            `Table of contents could not be generated for selectors '${options.headerSelectors}'.`
        );
        return;
    }

    if (options.title !== false) {
        const titleElement = createTitleElement(options.title);
        tocContainerElement.append(titleElement);
    }

    for (const header of headerElements) {
        if (!header.innerText) {
            continue;
        }

        if (!header.id) {
            header.id = toKebabCase(header.innerText);
        }

        const headerLinkElement = createHeaderLinkElement(header.id, header.innerText);
        tocContainerElement.append(headerLinkElement);
    }

    const headerLinkElements = document.getElementsByClassName(classes.headerLinkElement);

    const toggleHeaderLinkClasses = () => {
        for (const header of headerLinkElements) {
            header.classList.toggle(classes.headerLinkElementHidden);
            header.classList.toggle(classes.headerLinkElementVisible);
        }
    };

    tocContainerElement.onmouseenter = toggleHeaderLinkClasses;
    tocContainerElement.onmouseleave = toggleHeaderLinkClasses;
};

// API
export { init };
