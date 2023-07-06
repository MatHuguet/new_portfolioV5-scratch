const cursor = document.querySelector('.cursor');
const sideNav = document.getElementsByClassName('nav-item');



     
const items = document.querySelectorAll('.nav-item');
items.forEach(element => {
    element.addEventListener('mouseenter', () => {
        cursor.classList.add('cursor-hover');
    })
    element.addEventListener('mouseout', () => {
        cursor.classList.remove('cursor-hover');
    })

});


const moveCursor = (e) => {
    let moveX = e.clientX;
    let moveY = e.clientY;
    cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
}

window.addEventListener('mousemove', moveCursor);



