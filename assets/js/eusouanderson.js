//skills animate

const item = document.querySelectorAll("[data-anime");
const altura = window.screen.height;
const largura = window.screen.width;
const letraTamanho = window.document.getElementById("position-static")

const animeScroll = () => {
    const windowTop = window.pageYOffset + window.innerHeight * 0.75;
    
    item.forEach(element =>{
        if (windowTop >= element.offsetTop){
            element.classList.add('animate');
        }else{
            element.classList.remove('animate');
        }

    })
}

function Reload(){
    $('html, #about'). animate({ scrollTop: 0 }, 1500);
    
    //window.location.reload()
}
function Skills(){
    $('html, skills'). animate({ scrollTop: altura -403}, 1500);
}
function Certificates(){
    $('html, certificate'). animate({ scrollTop: altura + 455}, 1500);
}

function Contact(){
    $('html, certificate'). animate({ scrollTop: altura + 2478 }, 1500);
}
window.addEventListener("scroll", ()=>{
  animeScroll();
  console.log(window.pageYOffset- altura)
});
// Scroll bar Automatize

    
//

//Mobile function


console.log(`Essa é a altura ${altura}`);
console.log(`Essa é a largura ${largura}`);


const pagebar = window.document.getElementById("page-navbar");
const skills = window.document.getElementById("skills");
const element = document.getElementById('navbarone');
//console.log(element)
//console.log(pagebar);
if (largura < 820){
    element.classList.remove('nav-navbar');
    element.style.textAlign = 'left'
    element.style.padding = '0'
    skills.style.width = `${largura}px`;
    
    //skills.style.textAlignLast = 'center';
};

//pagebar.style.background.width = '130%';
