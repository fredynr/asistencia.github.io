const banner = document.getElementById("banner")
let addRemoveHidde = ()=>{
    let bannerFigures = banner.getElementsByClassName("banner__figure")
    bannerFigures = Array.from(bannerFigures)
    bannerFigures.forEach(bannerFigure => {
        let divSpan = document.getElementById("div__span")
        let articleTitle = document.getElementById("article__title")
        let articleP = document.getElementById("article__p")
        if(bannerFigure.classList.contains("hidde")){
            bannerFigure.classList.remove("hidde")
            bannerFigure.classList.add("show")
            bannerFigure.classList.replace("banner__figure--img1", "banner__figure--img2")
            divSpan.innerHTML = "Somos"
            articleTitle.innerHTML = "Centro de Servicios"
            articleP.innerHTML = "Máquinas de café Automáticas y super automáticas, Máquinas de café Empotrables"
        }else{
            bannerFigure.classList.add("hidde")
            bannerFigure.classList.remove("show")
            bannerFigure.classList.replace("banner__figure--img2", "banner__figure--img1")
            divSpan.innerHTML = "Prestación de:"
            articleTitle.innerHTML = "Servicio Técnico"
            articleP.innerHTML = "Mantenimiento, Reparación e Instalación de electrodomésticos para el hogar y para sus Empresas de Alta gama."
        }
    });
}
let interV = setInterval( addRemoveHidde, 5000)
interV
const $detener = document.getElementById("detener")
$detener.addEventListener("click", ()=>{
    clearInterval( interV )
    console.log("detenido??")
} )


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