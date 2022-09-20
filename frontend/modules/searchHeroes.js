function searchHeroes(texto, data){
    const result = data.filter((heroe)=> (
        heroe.name.toLowerCase().includes(texto.toLowerCase()) 
        || heroe.superhero.toLowerCase().includes(texto.toLowerCase()))
        )
    return result;
}

export default searchHeroes;