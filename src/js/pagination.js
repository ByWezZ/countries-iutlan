const NUMBER_OF_ELEM_PER_PAGE = 25;

function updateCountry(element, country) {
    let name = element.getElementsByTagName('h2').item(0);
    let image = element.getElementsByTagName('img').item(0);
    let capitalRegion = element.getElementsByTagName('h3').item(0);
    let [population, area, density] = element.getElementsByTagName('p');

    element.style.display = 'flex';

    element.setAttribute('id', country.alpha3Code);

    name.replaceChildren(country.nameToTextNode());
    image.setAttribute('src', country.getFlagSvgURL());
    capitalRegion.replaceChildren(country.capitalRegionToTextNode());
    population.replaceChildren(country.populationToTextNode());
    area.replaceChildren(country.areaToTextNode());
    density.replaceChildren(country.densityToTextNode());
}

let page = 0;

/**
 * Display all countries
 */
function displayCountries(parent) {
    let tab = Object.values(Country.all_countries).slice(
        page * NUMBER_OF_ELEM_PER_PAGE,
        (page + 1) * NUMBER_OF_ELEM_PER_PAGE
    );

    tab.forEach((country, i) => {
        let currChild = parent.children.item(i + 1);
        if (currChild) {
            // If a card already exists, update it to reflect the actual country
            updateCountry(currChild, country);
        } else {
            // If not, create a card with the values of the actual country
            console.log(country);
            let article = country.toArticle();
            parent.appendChild(article);
        }
    });

    // Hide all elements that we don't want to be visible, but we want them to stay on the DOM
    for (let i = tab.length + 1; parent.children.item(i); i++) {
        let currChild = parent.children.item(i);
        currChild.style.display = 'none';
    }
}

function getCountriesParent() {
    return document.getElementById('contents');
}

function previousPageButtonHandler() {
    if (page > 0) {
        page--;
        displayCountries(getCountriesParent());
    }
}
function nextPageButtonHandler() {
    if (
        page + 1 <
        Object.values(Country.all_countries).length / NUMBER_OF_ELEM_PER_PAGE
    ) {
        page++;
        displayCountries(getCountriesParent());
    }
}
