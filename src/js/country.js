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
    this.currencies = obj.currencies?.map(cc => cc.code) || [];
    this.languages = obj.languages?.map(lang => lang.iso639_2) || [];
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
        .map(k => `${k} => ${this.translations[k]}`)
        .join(', ') +
      '\n';
    str += 'Currencies : ' + this.currencies.join(', ') + '\n';
    return str;
  }

  getPopDensity() {
    return this.population / this.area;
  }

  getBorders() {
    return this.borders.map(element => Country.all_countries[element]);
  }

  static getLongestName() {
    let maximumLengthFound = 0;
    let longestName;
    Object.values(Country.all_countries).forEach(elem => {
      if (maximumLengthFound < elem.name.length) {
        maximumLengthFound = elem.name.length;
        longestName = elem.name;
      }
    });

    return longestName;
  }

  getCurrencies() {
    return this.currencies.map(code => Currency.all_currencies[code]);
  }

  getLanguages() {
    return this.languages.map(iso2 => Language.all_languages[iso2]);
  }
}
