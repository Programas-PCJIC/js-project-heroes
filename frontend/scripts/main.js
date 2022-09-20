import getHeroes from "../modules/getHeroes.js";
import { printHeroes } from "../modules/printHeroes.js";
import searchHeroes from "../modules/searchHeroes.js";

const URL = "http://localhost:4000/heroes";

const main = document.getElementById('main');

const heroes = await getHeroes(URL);
printHeroes(heroes, main);
//console.log(heroes);

form.addEventListener('submit', (e)=> {
    e.preventDefault()
    const input = document.getElementById('search').value
    const results = searchHeroes(input, heroes)
    if(results.length !== 0){
        printHeroes(results, main)
    }else {
        main.textContent = "NO HAY RESULTADOS"
    }
})