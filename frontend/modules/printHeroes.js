export function printHeroes(data, container){
    container.innerHTML = '';
    data.forEach( heroe => {
        const { id, name, superhero, first_appearance, image } = heroe;
        const div = document.createElement("div");
        div.classList.add("hero");
        div.setAttribute('id', id);
        div.innerHTML = `
            <img src="${image}" alt="${name}" />
            <div class="hero-info">
                <h3>${name}</h3>
            </div>
            <div class="overview">
                <h3>${superhero}</h3>
                <strong> ${first_appearance} </strong>
            </div>
        `
        container.appendChild(div);
    })
}