document.addEventListener('DOMContentLoaded', () => {

    const titulo = document.querySelector('h1');

    const botao = document.querySelector('#btnMudarCor'); 

    titulo.style.color = 'blue'; 

    botao.addEventListener('click', () => {

        if (titulo.style.color === 'blue') {
            titulo.style.color = 'red';
            botao.textContent = 'Mudar para Azul';
        } else {
            titulo.style.color = 'blue';
            botao.textContent = 'Mudar para Vermelho';
        }
    });

    console.log("Script.js pronto para interagir.");
});