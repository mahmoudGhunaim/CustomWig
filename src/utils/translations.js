// Create this new file to handle translations in React components

const getTranslation = (key, fallback = '') => {
    if (window.cwr_api?.translations && window.cwr_api.translations[key]) {
        return window.cwr_api.translations[key];
    }
    return fallback;
};

export default getTranslation;