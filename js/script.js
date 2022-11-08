const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const image4 = document.getElementById('image4');
const loader = document.getElementById('loader');
let readMore = document.querySelectorAll('.readMoreBtn');

// Read More Read Less Button
let noOfCharac = 130;
let contents = document.querySelectorAll(".flip-card-par")

contents.forEach(content => {
  // if text is less than noOfCharac hide Read More button
  if (content.textContent.length < noOfCharac) {
    content.nextElementSibling.style.display = 'none'
  }
  else {
    let displayText = content.textContent.slice(0,noOfCharac);
    let moreText = content.textContent.slice(noOfCharac);
    content.innerHTML = `${displayText}<span class="dots">...</span><span class="hide more">${moreText}</span>`;
  }
});

function readMoreLess(readMore){
  let post = readMore.parentElement;
  post.querySelector(".dots").classList.toggle("hide");
  post.querySelector(".more").classList.toggle("hide");
  readMore.textContent == "Read Less" ? readMore.textContent = "Read More" : readMore.textContent = "Read Less";
}

// Loader
document.onreadystatechange = function() {
  if (document.readyState !== "complete") {
    document.querySelector("body").style.visibility = "hidden";
    document.querySelector("#loader").style.visibility = "visible";
  } else {
    document.querySelector("#loader").style.display = "none";
    document.querySelector("body").style.visibility = "visible";
  }
};

//LightMode
function lightMode() {
    nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    // textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = 'Light Mode';
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    image1.src = 'img/undraw_proud_coder_light.svg';
    image2.src = 'img/undraw_feeling_proud_light.svg';
    image3.src = 'img/undraw_conceptual_idea_light.svg';
    image4.src = 'img/undraw_under_construction_light.svg';
}

//DarkMode
function darkMode() {
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    // textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    toggleIcon.children[0].textContent = 'Dark Mode';
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    image1.src = 'img/undraw_proud_coder_dark.svg';
    image2.src = 'img/undraw_feeling_proud_dark.svg';
    image3.src = 'img/undraw_conceptual_idea_dark.svg';
    image4.src = 'img/undraw_under_construction_dark.svg';
}

// Switch Theme Dynamically
function switchTheme(event) {
    if (event.target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      darkMode();
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
      lightMode();
    }
  }
  
  // Event Listener
  toggleSwitch.addEventListener('change', switchTheme);
  
  // Check Local Storage For Theme
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  
    if (currentTheme === 'dark') {
      toggleSwitch.checked = true;
      darkMode();
    }
  }

// Language Switch
let language = {
      "en": {
        "theme-dark": "Ночь",
        "theme-light": "День",
        "heading-name": ["I", "am", "Anastasia"],
        "heading-title": "A Software Engineer",
        "about-me": "Hi there! I am Anastasia, a Software Engineer based in New York.",
        "about-me-par": "I use my passion and skills to create exceptional product. My websites are intuitive with a clean design. I am able to code amazing things from scratch. I love to learn, explore and think. Coding gives me the rewarding feeling of a never-ending puzzle, which I enjoy solving every day. I’ve always been kind of a mix of creative person and logical one. When I'm not coding, you can find me doing yoga or baking something delicious.",
        "nav-home": "Home",
        "nav-about": "About",
        "nav-learning": "Learning Resume Blog",
        "nav-projects": "Projects",
        "nav-contact": "Contact",
        "section-about": "Обо мне",
        "about-paragraph": "lorem",
        "section-skills": "Навыки",
        "resume": "Resume",
        "learning": "Learning",
        "blog": "Blog",
        "section-projects": "Проекты",
        "projects-app": "Web Applications",
        "projects-site": "Websites",
        "contact": "Contact me",
        "email": "Your e-mail",
        "message": "Message",
        "send": "Send",
     },

      "ru": {
            "theme-dark": "Ночь",
            "theme-light": "День",
            "heading-name": ["Я", "-", "Анастасия"],
            "heading-title": "Веб-Разработчик",
            "about-me": "Привет! Я - веб разработчик из Нью-Йорка",
            "about-me-par": "Я использую свои навыки для создания исключительного продукта. Мои веб-сайты интуитивны в использовании, дизайн продуман до мелочей. Я могу создавать удивительные вещи с нуля. Я люблю учиться, исследовать и думать. Программирование дает мне приятное ощущение бесконечной головоломки, которую я с удовольствием решаю каждый день. Я всегда была смесью творческого человека и логического. Когда я не программирую, вы можете найти меня на занятии по йоге или за приготовлением десерта",
            "nav-home": "Домой",
            "nav-about": "Обо мне",
            "nav-learning": "Сертификаты Резюме Блог",
            "nav-projects": "Проекты",
            "nav-contact": "Связаться со мной",
            "section-about": "Обо мне",
            "about-paragraph": "lorem",
            "section-skills": "Навыки",
            "resume": "Резюме",
            "learning": "Сертификаты",
            "blog": "Блог",
            "section-projects": "Проекты",
            "projects-app": "Приложения",
            "projects-site": "Веб-сайты",
            "contact": "Связаться со мной",
            "email": "Ваш e-mail",
            "message": "Сообщение",
            "send": "Отправить",
    }
  }

