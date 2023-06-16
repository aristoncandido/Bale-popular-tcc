/* inicio do eventos */

const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll("img")[0],
arrowIcons = document.querySelectorAll(".wrapper i");
let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;
const showHideIcons = () => {
   // mostrando e ocultando o ícone anterior/próximo de acordo com o valor esquerdo da rolagem do carrossel
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // obtendo a largura máxima de rolagem
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}
arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14; // obtendo a largura da primeira imagem e adicionando 14 valores de margem
        // se o ícone clicado for deixado, reduza o valor da largura da rolagem do carrossel para a esquerda, caso contrário, adicione a ele
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60); // chamando showHideIcons após 60ms
    });
});
const autoSlide = () => {
// se não houver imagem restante para rolar, retorne daqui
    if(carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;
    positionDiff = Math.abs(positionDiff); // tornando o valor positionDiff positivo
    let firstImgWidth = firstImg.clientWidth + 14;
// obtendo o valor da diferença que precisa somar ou reduzir do carrossel para a esquerda para pegar o meio img center    let valDifference = firstImgWidth - positionDiff;
    if(carousel.scrollLeft > prevScrollLeft) {  // se o usuário está rolando para a direita
        return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    } 
// se o usuário está rolando para a esquerda
    carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
}
const dragStart = (e) => {
   // atualizando o valor das variáveis ​​globais no evento mouse down
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}
const dragging = (e) => {
// rolando as imagens/carrossel para a esquerda de acordo com o ponteiro do mouse    if(!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}
const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");
    if(!isDragging) return;
    isDragging = false;
    autoSlide();
}
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);
document.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("touchend", dragStop);


/* INICIO DA PAGINA NOTICIAS */
function page(not){


    if(not == 'not1'){
        window.open('https://blogpontodevista.com/reuniao-solene-em-homenagem-aos-45-anos-do-bale-popular-do-recife/');

    }else if(not == 'not2'){
        window.open('https://www.napontadope.com/40-anos-do-bale-popular-do-recife-e-comemorado-com-novo-espetaculo-e-acoes-para-arrecadar-fundos/');

    }else if(not == 'not3'){
        window.open('https://www.folhape.com.br/DIVERSAO/2330-ESPETACULO-DANCA-HOMENAGEIA-PERNAMBUCANO-ANDRE-MADUREIRA/55907/');

    }else if(not == 'not4'){
        window.open('https://anovademocracia.com.br/no-74/3270-bale-popular-do-recife');

    }else if(not == 'not5'){
        window.open('https://www2.recife.pe.gov.br/noticias/23/03/2018/bale-popular-do-recife-e-reconhecido-como-patrimonio-cultural-imaterial-da');
    }
}
//FINAL DO SLIDE NOTÍCIA JS
// A função page é responsável por especificar os links do "Ver Mais" para cada página de notícia 




//Galeria
trocar1();

function trocar1(){
    let foto = document.querySelector('.foto');
    foto.src = "img.galeria/img1.jpg"
    
    setTimeout(trocar2,3000)
}

function trocar2(){setTimeout
    let foto = document.querySelector('.foto');
    foto.src = "img.galeria/img2.jpg"
    
    setTimeout(trocar3,3000)
}

function trocar3(){
    let foto = document.querySelector('.foto');
    foto.src = "img.galeria/img3.jpg"
    
    setTimeout(trocar4,3000)
}

function trocar4(){
    let foto = document.querySelector('.foto');
    foto.src = "img.galeria/img4.jpg"
    
   setTimeout(trocar5,3000)
}


function trocar5(){
    let foto = document.querySelector('.foto');
    foto.src = "img.galeria/img5.jpg"
    
   setTimeout(trocar6,3000)
}


function trocar6(){
    let foto = document.querySelector('.foto');
    foto.src = "img.galeria/img6.jpg"
    
   setTimeout(trocar7,3000)
}


function trocar7(){
    let foto = document.querySelector('.foto');
    foto.src = "img.galeria/img7.jpg"
    
   setTimeout(trocar8,3000)
}


function trocar8(){
    let foto = document.querySelector('.foto');
    foto.src = "img.galeria/img8.jpg"
    
   setTimeout(trocar1,3000)
}




//FINAL DE GALERIA