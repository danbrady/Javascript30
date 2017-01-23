(function () {
    'use strict';

    const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

    const cities = [];

    fetch(endpoint) // Returns promise
        .then(blob => blob.json()) // Returns promise
        .then(data => cities.push(...data)); // Spread syntax pushes each array data item into cities

    function findMatches(wordsToMatch, cities) {
        return cities.filter(place => {
            // find the city or state match from searched term
            const regex = new RegExp(wordsToMatch, 'ig');
            return place.city.match(regex) || place.state.match(regex);
        })
    }

    function numberWithCommas(number){
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    function displayMatches(){
        const matchArray = findMatches(this.value, cities);
        const html = matchArray.map(place => {
            const regex = new RegExp(this.value, 'ig');
            const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
            const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
            return `
                <li>
                    <span class="name">${cityName}, ${stateName}</span>
                    <span class="population">${numberWithCommas(place.population)}</span>
                </li>
            `;
        }).join('');
        suggestions.innerHTML = html;
    }

    const searchInput = document.querySelector('.search');
    const suggestions = document.querySelector('.suggestions');

    searchInput.addEventListener('change', displayMatches);
    searchInput.addEventListener('keyup', displayMatches);

})();
