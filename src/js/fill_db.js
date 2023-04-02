function fillDbFrom(arr) {
    let currentCountry;
    let currentCurrency;
    let currentLanguage;

    arr.forEach((c) => {
        //Adding all currencies to Currencies.all_currencies

        currentCountry = new Country(c);
        if (c.currencies) {
            c.currencies.forEach((cu) => {
                if (!(cu.code in Currency.all_currencies)) {
                    currentCurrency = new Currency(cu);
                    Currency.all_currencies[currentCurrency.code] =
                        currentCurrency;
                }
            });
        }

        //Adding all countries to Country.all_countries

        if (currentCountry.alpha3Code)
            Country.all_countries[currentCountry.alpha3Code] = currentCountry;

        //Adding all languages to Language.all_languages
        if (c.languages) {
            c.languages.forEach((lang) => {
                if (!(lang.iso639_2 in Language.all_languages)) {
                    currentLanguage = new Language(lang);
                    Language.all_languages[currentLanguage.iso639_2] =
                        currentLanguage;
                }
            });
        }
    });
}
