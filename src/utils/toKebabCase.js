const toKebabCase = (string) => encodeURI(string.trim().toLowerCase().split(' ').join('-'));

export { toKebabCase };
