// Vetor com todos os números hexadecimais
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// Pega o elemento com o id de 'btn' lá do HTML
const btn = document.getElementById("btn");
// Pega o elemento com a class de 'color' lá do HTML
const color = document.querySelector(".color");

// Evento que é executado quando o botão é clicado 
btn.addEventListener('click', function(){ 
    let hexColor = '#';
    // Adiciona os 6 números aleatórios depois da #
    for(let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }

    // Modifica os elementos do HTML
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});

// Sorteia um númemo inteiro aleatório entre 0 - 16 (tamanho do vetor dos elementos hexadecimais)
function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}