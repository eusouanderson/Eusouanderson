const item = document.querySelectorAll("[data-anime");

const animeScroll = () => {
    const windowTop = window.pageYOffset + window.innerHeight * 0.95;
    //console.log(windowTop)
    item.forEach(element =>{
        if (windowTop >= element.offsetTop){
            element.classList.add('animate');
        }else{
            element.classList.remove('animate');
        }

    })
}
//animeScroll()//


window.addEventListener("scroll", ()=>{
  animeScroll();
});

const altura = window.screen.height;
const largura = window.screen.width;
console.log(altura);
console.log(largura);

const pagebar = window.document.getElementById("pagebar");
console.log(pagebar);
//pagebar.style.background = '#1975d1';
pagebar.style.background.width = '130px';
