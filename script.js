
// ======================================
// CONFIGURACIÓN DEL CONTENEDOR
// ======================================

let alturaContenedor = 60; // Valor ilustrativo en cm

let porcentajeActual = 75;


// ======================================
// FUNCIÓN PARA CLASIFICAR EL NIVEL
// ======================================

function clasificarNivel(porcentaje) {

    if (porcentaje <= 30) {
        return "BAJO";
    }

    else if (porcentaje <= 70) {
        return "MEDIO";
    }

    else {
        return "ALTO";
    }
}


// ======================================
// ACTUALIZAR EL DASHBOARD
// ======================================

function actualizarDashboard() {

    // Simular pequeños cambios en el porcentaje

    let cambio = (Math.random() * 4) - 2;

    porcentajeActual += cambio;

    // Limitar el porcentaje entre 5 y 100

    porcentajeActual = Math.max(
        5,
        Math.min(100, porcentajeActual)
    );

    // Calcular altura del agua

    let alturaAgua =
        alturaContenedor * (porcentajeActual / 100);

    // Calcular distancia del sensor al agua

    let distancia =
        alturaContenedor - alturaAgua;

    // Clasificar nivel

    let nivel = clasificarNivel(porcentajeActual);

    // ==================================
    // MOSTRAR RESULTADOS EN HTML
    // ==================================

    document.getElementById("percentage").textContent =
        porcentajeActual.toFixed(1) + "%";

    document.getElementById("tank-percent").textContent =
        porcentajeActual.toFixed(1) + "%";

    document.getElementById("distance").textContent =
        distancia.toFixed(1);

    document.getElementById("height").textContent =
        alturaAgua.toFixed(1);

    document.getElementById("level").textContent =
        nivel;

    document.getElementById("level-card").textContent =
        nivel;

    // ==================================
    // ACTUALIZAR ELEMENTOS VISUALES
    // ==================================

    document.getElementById("progress").style.width =
        porcentajeActual + "%";

    document.getElementById("water-fill").style.height =
        porcentajeActual + "%";

    // Colores según el nivel

    let color;

    if (nivel === "BAJO") {
        color = "#f1a33c";
    }

    else if (nivel === "MEDIO") {
        color = "#43c8ee";
    }

    else {
        color = "#42d9a0";
    }

    document.getElementById("percentage").style.color = color;

    document.getElementById("progress").style.background = color;

    document.getElementById("water-fill").style.background = color;

    document.getElementById("level").style.color = color;

    document.getElementById("level-card").style.color = color;
}


// ======================================
// CONFIGURAR ALTURA DEL CONTENEDOR
// ======================================

document.getElementById("save-height").addEventListener(
    "click",
    function() {

        let nuevaAltura = parseFloat(
            document.getElementById("tank-height").value
        );

        if (
            !Number.isFinite(nuevaAltura) ||
            nuevaAltura <= 0
        ) {
            alert("Introduce una altura válida.");
            return;
        }

        alturaContenedor = nuevaAltura;

        actualizarDashboard();

        alert("Altura del contenedor actualizada.");
    }
);


// ======================================
// RELOJ DEL DASHBOARD
// ======================================

function actualizarReloj() {

    let ahora = new Date();

    document.getElementById("clock").textContent =
        ahora.toLocaleTimeString("es-MX");
}


// ======================================
// INICIAR SISTEMA
// ======================================

actualizarDashboard();

actualizarReloj();

// Actualizar mediciones cada 3 segundos

setInterval(actualizarDashboard, 3000);

// Actualizar reloj cada segundo

setInterval(actualizarReloj, 1000);
