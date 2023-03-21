class Country {
    static all_countries = {};
    constructor(obj) {
        this.alpha3Code = obj.alpha3Code;
        this.name = obj.name;
        this.area = obj.area;
        this.borders = obj.borders || [];
        this.capital = obj.capital;
        this.region = obj.region;
        this.demonym = obj.demonym;
        this.flag = obj.flags.svg;
        this.translations = {
            fr: obj.translations.fr,
            de: obj.translations.de,
            es: obj.translations.es,
            it: obj.translations.it,
        };
        this.population = obj.population;
        this.topLevelDomain = obj.topLevelDomain;
        this.currencies = obj.currencies?.map((cc) => cc.code) || [];
        this.languages = obj.languages?.map((lang) => lang.iso639_2) || [];
    }

    toString() {
        let str = '';
        str += 'Alpha 3 Code : ' + this.alpha3Code + '\n';
        str += 'Name : ' + this.name + '\n';
        str += 'Area : ' + this.area + '\n';
        str += 'Capital : ' + this.capital + '\n';
        str += 'Region : ' + this.region + '\n';
        str += 'Demonym : ' + this.demonym + '\n';
        str += 'Flag : ' + this.flag + '\n';
        str += 'Population : ' + this.population + '\n';
        str += 'Top Level Domain : ' + this.topLevelDomain + '\n';
        str += 'Borders : ' + this.borders.join(', ') + '\n';
        str +=
            'Translations : ' +
            Object.keys(this.translations)
                .map((k) => `${k} => ${this.translations[k]}`)
                .join(', ') +
            '\n';
        str += 'Currencies : ' + this.currencies.join(', ') + '\n';
        return str;
    }

    getPopDensity() {
        return this.population / this.area;
    }

    getBorders() {
        return this.borders.map((element) => Country.all_countries[element]);
    }

    static getLongestName() {
        let maximumLengthFound = 0;
        let longestName;
        Object.values(Country.all_countries).forEach((elem) => {
            if (maximumLengthFound < elem.name.length) {
                maximumLengthFound = elem.name.length;
                longestName = elem.name;
            }
        });

        return longestName;
    }

    getCurrencies() {
        return this.currencies.map((code) => Currency.all_currencies[code]);
    }

    getLanguages() {
        return this.languages.map((iso2) => Language.all_languages[iso2]);
    }

    getFlagSvgURL() {
        return this.flag;
    }

    nameToTextNode() {
        return document.createTextNode(this.name);
    }

    capitalRegionToTextNode() {
        return document.createTextNode(
            `${this.capital ? `${this.capital} - ` : ''}${this.region}`
        );
    }

    populationToTextNode() {
        return document.createTextNode(this.population);
    }

    areaToTextNode() {
        return document.createTextNode(
            `Area : ${
                this.area
                    ? new Intl.NumberFormat('en-EN', {
                          style: 'unit',
                          unit: 'kilometer',
                          maximumSignificantDigits: 3,
                          unitDisplay: 'short',
                      }).format(this.area) + '²'
                    : 'Unknown'
            }`
        );
    }

    densityToTextNode() {
        return document.createTextNode(
            `Density : ${
                this.getPopDensity()
                    ? `${new Intl.NumberFormat('en-EN', {
                          style: 'decimal',
                          maximumSignificantDigits: 3,
                      }).format(this.getPopDensity())} inhab/km²`
                    : 'Unknown'
            }`
        );
    }

    toArticle() {
        let article = document.createElement('article');
        let image = document.createElement('img');
        let countryName = document.createElement('h2');
        let regionContainer = document.createElement('div');
        let pinIcon = document.createElement('img');
        let regionName = document.createElement('h3');
        let population = document.createElement('p');
        let area = document.createElement('p');
        let density = document.createElement('p');

        article.setAttribute('id', this.alpha3Code);

        countryName.appendChild(this.nameToTextNode());

        image.setAttribute('src', this.flag);
        image.setAttribute('alt', 'Flag of ' + this.name);

        pinIcon.setAttribute('src', 'assets/icons/pin.png');
        pinIcon.setAttribute('alt', 'Pin icon');
        regionName.appendChild(this.capitalRegionToTextNode());
        regionContainer.append(pinIcon, regionName);

        population.appendChild(this.populationToTextNode());

        area.appendChild(this.areaToTextNode());

        density.appendChild(this.densityToTextNode());

        article.append(
            countryName,
            image,
            regionContainer,
            population,
            area,
            density
        );

        return article;
    }
}
