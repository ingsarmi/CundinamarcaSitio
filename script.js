// script.js

// JavaScript para mostrar y ocultar la información al hacer clic en los botones
const botones = document.querySelectorAll(".boton-seccion3");
const seccionesInfo = document.querySelectorAll(".info-seccion");

// Función para activar un botón y desactivar otros
function activarBoton(boton) {
    botones.forEach((b) => {
        b.classList.remove("activo"); // Quita la clase "activo" de todos los botones
    });

    boton.classList.add("activo"); // Agrega la clase "activo" al botón seleccionado
}

// Agrega un evento clic a cada botón
botones.forEach((boton) => {
    boton.addEventListener("click", () => {
        const target = boton.getAttribute("data-target");

        seccionesInfo.forEach((seccion) => {
            seccion.style.display = "none";
        });

        const seccionMostrar = document.getElementById(target);
        if (seccionMostrar) {
            seccionMostrar.style.display = "block";
        }

        activarBoton(boton); // Llama a la función para activar el botón
    });
});

// Función para activar el primer botón al cargar la página
function activarPrimerBoton() {
    const primerBoton = botones[0]; // Obtén el primer botón
    if (primerBoton) {
        primerBoton.click(); // Simula un clic en el primer botón
    }
}

// Agrega un evento para llamar a la función cuando se cargue la página
window.addEventListener("load", activarPrimerBoton);

