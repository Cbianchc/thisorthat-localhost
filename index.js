
//ejercicios aleatorios desde el json...
let base_ejercicios = readText("base-ejercicios.json")
let interprete_bj = JSON.parse(base_ejercicios)

function escogerEjercicioAleatorio() {
  escogerEjercicio(Math.floor(Math.random()*interprete_bj.length))
}
escogerEjercicioAleatorio()

function escogerEjercicio(n) {
  baseDeEjercicios = interprete_bj[n]
  videoAleatorio = baseDeEjercicios.nombre
  //select_id("videoAleatorio").setAttribute("src", baseDeEjercicios.nombre)

}
console.log(baseDeEjercicios)
//////Pero no puedo ponerlo dentro del modal... no recibe literales...

//console.log("conectado!")
let base_preguntas = readText("base-preguntas.json")
let interprete_bp = JSON.parse(base_preguntas)

//elegir pergunta aleatoria de la base
function escogerPreguntaAleatoria() {
  escogerPregunta(Math.floor(Math.random()*interprete_bp.length))
}
escogerPreguntaAleatoria()

//bloque para que lea json local
function escogerPregunta(n) {
    //console.log(readText("base-preguntas.json"))
    //salio bien asi que lo guardo en una variable y le paso la base
    baseOpciones = interprete_bp[n]
    select_id("titulo1").innerHTML = baseOpciones.opcion1
    select_id("titulo2").innerHTML = baseOpciones.opcion2
    select_id("foto1").setAttribute("src", baseOpciones.imagen1)
    select_id("foto2").setAttribute("src", baseOpciones.imagen2)
}
//escogerPregunta(0)

//bloque para seleccionar elentos por el id
function select_id(id) {
    return document.getElementById(id)
}
//bloque para modificar estilos
function style(id) {
    return select_id(id).style
}

function readText(ruta_local) {
    var text = null;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", ruta_local, false);
    xmlhttp.send();
    if (xmlhttp.status == 200) {
        texto = xmlhttp.responseText;
    }
    return texto
}

function modalEjercicio1() {
  let ejEjercicio = videoAleatorio
  //console.log(ejEjercicio + "dentro del swal")
  
      Swal.fire({
        title: 'Genial!',
        html:
          'Dale play al video para hacer el ejercicio...' +
          '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="' + ejEjercicio + '" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="burpee20sec1"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>',
        showDenyButton: true,
        confirmButtonText: 'Terminé! dame otro!',
        denyButtonText: `Cancelar todo`,
        allowOutsideClick: false,
            }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            escogerPreguntaAleatoria()
            escogerEjercicioAleatorio()
            console.log("reiniciar todo")            
        } else if (result.isDenied) {
          console.log("cerrar todo")
          location.reload();
        }
      })

      /////////////////////////////////////////////   	
// const ejericicioQueToco = videoAleatorio
// console.log("dentro del swal" + ejericicioQueToco)


// if (ejericicioQueToco) {
//   Swal.fire(`Your IP address is ${ejericicioQueToco}`)
// }  

 }

function modalEjercicio2() {
  let ejEjercicio = videoAleatorio
  //console.log(ejEjercicio + "dentro del swal")
  
      Swal.fire({
        title: 'Genial!',
        html:
          'Dale play al video para hacer el ejercicio...' +
          '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="' + ejEjercicio + '" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="burpee20sec1"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>',
        showDenyButton: true,
        confirmButtonText: 'Terminé! dame otro!',
        denyButtonText: `Cancelar todo`,
        allowOutsideClick: false,
            }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            escogerPreguntaAleatoria()
            escogerEjercicioAleatorio()
            console.log("reiniciar todo")            
        } else if (result.isDenied) {
          console.log("cerrar todo")
          location.reload();
        }
      })
}
//==================================User hace click en comenzar juego
let startButton = document.getElementById("start-button");
let startScreen = document.querySelector(".start-screen");
let displayContainer = document.getElementById("display-container");


startButton.addEventListener("click", () => {
    startScreen.classList.add("hide");
    displayContainer.classList.remove("hide");
    //reiniciar();
  });
  //Boton cancelar, esconde juego y deja card de inicio
  window.onload = () => {
    startScreen.classList.remove("hide");
    //displayNuevo.classList.add("hide");
  };


