//skills animate

const item = document.querySelectorAll("[data-anime");

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
//windowTop = 10;
window.addEventListener("scroll", ()=>{
  animeScroll();
});
// Scroll bar Automatize
function ScrollBar() {
    
    console.log(windowTop);
    

}

//Mobile function

const altura = window.screen.height;
const largura = window.screen.width;
//console.log(altura);
//console.log(largura);

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
