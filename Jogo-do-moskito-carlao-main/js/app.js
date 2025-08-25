const gameArea = document.querySelector('#game-area');
const pontosDisplay = document.querySelector('#pontos');
const listaHistorico = document.querySelector('#lista-historico');

let pontos = 0;
const emojis = ['💀', '👿', '👽', '👻', '👹', '🤖'];
const mensagensZoeiras = [
    'MATA ELE!',
    'ELIMINE TODOS!',
    'Você é um ótimo caçador!',
    'Bem na cara!!',
    'ESTUPRA ELE!!'
];

function adicionarHistorico(texto) {
    const li = document.createElement('li');
    const horario = new Date().toLocaleTimeString('pt-BR');
    li.textContent = `${horario} - ${texto}`;
    li.classList.add('Caçador');
    listaHistorico.appendChild(li);

    if (listaHistorico.children.length > 10) {
        listaHistorico.removeChild(listaHistorico.firstChild);
    }
}

function criarEmoji() {
    const emoji = document.createElement('div');
    emoji.classList.add('emoji');

    const indiceAleatorio = Math.floor(Math.random() * emojis.length);
    emoji.textContent = emojis[indiceAleatorio];

    const maxX = gameArea.offsetWidth - 50;
    const maxY = gameArea.offsetHeight - 50;

    emoji.style.left = `${Math.random() * maxX}px`;
    emoji.style.top = `${Math.random() * maxY}px`;
}