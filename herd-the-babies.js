const herdTheBabies = (string) => {
    const strArr = [...string];

    strArr.sort((a, b) => {

        const A = a.toUpperCase();
        const B = b.toUpperCase();

        if (A === B) {
            return a < b ? -1 : 1;
        }
        else {
            return A < B ? -1 : 1;
        }
    });

    return strArr.join("");
};

module.exports = herdTheBabies;
