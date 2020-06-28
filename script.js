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