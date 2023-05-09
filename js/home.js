
let food = []

async function fetchApi() {
    try{
        let urlApi = 'https://www.themealdb.com/api/json/v1/1/search.php?s'
        let fetchResponse = await fetch(urlApi)
        let response = await fetchResponse.json()
        food = [...response.meals]
        console.log(food);
        printCards('allfoods',response.meals)
        return response
    } catch(error){
        console.log(error);
    }
}

fetchApi()

let cardfood = []

function printCards(){
    for (let card of food){
            let listcard = 
            `
            <div class="card" style="width: 18rem;">
                <img src=${card.strMealThumb} class="card-img-top img-fit" alt=${card.strMeal}>
                <div class="card-body">
                    <h5 class="card-title">${card.strMeal}</h5>
                    <p class="card-text">${card.strTags}</p>
                    <h6 class="card-subtitle mb-2 text-muted"></h6>
                    <a class="btn btn-primary" href="details.html?id=${card.idMeal}" role="button">Details</a>
                </div>
            </div>
            `

            cardfood.push(listcard);
            console.log(cardfood);
    }
    let basecard = document.getElementById('allfoods');
    basecard.innerHTML = cardfood.join('');
}

printCards();