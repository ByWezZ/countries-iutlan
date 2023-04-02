const comboRegion = document.getElementById('region');
const comboLanguage = document.getElementById('language');

function onFilterChange() {
    const selectedRegion = comboRegion.value;

    currentDisplayedCountries = Object.values(Country.all_countries);

    if (selectedRegion != '')
        currentDisplayedCountries = currentDisplayedCountries.filter(
            (c) => c.region == selectedRegion
        );

    page = 0;
    let searchField = document.getElementById('searchbar').value;
    currentDisplayedCountries = currentDisplayedCountries.filter((c) =>
        c.name.toLowerCase().includes(searchField.toLowerCase())
    );

    displayCountries(getCountriesParent(), currentDisplayedCountries); //This line will be erased for mutli-criteria research
}

function onLanguageSelected() {}

function populateCombobox() {
    // Populate Region Combo
    for (const region of Country.getAllRegions()) {
        let optionElement = document.createElement('option');
        optionElement.setAttribute('value', region);

        optionElement.appendChild(document.createTextNode(region));

        comboRegion.append(optionElement);
    }
}
populateCombobox();
