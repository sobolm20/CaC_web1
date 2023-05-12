
async function fetchApi() {
    try{
        let urlApi = 'https://www.themealdb.com/api/json/v1/1/search.php?s'
        let fetchResponse = await fetch(urlApi)
        let response = await fetchResponse.json()
        food = [...response.meals]
        console.log(food);
        defineDetails(food)
        return response
    } catch(error){
        console.log(error);
    }
}

fetchApi()

let query = location.search
console.log(query)
let params = new URLSearchParams(query)
console.log(params)
let id_query = params.get('id')
console.log(id_query);

let cards = []

function defineDetails(array_food){
    let foodfilter = array_food.filter(each => each.id == id_query)[0];
    cards = 
    `
    <div class="col-md-4">
      <img src="${foodfilter.strMealThumb}" class="img-fluid rounded-start" alt="${foodfilter.strMeal}">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title text-light">Dish name: ${foodfilter.strMeal}</h5>
        <p class="card-text text-light">Category: ${foodfilter.strCategory}</p>
        <p class="card-text text-light">Origin: ${foodfilter.strArea}</p>
        <p class="card-text text-light">Ingredients: ${foodfilter.strIngredient1}; ${foodfilter.strIngredient2}; ${foodfilter.strIngredient3}; ${foodfilter.strIngredient4}; ${foodfilter.strIngredient5}</p>
        <h6 class="card-subtitle mb-2 text-muted">${foodfilter.price}</h6>
        <a class="btn btn-primary" href="details.html?id=${foodfilter.idMeal}" role="button">Details</a>
      </div>
    </div>
`
let gencard = document.getElementById('detailscomp')
gencard.innerHTML = cards
}