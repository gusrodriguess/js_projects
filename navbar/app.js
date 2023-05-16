// classList - mostra todas as classes
// contains - verifica se tem um classe específica 
// add - adiciona uma classe
// remove - remove uma classe
// toggle - função de alternância - adiciona e remove

// Pega os elementos do HTML
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

// Evento de click no botão de menu
navToggle.addEventListener('click', function(){
    // Verifica se na lista de classes tem a classe 'show-links'
    /*if(links.classList.contains('show-links')) {
        // Se tiver, a classe é removida
        links.classList.remove('show-links');
    } else {
        // Caso não tenha, ela é adicionada
        links.classList.add('show-links');
    }
    */
    // Faz a mesma coisa do código de cima, só que com menos linhas de código
    links.classList.toggle('show-links');
});