export const dublicateCheck = (array) => {
    const uniqueArray = [];
    const seen = new Set();

    array.forEach((item) => {
        const area = item.strArea;
        const country = item.strCountry;

        const key = `${area}-${country}`;

        if (!seen.has(key)) {
            seen.add(key);

            uniqueArray.push({
                area: area === null ? country : area,
                country: country
            });
        }
    });

    return { uniqueArray };
};