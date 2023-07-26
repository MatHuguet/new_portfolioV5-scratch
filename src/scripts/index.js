// import { contentData } from "./contentDatas.js";
// console.log(contentData[0].content);

const navItem = document.getElementsByClassName('nav-item');
const sideTitle = document.getElementById('side-title');
const content = document.getElementById('section-content')


const cv = "<h2 class='content-head'>Expériences professionelles</h2>"
+ "<div class='job-section-container'>"
+ "<p class='date'>Du 08/2022 à aujourd'hui</p>"
+ "<p class='exp-title'>Fomation Développeur Web et Web mobile Fullstack</p>"
+ "<ul class='job-desc'>"
+ "<li>Plateforme en ligne Studi</li>"
+ "</ul>"
+ "</div>"
+ "<div class='job-section-container'>"
+ "<p class='date'>Du Mars 2018 à Août 2022</p>"
+ "<p class='exp-title'>Régisseur général, hôtellerie/événementiel</p>"
+ "<ul class='job-desc'>"
+     "<li>Domaine de Cop Choux</li>"
+     "<li>Installation des équipements avant les événements</li>"
+     "<li>Mise en place de matériel technique et audiovisuel</li>"
+     "<li>Maintenance</li>"
+     "<li>Entretien intérieur et des espaces verts</li>"
+     "<li>Coordination des prestataires</li>"
+ "</ul>"
+ "</div>"
+ 
+ "<div class='job-section-container'>"
+ "<p class='date'>2016 à 2018</p>"
+ "<p class='exp-title'>Gérant HôtelF1 Angers Ouest</p>"
+ "<ul class='job-desc'>"
+     
+ "</ul>"
+ "</div>"
+ "<div class='job-section-container'>"
+ "<p class='date'>De 2011 à 2016</p>"
+ "<p class='exp-title'>Employé polyvalent jour/nuit</p>"
+ "<ul class='job-desc'>"
+ "</ul>"
+ "</div>"

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






