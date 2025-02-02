const banner = document.getElementById("banner")
let addRemoveHidde = () => {
  let bannerFigures = banner.getElementsByClassName("banner__figure")
  bannerFigures = Array.from(bannerFigures)
  bannerFigures.forEach(bannerFigure => {
    let divSpan = document.getElementById("div__span")
    let articleTitle = document.getElementById("article__title")
    let articleP = document.getElementById("article__p")
    if (bannerFigure.classList.contains("hidde")) {
      bannerFigure.classList.remove("hidde")
      bannerFigure.classList.add("show")
      bannerFigure.classList.replace("banner__figure--img1", "banner__figure--img2")
      divSpan.innerHTML = "Somos"
      articleTitle.innerHTML = "Centro de Servicios"
      articleP.innerHTML = "Máquinas de café Automáticas y super automáticas, Máquinas de café Empotrables"
    } else {
      bannerFigure.classList.add("hidde")
      bannerFigure.classList.remove("show")
      bannerFigure.classList.replace("banner__figure--img2", "banner__figure--img1")
      divSpan.innerHTML = "Prestación de:"
      articleTitle.innerHTML = "Servicio Técnico"
      articleP.innerHTML = "Mantenimiento, Reparación e Instalación de electrodomésticos para el hogar y para sus Empresas de Alta gama."
    }
  });
}
let interV = setInterval(addRemoveHidde, 5000)
interV
// const $detener = document.getElementById("detener")
// $detener.addEventListener("click", ()=>{
//     clearInterval( interV )
//     console.log("detenido??")
// } )


// carrusel
const carrusel = document.querySelector(".carrusel-items");

let maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth;
let intervalo = null;
let step = 1;
const start = () => {
  intervalo = setInterval(function () {
    carrusel.scrollLeft = carrusel.scrollLeft + step;
    if (carrusel.scrollLeft === maxScrollLeft) {
      step = step * -1;
    } else if (carrusel.scrollLeft === 0) {
      step = step * -1;
    }
  }, 10);
};

const stop = () => {
  clearInterval(intervalo);
};

carrusel.addEventListener("mouseover", () => {
  stop();
});

carrusel.addEventListener("mouseout", () => {
  start();
});

start();


let btnStartMilk = document.getElementById("btn-start-milk")
let modal = document.getElementById("modal")
let cerrarModal = document.getElementById("cerrar-modal")
let titleModal = document.getElementById("title-modal")
let pModal = document.getElementById("p-modal")
let btnEvoMilk = document.getElementById("btn-evo-milk")

btnStartMilk.addEventListener("click", e => {
  e.preventDefault
  titleModal.textContent = "Cafetera DeLonghi Automática Magnifica Start Milk"
  pModal.textContent = "Entra en el mundo del café de grano a taza con De’Longhi Magnifica Start, que te ofrece todo lo que necesitas para empezar a tomar tus bebidas favoritas a base de espresso en casa. Cuenta con una interfaz fácil de usar y un llamativo acabado blanco, con una selección personalizada de bebidas que se entregan con un solo toque."
  modal.classList.add("visible")
})
btnEvoMilk.addEventListener("click", e => {
  e.preventDefault
  titleModal.textContent = "Cafetera DeLonghi Automática Magnifica Evo Milk"
  pModal.textContent = `Lleve lo mejor de la experiencia y la tecnología de De’Longhi a su cocina, ahora más accesible que nunca, con la nueva Magnifica Evo. Con 7 bebidas elaboradas por expertos, Magnifica Evo trae una auténtica experiencia de espresso a tu hogar, con solo presionar un botón. El molino incorporado y la unidad de preparación ofrecen solo el espresso más fresco con un molido, dosificación y preparación perfectos en todo momento. Nuestro sistema patentado LatteCrema™ está diseñado por expertos para elaborar automáticamente bebidas espresso con una espuma suave, sedosa y duradera, con leche o sus alternativas lácteas favoritas. Disfrute de sus bebidas espresso italianas favoritas desde la comodidad de su hogar con la excepcionalmente intuitiva Magnifica Evo.`
  modal.classList.add("visible")
})

cerrarModal.addEventListener("click", e => {
  e.preventDefault
  modal.classList.remove("visible")
})


let lastScrollTop = 0;
const menu = document.getElementById('menu');

window.addEventListener('scroll', function() {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        // Desplazamiento hacia abajo
        menu.classList.add('oculto');
    } else {
        // Desplazamiento hacia arriba
        menu.classList.remove('oculto');
    }
    lastScrollTop = scrollTop;
});
