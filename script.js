const header = document.querySelector("header");
const botaoMenu = document.querySelector(".menu-btn");
const sidebar = document.querySelector(".sidebar");

let ultimaPosicao = window.scrollY;


// SCROLL DO HEADER
window.addEventListener("scroll", function() {

    const posicaoAtual = window.scrollY;

    if (posicaoAtual > ultimaPosicao) {

        // Descendo
        header.style.transform = "translateY(-100%)";
        sidebar.classList.remove("ativa");
        
    } else if (posicaoAtual < ultimaPosicao) {

        // Subindo
        header.style.transform = "translateY(0)";
        

    }

    ultimaPosicao = posicaoAtual;
});


// BOTAO HAMBURGUER
botaoMenu.addEventListener("click", function() {

    sidebar.classList.toggle("ativa");

});