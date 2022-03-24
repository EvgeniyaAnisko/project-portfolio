import i18Obj from "./translate.js"

let globalLang = 'en'
let globalTheme = 'dark'

const titleWrap = document.querySelectorAll('.section-title-wrap');
const title = document.querySelectorAll('.section-title')
const theme = document.querySelector('.theme-switch')
const skillText = document.querySelectorAll('.skill-text')
const hamLinks = document.querySelectorAll('.hamburger-nav-link')
const hamList = document.querySelector('.hamburger-nav-list')
const lines = document.querySelectorAll('.line')
const portfolioBtn = document.querySelectorAll('.portfolio-btn');
const hambItem = document.getElementById('hamburger-item')
const hamb = document.getElementById("hamburger")

function getTranslate(lang) {
    let allData = document.querySelectorAll('[data-i18]')
    for (let key of allData)
        if (key.dataset.i18)
            key.textContent = i18Obj[lang][key.dataset.i18]
}

function switchTheme() {
    theme.classList.toggle("is-active")
    document.body.classList.toggle('light')
    if(document.body.classList.contains('light')){
        globalTheme = 'light'
    }
    else
        globalTheme = 'dark'
    for (var i = 0; i < title.length - 1; i++)
        title[i].classList.toggle('light')
    for (var i = 0; i < titleWrap.length; i++) 
        titleWrap[i].classList.toggle('light')
    for (var i = 0; i < skillText.length; i++)
        skillText[i].classList.toggle('light')
    for (var i = 0; i < hamLinks.length; i++)
        hamLinks[i].classList.toggle('light')
    hamList.classList.toggle('light');
    for (var i = 0; i < portfolioBtn.length; i++) 
        portfolioBtn[i].classList.toggle('light')
    for (var i = 0; i < lines.length; i++) 
        lines[i].classList.toggle('light')
}

function setLocalStorage() {
    localStorage.setItem('globalLang', globalLang);
    localStorage.setItem('globalTheme', globalTheme);
  }
window.addEventListener('beforeunload', setLocalStorage)

  function getLocalStorage() {
    if(localStorage.getItem('globalLang')) {
      const lang = localStorage.getItem('globalLang');
      getTranslate(lang);
      if(lang === 'ru'){
        ru.classList.add('is-active')
        en.classList.remove('is-active')
      } else{
        ru.classList.remove('is-active')
        en.classList.add('is-active')
      }
    }
    if(localStorage.getItem('globalTheme')) {
        const theme = localStorage.getItem('globalTheme');
        if (theme === 'light')
        switchTheme()
      }

  }
 window.addEventListener('load', getLocalStorage)

function hiddenBurger() {
    hambItem.style.width = "0%";
    hambItem.style.right = "-620px";
    hamb.classList.toggle("is-active")
}


hamb.onclick = function () {
    hamb.classList.toggle("is-active")
    if (hamb.classList.contains("is-active")) {
        hambItem.style.width = "100%";
         hambItem.style.right = "0";
    }
    else {
        hambItem.style.width = "0%";
        hambItem.style.right = "-620px";
    }
}

let hambNavItem1 = document.getElementById("hamburger-nav-link-1")
hambNavItem1.onclick = function(){ hiddenBurger()}

let hambNavItem2 = document.getElementById("hamburger-nav-link-2")
hambNavItem2.onclick = function(){ hiddenBurger()}

let hambNavItem3 = document.getElementById("hamburger-nav-link-3")
hambNavItem3.onclick = function(){ hiddenBurger()}

let hambNavItem4 = document.getElementById("hamburger-nav-link-4")
hambNavItem4.onclick = function(){ hiddenBurger()}

let hambNavItem5 = document.getElementById("hamburger-nav-link-5")
hambNavItem5.onclick = function(){ hiddenBurger()}



const portfolioImages = document.querySelectorAll('.portfolio-image');
const winter = document.querySelector('.winter')
winter.onclick = function () {
    if (!winter.classList.contains("is-active")) {
        for (let i = 0; i < portfolioBtn.length; i++)
            portfolioBtn[i].classList.remove("is-active")
        winter.classList.add("is-active")
        portfolioImages.forEach((img, index) => img.src = `./assets/img/winter/${index + 1}.jpg`);
    }
}

const spring = document.querySelector('.spring')
spring.onclick = function () {
    if (!spring.classList.contains("is-active")) {
        for (let i = 0; i < portfolioBtn.length; i++)
            portfolioBtn[i].classList.remove("is-active")
        spring.classList.add("is-active")
        portfolioImages.forEach((img, index) => img.src = `./assets/img/spring/${index + 1}.jpg`);
    }
}

const summer = document.querySelector('.summer')
summer.onclick = function () {
    if (!summer.classList.contains("is-active")) {
        for (let i = 0; i < portfolioBtn.length; i++)
            portfolioBtn[i].classList.remove("is-active")
        summer.classList.add("is-active")
        portfolioImages.forEach((img, index) => img.src = `./assets/img/summer/${index + 1}.jpg`);
    }
}

const autumn = document.querySelector('.autumn')
autumn.onclick = function () {
    if (!autumn.classList.contains("is-active")) {
        for (let i = 0; i < portfolioBtn.length; i++)
            portfolioBtn[i].classList.remove("is-active")
        autumn.classList.add("is-active")
        portfolioImages.forEach((img, index) => img.src = `./assets/img/autumn/${index + 1}.jpg`);
    }
}

theme.onclick = function(){ switchTheme()}

const ru = document.querySelector('.ru')
const en = document.querySelector('.en')

ru.onclick = function () {
    if (!ru.classList.contains("is-active")) {
        globalLang = 'ru'
        getTranslate(globalLang)
        ru.classList.toggle('is-active')
        en.classList.toggle('is-active')
    }
}
en.onclick = function () {
    if (!en.classList.contains("is-active")) {
        globalLang = 'en'
        getTranslate(globalLang)
        ru.classList.toggle('is-active')
        en.classList.toggle('is-active')
    }
}

function preloadImages() {
    const seasons = ['winter', 'spring', 'summer', 'autumn'];
    for (let j = 0; j < 4; j++)
        for (let i = 1; i <= 6; i++) {
            const img = new Image();
            img.src = `./assets/img/${seasons[j]}/${i}.jpg`;
        }
}

console.log("Ваша отметка - 75 балла(ов)")
preloadImages();
