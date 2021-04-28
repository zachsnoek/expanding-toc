const toKebabCase = (string) => {
    return encodeURI(string.trim().toLowerCase().split(' ').join('-'));
};

export { toKebabCase };
