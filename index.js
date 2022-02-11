
function main() {
    console.log("starting");

const titulo = document.querySelector("h1");
titulo.addEventListener("pointerenter",imprimeHola);
const elements =Array.from(
    document.body.querySelectorAll("*")
    );
console.log(elements);
}

function imprimeHola(){
    console.log("Hola");
}

window.addEventListener("load",main);