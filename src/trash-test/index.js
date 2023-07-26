const navItem = document.getElementsByClassName('nav-item');
const sideTitle = document.getElementById('side-title');
const content = document.getElementById('section-content')


sideTitle.innerText = 'A PROPOS';
content.innerHTML = apropos;


     
const attr = document.querySelectorAll('.nav-item');
attr.forEach(element => {
    element.addEventListener('click', () => {
        sideTitle.innerText = element.innerText;
        document.querySelector('.active').classList.remove('active');
        element.classList.add('active');
        switch(sideTitle.innerText) {
            case 'A PROPOS':
                content.innerHTML = apropos;
                break;
            case 'CV':
                content.innerHTML = cv;
                break;
            case 'COMPETENCES':
                content.innerHTML = competences;
                break;
            case 'OUTILS':
                content.innerHTML = outils;
                break;
            case 'CONTACT':
                content.innerHTML = contact;
                break;
        };
    })

});






