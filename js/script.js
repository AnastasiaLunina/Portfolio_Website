const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
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
let language = {
      "en": {
        "theme-dark": "Ночь",
        "theme-light": "День",
        "heading-name": "I am Anastasia",
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
        // "weather-btn": "Read more",
        // "weather": "Weather API",
        // "weather-par": "Fetches information from Openweathermap API. Depending on the weather background video changes as well as the message. Supports Farenheit and Celsius. Mobile responsive.",
        "send": "Send",
        // "yoga": "Yoga Workout App",
        // "yoga-par": "Choose from 5 postures, set up the timer, video appears on click and dissapears after time is out. Button is disabled while video is on. 3 relaxation sounds buttons. Icon redirects to the main website.",
        // "quiz": "Quiz Capitals",
        // "quiz-par": "User can choose the answers, notification pops up if the field is empty, wrong answers highlighted with red, correct ones with green. Total score appears in the end. Mobile responsive.",
        // "slides": "Slides Photographer",
        // "slides-par": "Landing page for a photographer. Featured pictures slideshow and slides in array. Mobile responsive.",
        // "recipe": "Recipe Book",
        // "recipe-par": "User is able to implement a search by typing a first letter of recipe name. After pressing the button full recipe appears. Cooking timer included into this cookbook. Mobile responsive.",
        // "concert": "Concert Countdown Timer",
        // "concert-par": "Countdown timer counting the time till the concert, user is able to choose the ticket, add add-ons and find out total price. Mobile responsive.",
        // "quotes": "Quote Generator",
        // "quotes-par": "Fetches the quotes from https://type.fit/api/quotes, user can post favorite quote to Twitter. Mobile responsive.",
        // "drum": "Drum",
        // "drum-par": "Fun game for everyone who wants to try yourself as a drummer. User is able to press on the picture to hear the sound or press corresponding key on the keyboard. Mobile responsive.",
        // "wewood": "WeWood Woodworking",
        // "wewood-par": "Landing page for a woodworking company coded with Bootstrap5. Mobile responsive.",
        // "namaste": "Namaste Yoga Studio",
        // "namaste-par": "Landing page for a yoga studio coded with HTML5 and CSS3, Flexbox. Mobile responsive.",
        // "photographer": "Photographer website",
        // "photographer-par": "Landing page for a Photographer coded with Bootstrap5. Mobile responsive.",
        // "illustrator": "Illustrator Website",
        // "illustrator-par": "Landing page for an illustrator. Mobile responsive."
     },

      "ru": {
            "theme-dark": "Ночь",
            "theme-light": "День",
            "heading-name": "Я - Анастасия",
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
            // "weather-btn": "Показать",
            // "weather": "Прогноз погоды API",
            // "weather-par": "Извлекает информацию из Openweathermap API. В зависимости от погоды фон видео меняется так же, как и сообщение. Поддерживает Фаренгейты и Цельсия. Мобильно адаптировано.",
            "send": "Отправить",
            // "yoga": "Приложение для йоги",
            // "yoga-par": "Выберите одну из 5 асан, установите таймер, видео появляется по клику и исчезает по истечении времени. Кнопка отключена, пока идет видео. 3 кнопки звуков релаксации. Значок перенаправляет на основной сайт.",
            // "quiz": "Тест на знание столиц",
            // "quiz-par": "Пользователь может выбирать ответы, всплывает уведомление, если поле не заполнено, неправильные ответы выделяются красным цветом, правильные - зеленым. В конце появляется общий балл. Мобильно адаптировано.",
            // "slides": "Приложение для фотографа",
            // "slides-par": "Лендинг для фотографа. Слайд-шоу избранных изображений и слайды в массиве. Мобильно адаптировано.",
            // "recipe": "Книга рецептов",
            // "recipe-par": "Пользователь может осуществить поиск, введя первую букву названия рецепта. После нажатия кнопки появляется полный рецепт. Таймер приготовления включен в эту кулинарную книгу. Мобильно адаптировано",
            // "concert": "Таймер обратного отсчета",
            // "concert-par": "Отсчитывает время до концерта, пользователь может выбрать количество билетов, добавить дополнения и узнать общую стоимость. Мобильно адаптировано",
            // "quotes": "Цитаты API",
            // "quotes-par": "Получает цитаты с https://type.fit/api/quotes, пользователь может опубликовать любимую цитату в Twitter. Мобильно адаптировано",
            // "drum": "Игра Drum",
            // "drum-par": "Увлекательная игра для всех, кто хочет попробовать себя в роли барабанщика. Пользователь может нажать на картинку, чтобы услышать звук, или нажать соответствующую клавишу на клавиатуре. Мобильно адаптировано",
            // "wewood": "Лендинг для мебельной компании",
            // "wewood-par": "Сайт кодирован с помощью Bootstrap5. Мобильно адаптировано",
            // "namaste": "Лендинг для йога студии",
            // "namaste-par": "Сайт кодирован с использованием HTML5, CSS3. Мобильно адаптировано",
            // "photographer": "Лендинг для фотографа",
            // "photographer-par": "Сайт кодирован с помощью Bootstrap5. Мобильно адаптировано",
            // "illustrator": "Лендинг для иллюстратора",
            // "illustrator-par": "Сайт кодирован с помощью библиотеки Tailwind. Мобильно адаптировано",
    }
  }

