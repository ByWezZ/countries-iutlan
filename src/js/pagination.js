function updateCountry(element, country) {
    let title = element.getElementsByTagName('h2');
    let image = element.getElementsByTagName('img');
}

function displayCountries(tab, parent) {
    tab.forEach((country, i) => {
        let currChild = parent.child[i];
        if (currChild) {
            updateCountry(currChild, country);
        } else {
            let article = country.toArticle();
            parent.appendChild(article);
        }
    });
}
