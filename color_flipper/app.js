// Vetor com as cores que podem ser selecionadas
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
// Pega o elemento com o id de 'btn' lá no HTML
const btn = document.getElementById("btn");
// Pega o elemento com a class de 'color' lá no HTML
const color = document.querySelector(".color");


btn.addEventListener('click', function() {
    // Pegando um número aleatório entre 0 - 3
    const randomNumber = getRandomNumber();
    console.log(randomNumber);

    // Modifica os elementos do HTML
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

// Sorteia um número inteiro aleatório entre 0 - 3 (tamanho do vetor 'colors') 
function getRandomNumber() {
    return Math.floor(Math.random() * colors.length) ;
}
