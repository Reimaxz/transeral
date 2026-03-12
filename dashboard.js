document.addEventListener("DOMContentLoaded", iniciarDashboard);

function iniciarDashboard() {

    const canvas = document.getElementById("graficaViajes");

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    const datosViajes = {
        labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"],
        datasets: [{
            label: "Viajes realizados",
            data: [12, 19, 8, 15, 10, 14],
            backgroundColor: "#0033A0"
        }]
    };

    const opciones = {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    new Chart(ctx, {
        type: "bar",
        data: datosViajes,
        options: opciones
    });

}
