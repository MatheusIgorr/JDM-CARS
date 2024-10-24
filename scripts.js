let prevButton = document.getElementById('prev');
let nextButton = document.getElementById('next');
let container = document.getElementById('container');
let items = container.querySelectorAll('.list .item'); // Seleciona todos os itens
let indicator = document.querySelector('.indicators');
let dots = indicator.querySelectorAll('ul li'); // Seleciona os indicadores
let numberDisplay = document.querySelector('.number'); // Seleciona o display do número

let active = 0; // Indica o item ativo
let lastPosition = items.length - 1; // Última posição

nextButton.onclick = () => {
    let itemOld = container.querySelector('.list .item.active');
    itemOld.classList.remove('active');

    active = (active + 1 > lastPosition) ? 0 : active + 1; // Passa para o próximo item ou volta ao primeiro
    items[active].classList.add('active');

    updateIndicators();
    updateNumber();
}

prevButton.onclick = () => {
    let itemOld = container.querySelector('.list .item.active');
    itemOld.classList.remove('active');

    active = (active - 1 < 0) ? lastPosition : active - 1; // Volta para o item anterior ou vai para o último
    items[active].classList.add('active');

    updateIndicators();
    updateNumber();
}

function updateIndicators() {
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === active); // Atualiza a classe 'active' nos indicadores
    });
}

function updateNumber() {
    // Atualiza o número no display (incrementa em 1, pois o índice começa em 0)
    let displayNumber = active + 1;

    // Formata o número para ter dois dígitos (por exemplo, 01, 02, 03)
    if (displayNumber < 10) {
        displayNumber = '0' + displayNumber;
    }

    // Atualiza o número na página
    numberDisplay.childNodes[0].textContent = displayNumber;
}

// Adiciona a classe 'active' ao primeiro item ao carregar a página
document.addEventListener('DOMContentLoaded', function () {
    setTimeout(() => {
        items[0].classList.add('active');
        updateNumber(); // Atualiza o número no carregamento inicial
    }, 1000);
});
