const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const loader = document.getElementById('loader');
// const background_home = document.getElementsByTagName('body');
let readMore = document.querySelectorAll('.readMoreBtn');

// const textBox = document.getElementById('text-box');

// Read More Read Less Button
let noOfCharac = 200;
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

function readMoreLess(btn){
  let post = btn.parentElement;
  post.querySelector(".dots").classList.toggle("hide");
  post.querySelector(".more").classList.toggle("hide");
  btn.textContent == "Read More" ? btn.textContent == "Read Less" : btn.textContent = "Read More";
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

// function showLoadingSpinner() {
//   loader.hidden = false;
//   background_home.hidden = true;
// }

// function removeLoadingSpinner() {
//   background_home.hidden = false;
//   loader.hidden = true;
// }


//LightMode
function lightMode() {
    nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    // textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = 'Light Mode';
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    image1.src = 'img/undraw_proud_coder_light.svg';
    image2.src = 'img/undraw_feeling_proud_light.svg';
    image3.src = 'img/undraw_conceptual_idea_light.svg';
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
let langdata = {
  "languages": {
      "en": {
          "strings": {
              "theme-dark": "Dark Mode",
              "theme-light": "Light Mode",
              "heading-name": "I am Anastasia",
              "heading-title": "A Software Engeneer",
              "nav-home": "Home",
              "nav-about": "About",
              "nav-learning": "Learning Resume Blog",
              "nav-projects": "Projects",
              "nav-contact": "Contact",
              "section-about": "About",
              "about-paragraph": "lorem",
              "section-skills": "Skills",
              "resume": "Resume",
              "learning": "Learning",
              "blog": "Blog",
              "section-projects": "Projects",
              "projects-app": "Web Applications",
              "projects-site": "Websites",
              "contact": "Contact"
          }
     },

      "ru": {
          "strings": {
            "theme-dark": "Ночь",
            "theme-light": "День",
            "heading-name": "Привет, я - Анастасия",
            "heading-title": "Разработчик",
            "nav-home": "Домой",
            "nav-about": "Обо мне",
            "nav-learning": "Димпломы Резюме Блог",
            "nav-projects": "Проекты",
            "nav-contact": "Связаться со мной",
            "section-about": "Обо мне",
            "about-paragraph": "lorem",
            "section-skills": "Навыки",
            "resume": "Резюме",
            "learning": "Дипломы",
            "blog": "Блог",
            "section-projects": "Проекты",
            "projects-app": "Приложения",
            "projects-site": "Сайты",
            "contact": "Связаться со мной"
          }
      },
  }
}

