const logError = (error) => {
    console.error(Array.isArray(error) ? error.join(' ') : error);
};

export { logError };
