//Q1
function outsideTheContinent() {
  return Object.values(Country.all_countries).filter(elem => elem.borders.some(b => elem.region !== Country.all_countries[b].region));
}

//Q2
function moreNeighbors() {
  res = [];

  let maxNeighbors = 0;

  Object.values(Country.all_countries).forEach(v => {
    if (v.borders.length > maxNeighbors) {
      maxNeighbors = v.borders.length;
      res = [v];
    } else if (v.borders.length == maxNeighbors) {
      res.push(v);
    }
  });

  return res;
}

//Q3
function neighborless() {
  return Object.values(Country.all_countries).filter(elem => !elem.borders.length);
}

//Q4
function moreLanguages() {
  res = [];

  let maxLanguages = 0;

  Object.values(Country.all_countries).forEach(v => {
    if (v.languages.length > maxLanguages) {
      maxLanguages = v.languages.length;
      res = [v];
    } else if (v.languages.length == maxLanguages) {
      res.push(v);
    }
  });

  return res;
}

//Q5
function withCommonLanguage() {
  res = {};

  return res;
}
//Q6
function withoutCommonCurrency() {}
//Q7exi
function sortingDecreasingDensity() {}

//Q8
function moreTopLevelDomains() {
  return Object.values(Country.all_countries).filter(elem => elem.topLevelDomain.length > 1);
}

//Q9
function veryLongTrip(country_name) {}
