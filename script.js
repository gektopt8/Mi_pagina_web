const listaMecanicas = [
    "Power Shot","Half Flip","Wave Dash","Fast Aerial","Dribbling","Wall Shot","Ceiling Shot","Speed Flip","Doble Tap","Flip Reset","Squishy Save","Musty Flick","Aerial Bump"
];

const boton = document.getElementById("btn-mecanica");
const textoPantalla = document.getElementById("mecanica-aleatoria");

// Esta función elige una mecánica al azar y la muestra en la pantalla
function elegirMecanicaAleatoria() {
    const numeroAlazar = Math.floor(Math.random() * listaMecanicas.length);
    const mecanicaSeleccionada = listaMecanicas[numeroAlazar];
    
    // Cambiamos el texto del HTML con la mecánica elegida
    textoPantalla.textContent = mecanicaSeleccionada;
}

boton.addEventListener("click", elegirMecanicaAleatoria);

// Evento 2: Cuando el mouse entra al botón (mouseover)
boton.addEventListener("mouseover", function() {
    boton.style.backgroundColor = "#f9a826"; // Se pinta del naranja de Rocket League
    boton.style.transform = "scale(1.05)";   /* Se agranda un poquito (efecto tuning) */
    boton.style.transition = "all 0.2s ease";
});

// Evento 3: Cuando el mouse se va del botón (mouseout)
boton.addEventListener("mouseout", function() {
    boton.style.backgroundColor = "#2563eb"; // Vuelve al azul original
    boton.style.transform = "scale(1)";      // Vuelve a su tamaño normal
});