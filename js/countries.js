const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => countries(data))
}
loadCountries()
const countries = countryinfo => {
    // console.log(countryinfo)
    const countrySection = document.getElementById('country-section')
    countryinfo.forEach(country => {
        console.log(country)
        const div = document.createElement('div');
        div.className = 'country'
        div.innerHTML = `
        
        <img  src="${country.flags.png}"/>
        <h2>country: ${country.name.common}</h2>
        <h5>capital: ${country.capital}</h5>
        <button class="details-btn">Details</button>
        `
        // console.log(element.capital)
        countrySection.appendChild(div)
    });
}