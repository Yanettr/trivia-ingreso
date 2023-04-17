const saludo = "Bienvenid@";
const nombre = prompt("Escribe tu nombre");
alert(saludo + " " + nombre);

const botonCinco = document.getElementById("botonResultadoCinco");
botonCinco.addEventListener("click", validarRespuestasCinco);

function validarRespuestasCinco() {
    let respuestasCorrectas = 0
        //Pregunta 1 correcto c
    const p1AlternativaC = document.getElementById("p1alternativaC");
    if (p1AlternativaC.checked == true) {
        respuestasCorrectas = respuestasCorrectas + 1
    }

    const p2alternativaB = document.getElementById("p2alternativaB");
    if (p2alternativaB.checked == true) {
        respuestasCorrectas = respuestasCorrectas + 1
    }
    //Pregunta 3 correcto b
    const p3alternativaB = document.getElementById("p3alternativaB");
    if (p3alternativaB.checked == true) {
        respuestasCorrectas = respuestasCorrectas + 1
    }
    //Pregunta 4 correcto b
    const p4AlternativaB = document.getElementById("p4alternativaB");
    if (p4AlternativaB.checked == true) {
        respuestasCorrectas = respuestasCorrectas + 1
    }
    //Pregunta 5 correcto A
    const p5alternativaA = document.getElementById("p5alternativaA");
    if (p5alternativaA.checked == true) {
        respuestasCorrectas = respuestasCorrectas + 1
    }
    alert("Felicitaciones, Obtuviste:  " + respuestasCorrectas + " Respuestas Correctas")
}