const getQueryValue = (location) => {

    const queryString = location.search;
    const startIndex = queryString.indexOf('=');

    const value = queryString.substring(startIndex + 1);

    return value;

};

export default getQueryValue;