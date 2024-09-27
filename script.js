document.getElementById("resposta2").addEventListener("mouseover", function() {
    let button = document.getElementById("resposta2");
    let container = document.querySelector(".container");
    
    // Gera posições aleatórias dentro do container
    let maxX = container.offsetWidth - button.offsetWidth;
    let maxY = container.offsetHeight - button.offsetHeight;
    
    let randomX = Math.floor(Math.random() * maxX);
    let randomY = Math.floor(Math.random() * maxY);
    
    button.style.position = "absolute";
    button.style.left = randomX + "px";
    button.style.top = randomY + "px";
});

// Garante que o botão volte à posição inicial ao redimensionar a tela
window.addEventListener('resize', function() {
    let button = document.getElementById("resposta2");
    button.style.position = "static"; // Remove a posição absoluta
});