const btnRU = document.querySelector('#btnRU');
const btnENG = document.querySelector('#btnENG');

btnRU.addEventListener('click', changeLanguageRu);
btnENG.addEventListener('click', changeLanguageEng);

function changeLanguageRu () {
  document.querySelector('.heading-name').textContent = language.ru["heading-name"];
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
  // document.querySelector('.weather').textContent = language.ru["weather"];
  // document.querySelector('.weather-par').textContent = language.ru["weather-par"];
  // document.querySelector('.weather-btn').textContent = language.ru["weather-btn"];
  // document.querySelector('.yoga').textContent = language.ru["yoga"];
  // document.querySelector('.yoga-par').textContent = language.ru["yoga-par"];
  // document.querySelector('.quiz').textContent = language.ru["quiz"];
  // document.querySelector('.quiz-par').textContent = language.ru["quiz-par"];
  // document.querySelector('.slides').textContent = language.ru["slides"];
  // document.querySelector('.slides-par').textContent = language.ru["slides-par"];
  // document.querySelector('.recipe').textContent = language.ru["recipe"];
  // document.querySelector('.recipe-par').textContent = language.ru["recipe-par"];
  // document.querySelector('.concert').textContent = language.ru["concert"];
  // document.querySelector('.concert-par').textContent = language.ru["concert-par"];
  // document.querySelector('.quote').textContent = language.ru["quotes"];
  // document.querySelector('.quote-par').textContent = language.ru["quotes-par"];
  // document.querySelector('.drum').textContent = language.ru["drum"];
  // document.querySelector('.drum-par').textContent = language.ru["drum-par"];
  // document.querySelector('.wewood').textContent = language.ru["wewood"];
  // document.querySelector('.wewood-par').textContent = language.ru["wewood-par"];
  // document.querySelector('.photographer').textContent = language.ru["photographer"];
  // document.querySelector('.photographer-par').textContent = language.ru["photographer-par"];
  // document.querySelector('.namaste').textContent = language.ru["namaste"];
  // document.querySelector('.namaste-par').textContent = language.ru["namaste-par"];
  // document.querySelector('.illustrator').textContent = language.ru["illustrator"];
  // document.querySelector('.illustrator-par').textContent = language.ru["illustrator-par"];
}

function changeLanguageEng () {
  document.querySelector('.heading-name').textContent = language.en["heading-name"];
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
  // document.querySelector('.weather').textContent = language.en["weather"];
  // document.querySelector('.weather-par').textContent = language.en["weather-par"];
  // document.querySelector('.yoga').textContent = language.en["yoga"];
  // document.querySelector('.yoga-par').textContent = language.en["yoga-par"];
  // document.querySelector('.quiz').textContent = language.en["quiz"];
  // document.querySelector('.quiz-par').textContent = language.en["quiz-par"];
  // document.querySelector('.slides').textContent = language.en["slides"];
  // document.querySelector('.slides-par').textContent = language.en["slides-par"];
  // document.querySelector('.recipe').textContent = language.en["recipe"];
  // document.querySelector('.recipe-par').textContent = language.en["recipe-par"];
  // document.querySelector('.concert').textContent = language.en["concert"];
  // document.querySelector('.concert-par').textContent = language.en["concert-par"];
  // document.querySelector('.quote').textContent = language.en["quotes"];
  // document.querySelector('.quote-par').textContent = language.en["quotes-par"];
  // document.querySelector('.drum').textContent = language.en["drum"];
  // document.querySelector('.drum-par').textContent = language.en["drum-par"];
  // document.querySelector('.wewood').textContent = language.en["wewood"];
  // document.querySelector('.wewood-par').textContent = language.en["wewood-par"];
  // document.querySelector('.photographer').textContent = language.en["photographer"];
  // document.querySelector('.photographer-par').textContent = language.en["photographer-par"];
  // document.querySelector('.namaste').textContent = language.en["namaste"];
  // document.querySelector('.namaste-par').textContent = language.en["namaste-par"];
  // document.querySelector('.illustrator').textContent = language.en["illustrator"];
  // document.querySelector('.illustrator-par').textContent = language.en["illustrator-par"];
}
