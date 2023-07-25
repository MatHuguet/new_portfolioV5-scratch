import { contentData } from "./contentDatas.js";
// console.log(contentData[0].content);

const navItem = document.getElementsByClassName('nav-item');
const sideTitle = document.getElementById('side-title');
const content = document.getElementById('section-content')


const apropos = `<h2 class="content-head">A propos de moi</h2>
<br></br>
<div class="paragraph-about">
<p class="p-about">Je suis Mathieu, développeur junior. Après plus d'une dizaine d'année dans l'hôtellerie, je me suis reconverti dans le développement web et web mobile depuis peu.</p>
<br></br>
<p class="p-about">Passioné d'informatique depuis mon plus jeune âge, je souhaite mettre à profit mes compétences fraîchement acquises, ma curiosité et ma forte créativité afin de développer des applications visuellement attrayantes et ergonomiques pour les utilisateurs.</p>
<p class="p-about">Ma <strong>curiosité</strong> et ma capacité à m'<strong>adapter</strong> me permettent de facilement m'intégrer à un environnement.</p>
<p class="p-about">C'est cette même curiosité et l'envie d'en apprendre toujours plus qui me poussent à toucher à tout, aussi bien en terme de développement Web, que de développement de jeu avec C#, de découverte d'autres langages populaires tels que Java et Python, ou encore de création de design en utilisant des outils divers comme illustrator ou Blender 3D.</p>
</div>
`;
const cv = contentData[1].content;
const competences = contentData[2].content;
const outils = contentData[3].content;
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
        case 'OUTILS':
            content.innerHTML = outils;
            break;
        case 'CONTACT':
            content.innerHTML = contact;
            break;
    }
}





