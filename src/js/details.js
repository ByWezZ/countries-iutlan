let sectionElement = document.getElementById('contents');
let popupHolder = document.getElementById('popup-holder');

let detailPopup = document.getElementById('country-details');
let flagPopup = document.getElementById('flag');

function openDetailsPopup(country) {
    // console.log(country);
    popupHolder.style.display = 'flex';
    detailPopup.style.display = 'flex';

    let name = detailPopup.getElementsByTagName('h2').item(0);
    let flg = detailPopup.getElementsByTagName('img').item(0);
    let capital = detailPopup.getElementsByTagName('h3').item(0);
    let continent = detailPopup.getElementsByTagName('h3').item(1);
    let description = detailPopup.getElementsByTagName('p').item(0);
    name.replaceChildren(country.nameToTextNode());
    flg.setAttribute('src', country.getFlagSvgURL());
    capital.replaceChildren(country.capitalToTextNode());
    continent.replaceChildren(country.regionToTextNode());
    description.replaceChildren(
        `${country.name} has ${country.population} residents and has ${
            country.borders.length
        } borders, which is : ${country.borders
            .map((b) => Country.all_countries[b].name)
            .join(', ')}`
    );
}

function openFlagPopup(country) {
    popupHolder.style.display = 'flex';
    flagPopup.style.display = 'flex';

    let img = flagPopup.getElementsByTagName('img')[0];

    if (img) {
        img.getElementsByTagName('img');
        img.setAttribute('src', country.flag);
        img.setAttribute('alt', 'Flag of ' + country.name);
    }
}

function closePopup() {
    popupHolder.style.display = 'none';
    detailPopup.style.display = 'none';
    flagPopup.style.display = 'none';

    let img = flagPopup.getElementsByTagName('img')[0];
    if (img) {
        img.setAttribute(
            'src',
            'https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif'
        );
        img.setAttribute('alt', 'loading icon');
    }
}

// Handle click on elements
sectionElement.addEventListener('click', (event) => {
    let articleElement =
        event.target.tagName == 'ARTICLE'
            ? event.target
            : event.target.closest('article');

    if (
        event.target.tagName == 'IMG' &&
        event.target.getAttribute('alt').startsWith('Flag of') &&
        articleElement
    ) {
        // Flag
        let country = Country.all_countries[articleElement.getAttribute('id')];
        if (country) openFlagPopup(country);
    } else if (articleElement) {
        // Country
        let country = Country.all_countries[articleElement.getAttribute('id')];
        if (country) openDetailsPopup(country);
    }
});

// Handle click on popup background
popupHolder.addEventListener('click', (event) => {
    if (event.target.id == 'popup-holder') {
        closePopup();
    }
});
