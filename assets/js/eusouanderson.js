

//skills animate

var item = document.querySelectorAll("[data-anime");
var largura = window.screen.width;
var altura = window.screen.height;

var letraTamanho = window.document.getElementById("position-static")
var windowTop = window.pageYOffset;


var test = () => {
    var windowTop = window.pageYOffset;
    var larguraTela = largura;
    var alturaTela = altura;
    console.log(windowTop)
    //console.log(`${larguraTela} x ${alturaTela}`)
    //console.log( `Esse é a posição do Scroll ${windowTop}`);
    
}

var animeScroll = () => {
    var windowTop = window.pageYOffset + window.innerHeight * 0.9;
    
    item.forEach(element =>{
        if (windowTop >= element.offsetTop){
            element.classList.add('animate');
        }else{
            element.classList.remove('animate');
        }

    })
}


//SKILL
var skill = document.getElementById("skills");
var skillCoordenadas = skill.getBoundingClientRect();
var skillCor = 670;

//CERTIFICATE
var certificate = document.getElementById("certificato");
var certificateCoordenadas = certificate.getBoundingClientRect();
var certiCor= 1850
//console.log(certificateCoordenadas.height);

//WORK
var wrk = document.getElementById("work");
var wrkCoordenadas = wrk.getBoundingClientRect();
var workCor = 3100
//console.log(workCor)

//CONTACT
var cont = document.getElementById("contact");
var contCoordenadas = cont.getBoundingClientRect();
var contCor = 3703
console.log(contCor);
//vel
var vel = 800;

//Mobile Functions///
function About(){
    //resol 640x 1136
    if ((largura >= 540 && largura <= 640) && altura >= 1136){
        $('html, #about'). animate({ scrollTop: 0 }, vel);
    } 
    //750 x 1334 
    if ((largura > 640 && largura <= 750) && altura >= 1334){
        $('html, #about'). animate({ scrollTop: 0}, vel);
    }
    //1080 x 1920
    if ((largura > 750 && largura <= 1080) && altura >= 1920){
        $('html, #about'). animate({ scrollTop: 0}, vel);
    }
    //1125 x 2436
    if ((largura > 1080 && largura <= 1125) && altura >= 2436){
        $('html, #about'). animate({ scrollTop: 0}, vel);
    }else{
        $('html, #about'). animate({ scrollTop: 0}, vel);
    }

}
function Skills(){
    //resol 640x 1136
    if ((largura >= 540 && largura <= 640) && altura >= 1136){
        $('html, skills'). animate({ scrollTop: 1162}, vel);
    }
    //750 x 1334 
    if ((largura > 640 && largura <= 750) && altura >= 1334){
        $('html, skills'). animate({ scrollTop: 1388}, vel);
    }
    //1080 x 1920
    if ((largura > 750 && largura <= 1080) && altura >= 1920){
        $('html, skills'). animate({ scrollTop: 1223}, vel);
    }
    //1125 x 2436x
    if ((largura > 750 && largura <= 1080) && altura >= 2436){
        $('html, skills'). animate({ scrollTop: 0}, vel);
    }else{
        $('html, skills'). animate({ scrollTop: skillCor}, vel);
    }

}   
function Certificates(){
    //resol 640x 1136
    if ((largura >= 540 && largura <= 640) && altura >= 1136){
        $('html, certificate'). animate({ scrollTop: 2326}, vel);
    }
    //750 x 1334 
    if ((largura > 640 && largura <= 750) && altura >= 1334){
        $('html, certificate'). animate({ scrollTop: 2553}, vel);
    }
    //1080 x 1920
    if ((largura > 750 && largura <= 1080) && altura >= 1920){
        $('html, certificate'). animate({ scrollTop: 2524}, vel);
    }else{
        $('html, certificate'). animate({ scrollTop: certiCor}, vel);
    }
}

function Work(){
    if ((largura >= 540 && largura <= 640) && altura >= 1136){
        $('html, contact'). animate({ scrollTop: 2765}, vel);
    }
    //750 x 1334 
    if ((largura > 640 && largura <= 750) && altura >= 1334){
        $('html, contact'). animate({ scrollTop: 2765}, vel);
    }
    //1080 x 1920
    if ((largura > 750 && largura <= 1080) && altura >= 1920){
        $('html, contact'). animate({ scrollTop: 2765}, vel);
    }else{
        $('html, contact'). animate({ scrollTop: workCor}, vel);
    }
}
function Contact(){
    //resol 640x 1136
    if ((largura >= 540 && largura <= 640) && altura >= 1136){
        $('html, contact'). animate({ scrollTop: 4227}, vel);
    }
    //750 x 1334 
    if ((largura > 640 && largura <= 750) && altura >= 1334){
        $('html, contact'). animate({ scrollTop: 4291}, vel);
    }
    //1080 x 1920
    if ((largura > 750 && largura <= 1080) && altura >= 1920){
        $('html, contact'). animate({ scrollTop: 3507}, vel);
    }else{
        $('html, contact'). animate({ scrollTop: contCor}, vel);
    }
}

window.addEventListener("scroll", ()=>{
animeScroll();
test()
//console.log(window.pageYOffset- altura)
});


//console.log(`Essa é a altura ${altura}`);
//console.log(`Essa é a largura ${largura}`);


var pagebar = window.document.getElementById("page-navbar");
var skills = window.document.getElementById("skills");
var element = document.getElementById('navbarone');

//pagebar.style.background.width = '130%';
