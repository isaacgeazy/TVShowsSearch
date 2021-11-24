const handleSearch = async (event) => {
    event.preventDefault();


    const caixaDeBusca = document.querySelector('#query');
    const textoASerBuscado = caixaDeBusca.value;

    const url = `https://api.tvmaze.com/search/shows?q=${textoASerBuscado}`;

    const response = await fetch(url);
    const programas = await response.json();

    
    programas.forEach((programa) => {

        const titulo = programa?.show?.name || '';
        const imagem = programa?.show?.image?.medium || '';
    
        const listaDeProgramas = document.querySelector('#shows');
        listaDeProgramas.insertAdjacentHTML('beforeend',
        `
        <li>
        <img class="poster" src="${imagem}">
        <span class="show-name">${titulo}</span>
    
        </li>
        `   
        );
       
    });

};


document.addEventListener('DOMContentLoaded', () => {
    document
        .querySelector('#search-form')
        .addEventListener('submit', handleSearch);
});