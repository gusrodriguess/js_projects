const form = document.querySelector("#form")
const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const passwordInput = document.querySelector("#password")
const jobSelect = document.querySelector("#job")
const messageTextarea = document.querySelector("#message")

form.addEventListener("submit", (event) => {
    event.preventDefault();

    // verifica se o nome está vazio
    if(nameInput.value === "") {
        alert("Por favor, preecha seu nome");
        return;
    }

    // verifica se o email está preenchido e se é válido
    if(emailInput.value === "" || !isEmailValid(emailInput.value)) {
        alert("Por favor, preecha seu email");
        return;
    }

    if(!validadePassword(passwordInput.value, 8)) {
        alert("A senha precisa ter no mínimo 8 dígitos");
        return;
    }

    if(jobSelect.value === "") {
        alert("Por favor, selecione a sua situação");
        return;
    }

    if(messageTextarea.value === "") {
        alert("Por favor, escreva uma messagem");
        return;
    }


    // se todos os campos estiverem preenchidos corretamente, envia o formulário
    form.submit();
});

// função que valida o email
function isEmailValid(email) {
    const emailRegex = new RegExp(
        /^[a-zA-Z-0-9._-]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/
    );

    if(emailRegex.test(email)) {
        return true;
    }

    return false;
}

// função que valida a senha

function validadePassword (password, minDigits) {
    if(password.length >= minDigits) {
        return true;
    }
    return false;
}