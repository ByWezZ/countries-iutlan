function searchCountries() {
    page = 0;
    let searchField = document.getElementById('searchbar').value;
    currentDisplayedCountries = Object.values(Country.all_countries).filter(
        (c) => c.name.toLowerCase().includes(searchField.toLowerCase())
    );

    displayCountries(getCountriesParent(), currentDisplayedCountries); //This line will be erased for mutli-criteria research
}

function populateCombobox() {
    let comboRegion = document.getElementById('region');
    let comboLanguage = document.getElementById('language');

    // Populate Region Combo
    for (const region of Country.getAllRegions()) {
        let optionElement = document.createElement('option');
        optionElement.setAttribute('value', region);

        optionElement.appendChild(document.createTextNode(region));

        comboRegion.append(optionElement);
    }
}
populateCombobox();
