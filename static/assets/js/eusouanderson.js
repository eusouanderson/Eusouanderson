

//skills animate

var item = document.querySelectorAll("[data-anime]");


var letraTamanho = window.document.getElementById("position-static")
var windowTop = window.pageYOffset;


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

window.addEventListener("scroll", ()=>{
animeScroll();
test()
});
document.addEventListener('DOMContentLoaded', function() {
    var button1 = document.getElementById('button_1');
    var button2 = document.getElementById('button_2');
    var button3 = document.getElementById('button_3');
    var button4 = document.getElementById('button_4');
    var button5 = document.getElementById('button_5');
  
    button1.addEventListener('click', function() {
      scrollToElement('quemsoueu');
    });
  
    button2.addEventListener('click', function() {
      scrollToElement('skills');
    });
  
    button3.addEventListener('click', function() {
      scrollToElement('certificato');
    });
  
    button4.addEventListener('click', function() {
      scrollToElement('work');
    });
  
    button5.addEventListener('click', function() {
      scrollToElement('contact');
    });
});

function scrollToElement(id) {
    var element = document.getElementById(id);
    var offset = 250; // Ajuste este valor conforme necessário
  
    if (element) {
        var elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        var offsetPosition = elementPosition - offset;
  
        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }
}

