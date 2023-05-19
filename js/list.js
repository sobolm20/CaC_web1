async function tabla() {
    try{
        let urlApi = 'https://www.themealdb.com/api/json/v1/1/search.php?s'
        let fetchResponse = await fetch(urlApi)
        let response = await fetchResponse.json()
        let listfood = [...response.meals]
        console.log(listfood);
        printTablelist (listfood, "listone")
        return response
    } catch(error){
        console.log(error);
    }
}

tabla()

let menufood = []

function printTablelist(array){
    for (let each of array){
            let tablecard = 
            `
            <tr>
                <td colspan="2" class="celda1">${each.strMeal}</td>
                <td colspan="2" class="celda2">....................</td>
                <td colspan="2" class="celda3">${((each.idMeal)/1000).toFixed(3)}</td>
            </tr>
            `

            menufood.push(tablecard);
            console.log(menufood);
    }
    let basecard = document.getElementById('listone');
    basecard.innerHTML =menufood.join('');
}

printTablelist();

