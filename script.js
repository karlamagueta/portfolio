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




