const searchButton = () => {
    const searchField = document.getElementById('search-field');
    const fieldValue = searchField.value;
    searchField.value = '';
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${fieldValue}`
    fetch(url)
        .then(res => res.json())
        .then(data => searchInputResults(data.meals))
};
const searchInputResults = result => {
    const searchResult = document.getElementById('search-results');
    result.forEach(meal => {
        const div = document.createElement('div');
        div.className = 'col'
        div.innerHTML = `
        <div class="card">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
                </div>
            </div>
        `;
        searchResult.appendChild(div);
    })
};