const btnRU = document.querySelector('#btnRU');
const btnENG = document.querySelector('#btnENG');

btnRU.addEventListener('click', changeLanguageRu);
btnENG.addEventListener('click', changeLanguageEng);

function changeLanguageRu () {
  const myName = document.querySelectorAll('.heading-name')
  // .textContent = language.ru["heading-name"][0];
  // document.querySelector('.heading-name').textContent = language.ru["heading-name"][1];
  // document.querySelector('.heading-name').textContent = language.ru["heading-name"][2];

  myName.forEach((item, i) => {
    item.textContent = language.ru["heading-name"][i]
  })


  document.querySelector('.heading-title').textContent = language.ru["heading-title"];
  document.querySelector('.par-container h3').textContent = language.ru["about-me"];
  document.querySelector('.par').textContent = language.ru["about-me-par"];
  document.querySelector('.nav-home').textContent = language.ru["nav-home"];
  document.querySelector('.nav-learning').textContent = language.ru["nav-learning"];
  document.querySelector('.nav-projects').textContent = language.ru["nav-projects"];
  document.querySelector('.nav-contact').textContent = language.ru["nav-contact"];
  document.querySelector('.nav-about').textContent = language.ru["nav-about"];
  document.querySelector('.resume').textContent = language.ru["resume"];
  document.querySelector('.learning').textContent = language.ru["learning"];
  document.querySelector('.blog').textContent = language.ru["blog"];
  document.querySelector('.projects-heading').textContent = language.ru["projects-app"];
  document.querySelector('.website').textContent = language.ru["projects-site"];
  document.querySelector('.heading_container input').textContent = language.ru["email"];
  document.querySelector('.heading_container textarea').textContent = language.ru["message"];
  document.querySelector('.btn').textContent = language.ru["send"];
}

function changeLanguageEng () {
  const myName = document.querySelectorAll('.heading-name')
  // .textContent = language.ru["heading-name"][0];
  // document.querySelector('.heading-name').textContent = language.ru["heading-name"][1];
  // document.querySelector('.heading-name').textContent = language.ru["heading-name"][2];

  myName.forEach((item, i) => {
    item.textContent = language.en["heading-name"][i]
  })
  
  document.querySelector('.heading-name').textContent = language.en["heading-name"][0];
  document.querySelector('.heading-title').textContent = language.en["heading-title"];
  document.querySelector('.par-container h3').textContent = language.en["about-me"];
  document.querySelector('.par').textContent = language.en["about-me-par"];
  document.querySelector('.nav-home').textContent = language.en["nav-home"];
  document.querySelector('.nav-learning').textContent = language.en["nav-learning"];
  document.querySelector('.nav-projects').textContent = language.en["nav-projects"];
  document.querySelector('.nav-contact').textContent = language.en["nav-contact"];
  document.querySelector('.nav-about').textContent = language.en["nav-about"];
  document.querySelector('.resume').textContent = language.en["resume"];
  document.querySelector('.learning').textContent = language.en["learning"];
  document.querySelector('.blog').textContent = language.en["blog"];
  document.querySelector('.projects-heading').textContent = language.en["projects-app"];
  document.querySelector('.website').textContent = language.en["projects-site"];
  document.querySelector('.heading_container input').textContent = language.en["email"];
  document.querySelector('.heading_container textarea').textContent = language.en["message"];
  document.querySelector('.btn').textContent = language.en["send"];
}

let heading = Array.from(document.querySelectorAll('.heading-name'));

// heading.forEach(head => {
//   head.addEventListener('mouseenter', (e) => {
//     console.log(e, 'hello')
//   })})


//     head.classList.add('rubberBand');
//     head.addEventListener("animationend", () => {
//       head.classList.remove('rubberBand');
//     });
//   })
// })


for(let i = 0; i < heading.length; i++) {
  heading[i].addEventListener('mouseenter', function() {
    this.classList.add('rubberBand');
    this.addEventListener("animationend", function() {
      this.classList.remove('rubberBand');
    }, false);
  })
}