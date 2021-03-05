let url = 'https://pokeapi.co/api/v2/type';

fetch(url)
    .then(response => {
        return response.json()
    })
    .then((parsedData => {
        console.log(parsedData);

        let menu1 = `<option>Pokemon Type 1</option>`;
        let menu2 = `<option>Pokemon Type 2</option>`;
        for (let r of parsedData.results) {
            menu1 += `<option value="${r.url}">${r.name}</option>`;
        }
        document.getElementById("type1").innerHTML = menu1;
        for (let r of parsedData.results) {
            menu2 += `<option value="${r.url}">${r.name}</option>`;
        }
        document.getElementById("type2").innerHTML = menu2;

    }))
    .catch(error => {
        alert("Error");
    });

async function showPokemon() {

    var result1 = document.getElementById("type1").value; 
    const response1 = await fetch(result1);
    var data1 = await response1.json();   
    var table = ``

    for (let one of data1.pokemon) {
        var pokemonurl = one.pokemon.url;
        fetch(pokemonurl)
            .then(response => {
                return response.json()
            })
            .then((parsedData => {
                if (parsedData.id <= 200) {
                    table += `<div id=${"row" + parsedData.id.toString()}>
                    <tr> 
                    <td>${parsedData.id}</td> 
                    <td><img src="${parsedData.sprites.front_default}"></td> 
                    <td>${parsedData.name}</td>
                    <td>${parsedData.base_experience}</td>
                    <td>${parsedData.weight}</td>
                    <td>${parsedData.height}</td></tr>
                    </div>`;
                    document.getElementById("data").innerHTML = table;
                }
            }));
    
    }
    
    var result2 = document.getElementById("type2").value;
    const response2 = await fetch(result2);
    var data2 = await response2.json(); 
    
    for (let two of data2.pokemon) {
        var pokemonurl = two.pokemon.url;
        fetch(pokemonurl)
            .then(response => {
                return response.json()
            })
            .then((parsedData => {
                if (parsedData.id <= 200) {
                    table += `<div id=${"row" + parsedData.id.toString()}>
                    <tr> 
                    <td>${parsedData.id}</td> 
                    <td><img src="${parsedData.sprites.front_default}"></td> 
                    <td>${parsedData.name}</td>
                    <td>${parsedData.base_experience}</td>
                    <td>${parsedData.weight}</td>
                    <td>${parsedData.height}</td></tr>
                    </div>`;
                    document.getElementById("data").innerHTML = table;
                }
            }));
    }
}

$(document).ready(function () {
    $('#dtBasicExample').DataTable();
    $('.dataTables_length').addClass('bs-select');
  });