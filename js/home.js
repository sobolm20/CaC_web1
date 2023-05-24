
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
                <img src=${card.strMealThumb} class="img-fit" alt=${card.strMeal}>
                <div>
                    <h2>${card.strMeal}</h2>
                    <h3>${card.strCategory}</h3>
                    <a class="btnd" href="details.html?id=${card.idMeal}" role="button">Details</a>
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