
let food = []

async function fetchApi() {
    try{
        let urlApi = 'https://www.themealdb.com/api/json/v1/1/search.php?s'
        let fetchResponse = await fetch(urlApi)
        let response = await fetchResponse.json()
        food = [...response.events]
        console.log(food);
        currentDate = response.currentDate;
        printCards('allfoods',response.events)
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
                <img src=${card.image} class="card-img-top img-fit" alt=${card.name}>
                <div class="card-body">
                    <h5 class="card-title">${card.name}</h5>
                    <p class="card-text">${card.description}</p>
                    <h6 class="card-subtitle mb-2 text-muted">${card.price}</h6>
                    <a class="btn btn-primary" href="details.html?id=${card.id}" role="button">Details</a>
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