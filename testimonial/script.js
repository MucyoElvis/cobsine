
var carouselslider =  document.querySelector('.carousel-container');
var carouselImages = document.querySelectorAll('.carousel-slider');


//button
var prevBtn = document.querySelector('#prevBtn');
var nextBtn = document.querySelector('#nextBtn');

//counter
var counter = 3;
var size = carouselImages[0].clientWidth;

carouselslider.style.transform ='translateX(' + (-size * counter) + 'px)';


// eventlisteners
nextBtn.addEventListener('click',(event)=>{
    if(counter >= carouselImages.length-1)return;
    carouselslider.style.transition  = "transform 0.5s ease-in-out";
    counter++;
    carouselslider.style.transform ='translateX(' + (-size * counter) + 'px)';
})


prevBtn.addEventListener('click',(event)=>{
    if(counter <= 0)return;
    carouselslider.style.transition  = "transform 0.5s ease-in-out";
    counter--;
    carouselslider.style.transform ='translateX(' + (-size * counter) + 'px)';
})


carouselslider.addEventListener('transitionend',(event)=>{
    if(carouselImages[counter].id="last clone"){
        carouselslider.style.transition  = "none";
        counter = carouselImages.length-2;
        carouselslider.style.transform ='translateX(' + (-size * counter) + 'px)';

    }
    if(carouselImages[counter].id="first clone"){
        carouselslider.style.transition  = "none";
        counter = carouselImages.length-counter;
        carouselslider.style.transform ='translateX(' + (-size * counter) + 'px)';

    }
})