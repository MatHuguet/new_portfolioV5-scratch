
const navItem = document.getElementsByClassName('nav-item');
const sideTitle = document.getElementById('side-title');
sideTitle.innerText = 'A PROPOS';


     
const attr = document.querySelectorAll('.nav-item');
attr.forEach(element => {
    element.addEventListener('click', () => {
        sideTitle.innerText = element.innerText;
        document.querySelector('.active')?.classList.remove('active');
        element.classList.add('active');
    })

});


