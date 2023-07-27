const navItem = document.getElementsByClassName('nav-item');
const sideTitle = document.getElementById('side-title');
const content = document.getElementById('section-content')

const about = "<h2 class='content-head'>A propos de moi</h2>"
+ "<div class='img-container'>"
+ "<img class='photo' src='./src/img/profile-pic (10).png' alt='profile'/>"
+ "</div>"
+ "<br></br>"
+ "<div class='paragraph-about'>"
+ "<p class='p-about'>Je suis Mathieu, développeur junior. Après plus d'une dizaine d'année dans l'hôtellerie, je me suis reconverti dans le développement web et web mobile depuis peu.</p>"
+ "<br></br>"
+ "<p class='p-about'>Passioné d'informatique depuis mon plus jeune âge, je souhaite mettre à profit mes compétences fraîchement acquises, ma curiosité et ma forte créativité afin de développer des applications visuellement attrayantes et ergonomiques pour les utilisateurs.</p>"
+ "<p class='p-about'>Ma <strong>curiosité</strong> et ma capacité à m'<strong>adapter</strong> me permettent de facilement m'intégrer à un environnement.</p>"
+ "<p class='p-about'>C'est cette même curiosité et l'envie d'en apprendre toujours plus qui me poussent à toucher à tout, aussi bien en terme de développement Web, que de développement de jeu avec C#, de découverte d'autres langages populaires tels que Java et Python, ou encore de création de design en utilisant des outils divers comme illustrator ou Blender 3D.</p>"
+ "</div>"

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
+ "<div class='job-section-container'>"
+ "<p class='date'>2016 à 2018</p>"
+ "<p class='exp-title'>Gérant HôtelF1 Angers Ouest</p>"
+ "<ul class='job-desc'>"
+ "</ul>"
+ "</div>"
+ "<div class='job-section-container'>"
+ "<p class='date'>De 2011 à 2016</p>"
+ "<p class='exp-title'>Employé polyvalent jour/nuit</p>"
+ "<ul class='job-desc'>"
+ "</ul>"
+ "</div>"

const skills = "<h2 class='content-head'>Compétences</h2>"
+ "</div>"
+ "<div class='job-section-container'>"
+ "<p class='exp-title'>HTML</p>"
+ "<ul class='job-desc'>"
    + "<li>Respect de la sémantique via la bonne utilisation des balises</li>"
    + "<li>Connaissance des attributs afin de faire les liens avec le CSS, le JavaScript ou encore préparer la partie backend de l'application</li>"
+ "</ul>"
+ "</div>"
+ "</div>"
+ "<div class='job-section-container'>"
+ "<p class='exp-title'>CSS</p>"
+ "<ul class='job-desc'>"
    + "<li>Compréhension de la hiérachie des sélecteurs</li>"
    + "<li>Utiliser les mediaqueries pour adapter l'application sur tout support</li>"
    + "<li>Application de la méthode \"mobile first\"</li>"
    + "<li>Animation d'éléments via le CSS afin de rendre un site plus attrayant</li>"
+ "</ul>"
+ "</div>"
+ "<div class='job-section-container'>"
+ "<p class='exp-title'>JavaScript</p>"
+ "<ul class='job-desc'>"
    + "<li>Compréhension des bases de la programmation (variables, boucles, types de variables, fonction)</li>"
    + "<li>Connaissances de base pour la programmation orientée objet</li>"
    + "<li>Manipulation du DOM pour rendre une application web dynamique</li>"
+ "</ul>"
+ "</div>"
+ "<div class='job-section-container'>"
+ "<p class='exp-title'>PHP</p>"
+ "<ul class='job-desc'>"
    + "<li>Utilisation de PHP pour la hiérarchisation et la séparation des composants HTML</li>"
    + "<li>Utilisation de la classe PDO pour le backend, la connexion à une base de donnée, l'écriture et la lecture de données via des requêtes</li>"
+ "</ul>"
+ "</div>"

