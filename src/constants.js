const defaultOptions = {
    title: "Table of Contents",
    containerId: "toc-content",
    headers: ["h2", "h3", "h4"],
};

const selectors = {
    ids: {
        tocContainerElement: "toc",
        titleElement: "toc_title-header",
    },
    classes: {
        headerLinkElement: "toc_header-link",
        headerLinkElementVisible: "toc_header-link-visible",
        headerLinkElementHidden: "toc_header-link-hidden",
    },
};

export { defaultOptions, selectors };
