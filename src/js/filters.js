const comboRegion = document.getElementById('region');
const comboLanguage = document.getElementById('language');

function onFilterChange() {
    const selectedRegion = comboRegion.value;
    const selectedLanguage = comboLanguage.value;

    currentDisplayedCountries = Object.values(Country.all_countries);

    if (selectedRegion != '')
        currentDisplayedCountries = currentDisplayedCountries.filter(
            (c) => c.region == selectedRegion
        );

    if (selectedLanguage != '')
        currentDisplayedCountries = currentDisplayedCountries.filter((c) =>
            c.languages.some(
                (l) => l == Language.all_languages[selectedLanguage].iso639_2
            )
        );

    page = 0;
    let searchField = document.getElementById('searchbar').value;
    currentDisplayedCountries = currentDisplayedCountries.filter((c) =>
        c.name.toLowerCase().includes(searchField.toLowerCase())
    );

    displayCountries(getCountriesParent(), currentDisplayedCountries); //This line will be erased for mutli-criteria research
}

function populateCombobox() {
    // Populate Region Combo
    for (const region of Country.getAllRegions()) {
        let optionElement = document.createElement('option');
        optionElement.setAttribute('value', region);

        optionElement.appendChild(document.createTextNode(region));

        comboRegion.append(optionElement);
    }

    // Populate Language Combo
    for (const languageCode of Country.getAllLanguages()) {
        const language = Language.all_languages[languageCode];
        let optionElement = document.createElement('option');
        optionElement.setAttribute('value', languageCode);

        optionElement.appendChild(document.createTextNode(language.name));

        comboLanguage.append(optionElement);
    }
}
populateCombobox();
