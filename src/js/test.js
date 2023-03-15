//Q1
function outsideTheContinent() {
    return Object.values(Country.all_countries).filter((elem) =>
        elem.borders.some(
            (b) => elem.region !== Country.all_countries[b].region
        )
    );
}

//Q2
function moreNeighbors() {
    res = [];

    let maxNeighbors = 0;

    Object.values(Country.all_countries).forEach((v) => {
        if (v.borders.length > maxNeighbors) {
            maxNeighbors = v.borders.length;
            res = [v];
        } else if (v.borders.length == maxNeighbors) {
            res.push(v);
        }
    });

    return res;
}

//Q3
function neighborless() {
    return Object.values(Country.all_countries).filter(
        (elem) => !elem.borders.length
    );
}

//Q4
function moreLanguages() {
    res = [];

    let maxLanguages = 0;

    Object.values(Country.all_countries).forEach((v) => {
        if (v.languages.length > maxLanguages) {
            maxLanguages = v.languages.length;
            res = [v];
        } else if (v.languages.length == maxLanguages) {
            res.push(v);
        }
    });

    return res;
}

//Q5
function withCommonLanguage() {
    res = {};

    Object.values(Country.all_countries).forEach((c) => {
        c.languages.forEach((lang) => {
            c.borders.forEach((b) => {
                let border = Country.all_countries[b];

                if (border.languages.includes(lang)) {
                    if (!res[c.alpha3Code]) res[c.alpha3Code] = {};

                    if (res[c.alpha3Code][lang])
                        res[c.alpha3Code][lang].push(border.alpha3Code);
                    else res[c.alpha3Code][lang] = [border.alpha3Code];
                }
            });
        });
    });

    return res;
}
//Q6

function withoutCommonCurrency() {
    res = [];
    foundCommonCurrency = false;
    i = 0;

    Object.values(Country.all_countries).forEach((c) => {
        while (!foundCommonCurrency && i < c.borders.length) {
            Country.all_countries[c.borders[i]].currencies.forEach((bc) => {
                if (c.currencies.includes(bc)) {
                    foundCommonCurrency = true;
                }
            });
            ++i;
        }
        if (!foundCommonCurrency) {
            res.push(c);
        }
        foundCommonCurrency = false;
        i = 0;
    });

    return res;
}

//Q7
function sortingDecreasingDensity() {
    return Object.values(Country.all_countries).sort(
        (a, b) => b.getPopDensity() - a.getPopDensity()
    );
}

//Q8
function moreTopLevelDomains() {
    return Object.values(Country.all_countries).filter(
        (elem) => elem.topLevelDomain.length > 1
    );
}

//Q9
function veryLongTrip(country_name) {}
