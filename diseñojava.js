document.getElementById('frase-interactiva').addEventListener('click', function() {
    const frase = this;
    const contenedorEco = document.getElementById('contenedor-ecografia');
    const fotoBebé = document.querySelector('.foto-ecografia-estilo');

    // 1. Efecto Aplastar: La frase se encoge hasta desaparecer
    frase.style.transform = "scale(0)";
    frase.style.opacity = "0";s
    frase.style.transition = "all 0.5s cubic-bezier(0.6, -0.28, 0.735, 0.045)";

    // 2. Cambio de escena: Sale la frase, entra la eco
    setTimeout(() => {
        frase.style.display = 'none';
        contenedorEco.style.display = 'block';
        
        // 3. ¡Movimiento! Activamos la animación del bebé
        fotoBebé.classList.add('bebe-en-movimiento');
    }, 500);
});


