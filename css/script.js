document.addEventListener('DOMContentLoaded', () => {
    const botao = document.querySelector('#btnLogar'); 
    const logadoMsg = document.querySelector('#logado-msg'); 
    const deslogadoMsg = document.querySelector('#deslogado-msg');
    
    let estaLogado = false; 

    botao.addEventListener('click', () => {

        estaLogado = !estaLogado; 

        if (estaLogado) {
            botao.textContent = 'Deslogar';
            logadoMsg.style.display = 'block';
            deslogadoMsg.style.display = 'none';
        } else {
            botao.textContent = 'Logar';
            logadoMsg.style.display = 'none';
            deslogadoMsg.style.display = 'block';
        }
    });

    console.log("Simulação de Login/Deslogar ativada.");
});