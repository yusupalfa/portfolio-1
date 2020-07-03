//              Burger  
const burger = document.querySelector('nav .burger');
const nav = document.querySelector('nav');
const ul = document.querySelector('.the-ul');
const li = ul.querySelectorAll('li');

let temp = 0;
function liSlide(li){
    if(ul.classList.contains('ul-slide')){
        setTimeout(() => {
            li[temp].style.animation = 'liSlide  0.5s ease forwards';
            temp++;
            if(temp == 5){
                return false;
            }else{
                liSlide(li);
            }
        }, 200);
    }else{
        temp = 0;
        li.forEach((li) => {
            li.style.animation = '';
        });
    }
};



const navSlide = () => {

    burger.addEventListener('click', function(){
        // Burger toggle
        ul.classList.toggle('ul-slide');

        //  Nav Link Animation
        liSlide(li);

        // burger Animation
        burgerAnimation();

    });

};


//              Slide X burger
const span = burger.querySelectorAll('span');

function burgerAnimation(){
    if(ul.classList.contains('ul-slide')){
        span[0].style.transform = 'rotate(45deg) translate(-1px, -1px)';
        span[1].style.transform = 'rotateY(90deg)';
        span[2].style.transform = 'rotate(-45deg) translate(-1px, 0)';
    }else{
        span.forEach((spanLine) => {
            spanLine.style.transform = '';
        });
    }
}

navSlide();


//              DarkMode

const black = document.getElementsByClassName('black');
const hamburger = document.querySelectorAll('nav .burger span');
const TombolContact = document.querySelector('.contact .Tombolcontact');
const heela = document.querySelector('nav .darkMode');
const body = document.querySelector('body');

heela.addEventListener('click', function(){
    heela.classList.toggle('on');
    if(heela.classList.contains('on')){
        TombolContact.style.color = 'black';
        TombolContact.style.backgroundColor = 'white';
        // TombolContact.style.border = '1px solid black';
        for(let i = 0; i < black.length; i++){
            black[i].style.transition = '0.5s';
            black[i].style.color = 'white';
            hamburger[i].style.backgroundColor = 'white';
            body.style.transition = '1s';
            body.style.backgroundColor = 'rgba(0,0,0,0.95)';
        }
        
    }else{
        TombolContact.style.color = 'white';
        TombolContact.style.backgroundColor = 'black';
        // TombolContact.style.border = '1px solid black';
        for(let i = 0; i < black.length; i++){
            black[i].style.transition = '0.5s';
            black[i].style.color = 'black';
            hamburger[i].style.backgroundColor = 'black';
            body.style.transition = '1s';
            body.style.backgroundColor = 'white';
        }
    }
});