//skills animate

let item = document.querySelectorAll("[data-anime");
let altura = window.screen.height;
let largura = window.screen.width;
let letraTamanho = window.document.getElementById("position-static")

let animeScroll = () => {
    let windowTop = window.pageYOffset + window.innerHeight * 0.75;
    
    item.forEach(element =>{
        if (windowTop >= element.offsetTop){
            element.classList.add('animate');
        }else{
            element.classList.remove('animate');
        }

    })
}
//NAVBAR
let navb = document.getElementById("navbarone");
let navbCoordenadas = navb.getBoundingClientRect();
console.log(navbCoordenadas.height);
//SKILL
let skill = document.getElementById("skills");
let skillCoordenadas = skill.getBoundingClientRect();
console.log(skillCoordenadas.height);
//CERTIFICATE
let certificate = document.getElementById("certificato");
let certificateCoordenadas = certificate.getBoundingClientRect();
console.log(certificateCoordenadas.height);
//CONTACT
let cont = document.getElementById("contact");
let contCoordenadas = cont.getBoundingClientRect();
console.log(contCoordenadas.height);
//SPACE
let space = 750;
function Reload(){

    $('html, #about'). animate({ scrollTop: 0 }, space);
    
    //window.location.reload()
}
function Skills(){
    $('html, skills'). animate({ scrollTop: skillCoordenadas.height +300}, space);
}
function Certificates(){
    $('html, certificate'). animate({ scrollTop: certificateCoordenadas.height}, space);
}
function Contact(){
    $('html, contact'). animate({ scrollTop: 27000}, space);
}
window.addEventListener("scroll", ()=>{
  animeScroll();
  //console.log(window.pageYOffset- altura)
});
// Scroll bar Automatize

    
//

//Mobile function


//console.log(`Essa é a altura ${altura}`);
//console.log(`Essa é a largura ${largura}`);


let pagebar = window.document.getElementById("page-navbar");
let skills = window.document.getElementById("skills");
let element = document.getElementById('navbarone');

//pagebar.style.background.width = '130%';
