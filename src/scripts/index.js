// import { contentData } from "./contentDatas.js";
// console.log(contentData[0].content);

const navItem = document.getElementsByClassName('nav-item');
const sideTitle = document.getElementById('side-title');
const content = document.getElementById('section-content')


const cv = "<p>Hello</p>"
const skills = "<p>Hello skills</p>"



// const cv = contentData[1].content;
// const competences = contentData[2].content;
// const outils = contentData[3].content;
// const contact = contentData[4].content;

    
function displayCv() {
    content.innerHTML = cv
}

function displaySkills() {
    content.innerHTML = skills
}

const attr = document.querySelectorAll('.nav-item');



// attr.forEach(element => {
//     element.addEventListener('click', () => {
//         sideTitle.innerText = element.innerText;
//         document.querySelector('.active').classList.remove('active');
//         element.classList.add('active');
//         switch(sideTitle.innerText) {
//             case 'A PROPOS':
//                 content.innerHTML = "hello a propos";
//                 break;
//             case 'CV':
//                 content.innerHTML = "hello cv";
//                 break;
//         };
//     })

// });






