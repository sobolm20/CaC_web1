let food = []

async function fetchApi() {
  try{
      let urlApi = 'https://www.themealdb.com/api/json/v1/1/search.php?s'
      let fetchResponse = await fetch(urlApi)
      let response = await fetchResponse.json()
      food = [...response.meals]
      console.log(food);
      printCards('detailscomp', food)
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


let cardfood = []

function printCards(){
  let menusel = food.filter(each => each.idMeal === id_query)[0]
  console.log(menusel);
  
          let listcard = 
          `
          <div class="card" style="width: 18rem;">
              <img src=${menusel.strMealThumb} class="img-fit" alt=${menusel.strMeal}>
              <div>
                <div>
                  <h5 class="card-text">Dish name: ${menusel.strMeal}</h5>
                  <p class="card-text">Category: ${menusel.strCategory}</p>
                  <p class="card-text">Origin: ${menusel.strArea}</p>
                  <p class="card-text">Ingredients: ${menusel.strIngredient1}; ${menusel.strIngredient2}; ${menusel.strIngredient3}; ${menusel.strIngredient4}; ${menusel.strIngredient5}</p>
                  <h6 class="card-text">U$S  ${((menusel.idMeal)/1000).toFixed(3)}</h6>
                  <a class="btnd" href="index.html" role="button">Return</a>
                </div>
              </div>
          </div>
          `

          cardfood.push(listcard);
          console.log(cardfood);
  
  let basecard = document.getElementById('detailscomp');
  basecard.innerHTML = cardfood.join('');
}

printCards();
