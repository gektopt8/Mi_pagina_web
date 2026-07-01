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