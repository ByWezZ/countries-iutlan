const ascendantImg = document.getElementById('ascendant');
const descendantImg = document.getElementById('descendant');
const sortSelect = document.getElementById('sort-select');

let ascendantOrder = true;

function normalizeStr(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function onSortChange() {
    let criteria = sortSelect.value;
    let countries;

    switch (criteria) {
        case 'name':
        case 'region':
            if (ascendantOrder)
                countries = currentDisplayedCountries.sort((a, b) =>
                    normalizeStr(a[criteria]) > normalizeStr(b[criteria])
                        ? 1
                        : -1
                );
            else
                countries = currentDisplayedCountries.sort((a, b) =>
                    normalizeStr(a[criteria]) < normalizeStr(b[criteria])
                        ? 1
                        : -1
                );
            displayCountries(document.getElementById('contents'), countries);
            break;
        case 'population':
        case 'area':
        case 'density':
            countries = currentDisplayedCountries.sort((a, b) =>
                ascendantOrder
                    ? a[criteria] - b[criteria]
                    : b[criteria] - a[criteria]
            );
            displayCountries(document.getElementById('contents'), countries);
            break;
        default:
            console.warn('Unknown sort criteria : ' + criteria);
    }
}

function sortAscendant() {
    ascendantImg.setAttribute('src', 'assets/icons/up-arrow-fill.png');
    descendantImg.setAttribute('src', 'assets/icons/down-arrow.png');
    ascendantOrder = true;

    onSortChange();
}

function sortDescendant() {
    ascendantImg.setAttribute('src', 'assets/icons/up-arrow.png');
    descendantImg.setAttribute('src', 'assets/icons/down-arrow-fill.png');
    ascendantOrder = false;

    onSortChange();
}
