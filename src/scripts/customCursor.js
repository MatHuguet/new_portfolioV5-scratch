const cursor = document.querySelector('.cursor');


const moveCursor = (e) => {
    let moveX = e.clientX;
    let moveY = e.clientY;
    cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
}

window.addEventListener('mousemove', moveCursor);



