// Valor inicial do contador
let count = 0;

// Pega os elementos do HTML
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

// Executa as funções a seguir para cada elemento do HTML, nesse caso os buttons
btns.forEach(function (btn) {
    // Evento de click para os botões
    btn.addEventListener("click", function(e) {
        // Identifica as class do botão que foi clicado;
        const styles = e.currentTarget.classList;
        // Verifica se nas class mostradas existe o 'decrease'
        if (styles.contains("decrease")) {
            count--;
        // Verifica se nas class mostradas existe o 'increase'
        } else if (styles.contains("increase")) {
            count++;
        } else {
            count = 0;
        }
        // Muda a cor do número, dependendo se for < 0, = 0 ou > 0
        if (count > 0) {
            value.style.color = "green";
        }
        if (count < 0) {
            value.style.color = "red";    
        }
        if (count === 0) {
            value.style.color = "#222";
        }
        // Atualiza o valor do contador
        value.textContent = count;
    }); 
});