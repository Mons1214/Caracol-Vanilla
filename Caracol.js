const celdas = document.querySelectorAll(".celda");

const order = [0,1,2,5,8,7,6,3,4];

let actualIndex = 0;

function mostrarCelda() {
    celdas.forEach(celda => celda.classList.remove("active"));
    const actualCelda = order[actualIndex];
    celdas[actualCelda].classList.add("active");
}

function recorrer () {
    mostrarCelda();
    actualIndex = (actualIndex + 1) % order.length;
}

let intervalId = setInterval(recorrer, 1000);

document.getElementById("stop").addEventListener("click", () => {
    clearInterval(intervalId);
    intervalId = null;
});

document.getElementById("reiniciar").addEventListener("click", () => {
    if (!intervalId) {
        intervalId = setInterval(recorrer, 1000);
    }
});

document.getElementById("next").addEventListener("click", () => {
    clearInterval(intervalId);
    intervalId = null;

    actualIndex = (actualIndex + 1) % order.length;
    mostrarCelda();
});

document.getElementById("retroceder").addEventListener("click", () => {
    clearInterval(intervalId);
    intervalId = null;
    actualIndex = (actualIndex - 1 + order.length) % order.length;
    mostrarCelda();
})

mostrarCelda();