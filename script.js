// Menu

// Seleciona os itens do menu e a área principal do menu
const menuItems = document.querySelectorAll('.menu li');
const menu = document.querySelector('.menu');

// Cria o elemento de fundo e adiciona ao menu
let background = document.createElement('div');
background.classList.add('background');
background.style.display = 'none'; // Inicialmente oculto
menu.appendChild(background);

// Função para mover o fundo ao clicar em um item do menu
function moveBackground(item) {
    // Exibe o fundo no primeiro clique
    if (background.style.display === 'none') {
        background.style.display = 'block';
    }

    // Calcula a posição do item em relação ao menu
    const itemRect = item.getBoundingClientRect();
    const menuRect = menu.getBoundingClientRect();

    // Define a posição e largura do fundo
    background.style.left = `${itemRect.left - menuRect.left}px`;
    background.style.width = `${itemRect.width}px`;

    // Remove a classe 'active' de todos os links
    menuItems.forEach(li => li.querySelector('a').classList.remove('active'));

    // Adiciona a classe 'active' ao link do item atual
    item.querySelector('a').classList.add('active');
}

// Adiciona o evento de clique a cada item do menu
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        moveBackground(item);
    });
});




// Menu hamburguer
document.getElementById("hamburger-menu").addEventListener("click", function () {
    const menu = document.getElementById("menu");
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
});




// ABOUT


// Seleciona todos os cartões "about"
const aboutCards = document.querySelectorAll('.about-card');

// Função para verificar a visibilidade dos cartões
function checkVisibility() {
    const triggerBottom = window.innerHeight * 0.8; // 80% da altura da tela

    aboutCards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;

        if (cardTop < triggerBottom) {
            card.classList.add('visible'); // Adiciona a classe que faz o cartão aparecer
        }
    });
}

// Adiciona o evento de rolagem
window.addEventListener('scroll', checkVisibility);

// Verifica a visibilidade no carregamento inicial
document.addEventListener('DOMContentLoaded', checkVisibility);