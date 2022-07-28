const slider= document.querySelector('.gallery');
let isDown=false;
let startx;
let scrollLeft;
slider.addEventListener('mousedown',e=>{
    isDown=true;
    slider.classList.add('active');
    startx=e.pageX-slider.offsetLeft;
    scrollLeft=slider.scrollLeft;
});
slider.addEventListener('mouseleave',_ =>{
    isDown=false;
    slider.classList.remove('active');
    
});
slider.addEventListener('mouseup',_ =>{
    isDown=false;
    slider.classList.remove('active');
    
});
slider.addEventListener('mousemove',e =>{
    if(!isDown) return;
    e.preventDefault();
    const x =e.pageX-slider.offsetLeft;
    const SCROOL_SPEED=4;
    const walk = (x-startx)*SCROOL_SPEED;
    slider.scrollLeft=scrollLeft-walk;
});