+ "<div class='job-section-container'>"
+ "<p class='exp-title'>React</p>"
+ "<ul class='job-desc'>"
    + "<li>Initialisation d'un projet via CRA ou Vite</li>"
    + "<li>Compréhension de la création et la gestion de composant</li>"
    + "<li>Utilisation du JSX avec Vite pour intégrer du HTML dans du JavaScript</li>"
    + "<li>Utilisation de base des Props et de React State avec getters et setters</li>"
+ "</ul>"
+ "</div>"

+ "<div class='job-section-container'>"
+ "<p class='exp-title'>MySql</p>"
+ "<ul class='job-desc'>"
    + "<li>Création et gestion de base de données via PhphMyAdmin</li>"
    + "<li>Utilisation de requêtes pour la création de tables et l'insertion de données</li>"
+ "</ul>"
+ "</div>"

+ "<div class='job-section-container'>"
+ "<p class='exp-title'>Git</p>"
+ "<ul class='job-desc'>"
    + "<li>Initialisation d'un projet Git via Gitbash en ligne de commande, la plateforme Github ou Github Desktop</li>"
    + "<li>Création et gestion de branches</li>"
+ "</ul>"
+ "</div>"

const tools = "<h2 class='content-head'>Mes outils</h2>"
+ "<div class='job-section-container'>"
+ "<p class='exp-title'>Pour le développement Web :</p>"

+ "<ul class='job-desc'>"
    + "<li>VS Code</li>"
    + "<li>PHP Storm</li>"
    + "<li>WebStorm</li>"
    + "<li>PhpMyAdmin</li>"
    + "<li>ResponsivelyApp</li>"
+ "</ul>"
+ "<p class='exp-title'>Pour le design :</p>"
+ "<ul class='job-desc'>"
+ "<li>Figma</li>"
+ "<li>Illustrator</li>"
+ "</ul>"

+ "<p class='exp-title'>Divers et loisir :</p>"
+ "<ul class='job-desc'>"
+ "<li>Blender 3D</li>"
+ "<li>Unity</li>"
+ "<li>Gimp</li>"
+ "<li>Office</li>"
+ "</ul>"
+ "</div>"

const contact = 
"<h2 class='content-head'>Contactez-moi !</h2>"
+ "<p class='phone'>Par téléphone : "
+ "<br/>"
+ "<strong>0687751576</strong></p>"
+ "<br/>"
+ "<p class='mail'>Par email : "
+ "<br/>"
+ "<a href='mailto:huguet.mathieu@gmail.com'>huguet.mathieu@gmail.com</a></p>"
+ "<br/>"
+ "<p class='link'>Sur Linkedin : <a href='https://www.linkedin.com/in/mathieu-huguet-b954371b9/' target='_blank' rel='noreferrer'><img class='icon' src='./src/img/icons8-linkedin-bw-96.png' alt='lien linkedin'/></a></p>"

// const cv = contentData[1].content;
// const competences = contentData[2].content;
// const outils = contentData[3].content;
// const contact = contentData[4].content;
sideTitle.innerText = 'A PROPOS';
content.innerHTML = about;
sideTitle.style.color = 'rgba(83, 113, 136, 0.5)'
    
function displayAbout() {
    content.innerHTML = about
    sideTitle.innerText = 'A PROPOS'
    sideTitle.style.color = 'rgba(83, 113, 136, 0.5)'
}

function displayCv() {
    content.innerHTML = cv
    sideTitle.innerText = 'CV'
    sideTitle.style.color = 'rgba(203, 178, 121, 0.5)'
}

function displaySkills() {
    content.innerHTML = skills
    sideTitle.innerText = 'COMPETENCES'
    sideTitle.style.color = 'rgba(130, 220, 115, 0.5)'
}

function displayTools() {
    content.innerHTML = tools
    sideTitle.innerText = 'OUTILS'
    sideTitle.style.color = 'rgba(139, 126, 116, 0.5)'
}

function displayContact() {
    content.innerHTML = contact
    sideTitle.innerText = 'CONTENT'
    sideTitle.style.color = 'rgba(255, 160, 150, 0.5)'
}

const attr = document.querySelectorAll('.nav-item');



attr.forEach(element => {
    element.addEventListener('click', () => {
        sideTitle.innerText = element.innerText;
        document.querySelector('.active').classList.remove('active');
        element.classList.add('active');
    })

});






