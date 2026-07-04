// Selecionando os elementos do DOM
const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

// Contador para saber em qual imagem estamos
let counter = 0;
const size = 100; // Representa 100% da largura de uma imagem

// Evento para o botão "Próximo"
nextBtn.addEventListener('click', () => {
    if (counter >= carouselImages.length - 1) {
        counter = 0; // Volta para a primeira imagem se chegar ao fim
    } else {
        counter++;
    }
    atualizarCarrossel();
});

// Evento para o botão "Anterior"
prevBtn.addEventListener('click', () => {
    if (counter <= 0) {
        counter = carouselImages.length - 1; // Vai para a última imagem se estiver na primeira
    } else {
        counter--;
    }
    atualizarCarrossel();
});

// Função que move o slide baseado no contador
function atualizarCarrossel() {
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + '%)';
}

// Função para avançar a imagem automaticamente
function iniciarAutoplay() {
    return setInterval(() => {
        if (counter >= carouselImages.length - 1) {
            counter = 0;
        } else {
            counter++;
        }
        atualizarCarrossel();
    }, 2000); // 3000 milissegundos = 3 segundos
}

// Inicia o autoplay
let autoplay = iniciarAutoplay();

// BÔNUS: Para o carrossel se o usuário passar o mouse por cima
const container = document.querySelector('.carousel-container');

container.addEventListener('mouseenter', () => {
    clearInterval(autoplay); // Pausa o carrossel
});

container.addEventListener('mouseleave', () => {
    autoplay = iniciarAutoplay(); // Retoma o carrossel quando o mouse sai
});