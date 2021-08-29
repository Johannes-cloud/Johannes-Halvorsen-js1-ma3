const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=b7bc8bdb842d432da4a93936d049e646";

const proxy = "https://noroffcors.herokuapp.com/";

const corsFix = proxy + url;

const resultsContainer = document.querySelector(".results");

async function makeApiCall() {
    try {
        const response = await fetch(corsFix);

        const results = await response.json();

        console.log(results);

        resultsContainer.innerHTML = results.results

    } catch (error) {
        console.log(error);
    }
}

makeApiCall();