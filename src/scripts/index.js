import { contentData } from "./contentDatas.js";
console.log(contentData[0].content);

const navItem = document.getElementsByClassName('nav-item');
const sideTitle = document.getElementById('side-title');
const content = document.getElementById('section-content')


const apropos = contentData[0].content;
const cv = contentData[1].content;
const competences = contentData[2].content;
const portfolio = contentData[3].content;
const contact = contentData[4].content;

sideTitle.innerText = 'A PROPOS';
content.innerHTML = apropos;


     
const attr = document.querySelectorAll('.nav-item');
attr.forEach(element => {
    element.addEventListener('click', () => {
        sideTitle.innerText = element.innerText;
        document.querySelector('.active').classList.remove('active');
        element.classList.add('active');
        addContent();
    })

});



function addContent() {

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
        case 'PORTFOLIO':
            content.innerHTML = portfolio;
            break;
        case 'CONTACT':
            content.innerHTML = contact;
            break;
    }
}





