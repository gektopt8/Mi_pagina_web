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

// Capturamos los elementos del formulario de contacto
const formulario = document.getElementById("formulario-contacto");
const mensajeAlerta = document.getElementById("mensaje-alerta");

// Escuchamos el evento 'submit' cuando el usuario quiere enviar el formulario
formulario.addEventListener("submit", function(evento) {
    evento.preventDefault(); // Evita que la página se recargue sola y borre todo

    // Capturamos lo que escribió el usuario en ese momento
    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    try {
        // Verificamos que los campos obligatorios no estén vacíos
        if (nombre === "" || email === "" || mensaje === "") {
            // Si falta algo, lanzamos el error de una
            throw new Error("⚠️ Completá todos los campos obligatorios, primo.");
        }

        // Si llegó acá, significa que está todo bien lleno
        mensajeAlerta.style.color = "#00f5ff"; // Color cian flama
        mensajeAlerta.textContent = "¡Guía enviada con éxito, perrito!";
        formulario.reset(); // Limpia los cuadraditos del formulario

    } catch (error) {
        // El catch agarra el error que lanzamos arriba y lo muestra en la pantalla
        mensajeAlerta.style.color = "#ff4655"; // Color rojo alerta
        mensajeAlerta.textContent = error.message;
    }
});