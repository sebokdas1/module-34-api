const searchButton = () => {
    const searchField = document.getElementById('search-field');
    const fieldValue = searchField.value;
    searchField.value = '';
    const searchResult = document.getElementById('search-results');
    if (fieldValue == '') {
        searchResult.innerHTML = `
<p class="text-danger mx-auto fs-1">please search something</p>
`;
    } else {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${fieldValue}`
        fetch(url)
            .then(res => res.json())
            .then(data => searchInputResults(data.meals))
    }

};
const searchInputResults = result => {
    const searchResult = document.getElementById('search-results');
    //clear previous result
    searchResult.textContent = '';
    result.forEach(meal => {
        const div = document.createElement('div');
        div.className = 'col'
        div.innerHTML = `
        <div onclick="displayClick('${meal.idMeal}')" class="card">
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
const displayClick = detail => {
    // console.log(detail)
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${detail}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealInfo(data.meals[0]))
}
const displayMealInfo = info => {
    console.log(info)
    const singleMeal = document.getElementById('single-meal');
    //clear previous single meal
    singleMeal.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card')
    div.innerHTML = `
    <img src="${info.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${info.strMeal}</h5>
                    <p class="card-text">${info.strInstructions.slice(0, 150)}</p>
                    <a href="${info.strYoutube}" class="btn btn-primary">watch video</a>
                </div>
    `;
    singleMeal.appendChild(div)
}