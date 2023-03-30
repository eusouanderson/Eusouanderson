//skills animate

var item = document.querySelectorAll("[data-anime");
var altura = window.screen.height;
var largura = window.screen.width;
var letraTamanho = window.document.getElementById("position-static")

var animeScroll = () => {
    var windowTop = window.pageYOffset + window.innerHeight * 0.75;
    console.log(windowTop -1827)
    item.forEach(element =>{
        if (windowTop >= element.offsetTop){
            element.classList.add('animate');
        }else{
            element.classList.remove('animate');
        }

    })
}


//NAVBAR
var navb = document.getElementById("navbarone");
var navbCoordenadas = navb.getBoundingClientRect();
//console.log(navbCoordenadas.height);
//SKILL
var skill = document.getElementById("skills");
var skillCoordenadas = skill.getBoundingClientRect();
//console.log(skillCoordenadas.height);
//CERTIFICATE
var certificate = document.getElementById("certificato");
var certificateCoordenadas = certificate.getBoundingClientRect();
//console.log(certificateCoordenadas.height);
//CONTACT
var cont = document.getElementById("contact");
var contCoordenadas = cont.getBoundingClientRect();
//console.log(contCoordenadas.height);
//SPACE
var space = 200;

//Mobile Functions///
function Reload(){
    //resol 640x 1136
    if ((largura > 540 && largura <= 640) && altura >= 1136){
        $('html, #about'). animate({ scrollTop: 0 }, space);
    } 
    //750 x 1334 
    if ((largura > 640 && largura <= 750) && altura >= 1334){
        $('html, #about'). animate({ scrollTop: 0}, space);
    }
    //1080 x 1920
    if ((largura > 750 && largura <= 1080) && altura >= 1920){
        $('html, #about'). animate({ scrollTop: 0}, space);
    }
    //1125 x 2436
    if ((largura > 1080 && largura <= 1125) && altura >= 2436){
        $('html, #about'). animate({ scrollTop: 0}, space);
    }

}
function Skills(){
    //resol 640x 1136
    if ((largura > 540 && largura <= 640) && altura >= 1136){
        $('html, skills'). animate({ scrollTop: 1139}, space);
    }
    //750 x 1334 
    if ((largura > 640 && largura <= 750) && altura > 1334){
        $('html, skills'). animate({ scrollTop: 1269}, space);
    }
    //1080 x 1920
    if ((largura > 750 && largura <= 1080) && altura >= 1920){
        $('html, skills'). animate({ scrollTop: 1223}, space);
    }
    //1125 x 2436x
    if ((largura > 750 && largura <= 1080) && altura >= 2436){
        $('html, skills'). animate({ scrollTop: 0}, space);
    }

}   
function Certificates(){
    //resol 640x 1136
    if ((largura > 540 && largura <= 640) && altura >= 1136){
        $('html, certificate'). animate({ scrollTop: 2326}, space);
    }
    //750 x 1334 
    if ((largura > 640 && largura <= 750) && altura > 1334){
        $('html, certificate'). animate({ scrollTop: 2493}, space);
    }
    //1080 x 1920
    if ((largura > 750 && largura <= 1080) && altura >= 1920){
        $('html, certificate'). animate({ scrollTop: 2524}, space);
    }
}
function Contact(){
    //resol 640x 1136
    if ((largura > 540 && largura <= 640) && altura >= 1136){
        $('html, contact'). animate({ scrollTop: 3717}, space);
    }
    //750 x 1334 
    if ((largura > 640 && largura <= 750) && altura > 1334){
        $('html, contact'). animate({ scrollTop: 3953}, space);
    }
    //1080 x 1920
    if ((largura > 750 && largura <= 1080) && altura >= 1920){
        $('html, contact'). animate({ scrollTop: 3507}, space);
    }
}   //1125 x 2436x

window.addEventListener("scroll", ()=>{
animeScroll();
//console.log(window.pageYOffset- altura)
});




//console.log(`Essa é a altura ${altura}`);
//console.log(`Essa é a largura ${largura}`);


var pagebar = window.document.getElementById("page-navbar");
var skills = window.document.getElementById("skills");
var element = document.getElementById('navbarone');

//pagebar.style.background.width = '130%';
