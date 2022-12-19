document.documentElement.classList.add("js-enabled");
const buttonSelector = document.querySelectorAll('.btn_slider');
const tabSelector = document.querySelectorAll('.tabContent');
const buttonYear = document.getElementsByClassName('button-year');
const parcoursImg = document.querySelectorAll('.parcours-img img');
const btnMenus = document.querySelectorAll('.services');


const handleEnter = function (e) {
    this.lastElementChild.classList.add('trigger-enter');
    setTimeout(() => this.lastElementChild.classList.add('trigger-enter-active'), 150);
}

const handleExit = function () {
    this.lastElementChild.classList.remove('trigger-enter', 'trigger-enter-active');
}
btnMenus.forEach(btnMenu => btnMenu.addEventListener('click', handleEnter));
btnMenus.forEach(btnMenu => btnMenu.addEventListener('mouseenter', handleEnter));
btnMenus.forEach(btnMenu => btnMenu.addEventListener('mouseleave', handleExit));
//BUTTON DESCRIPTION
const displayTab = function (e) {
    let id = e.currentTarget.dataset.number;
    for (const tabSelectorElement of tabSelector) {
        tabSelectorElement.classList.add('hidden');
    }
    for (const buttonSelectorElement of buttonSelector) {
        buttonSelectorElement.classList.remove('active');
    }
    e.currentTarget.classList.add('active');
    document.getElementById(id).classList.remove(`hidden`);
};

for (let i = 0; i < buttonSelector.length; i++) {
    buttonSelector[i].addEventListener('click', (e) => {
        displayTab(e);
    })
}

//BUTTON YEAR
for (const buttonYearElement of buttonYear) {
    buttonYearElement.addEventListener('click', (e) => {
        let data = e.currentTarget.dataset.order;
        for (const img of parcoursImg) {
            img.classList.remove('active');
        }
        document.getElementById(data).classList.add('active')
    });
}

const buttonsReviews = document.getElementsByClassName('slider__navlink');

for (const buttonReview of buttonsReviews) {
    buttonReview.addEventListener('click', function (e) {
        removeClassActiveReviews(e);
        e.currentTarget.classList.add('slider-navlink-active');
    });
}

const removeClassActiveReviews = function (e) {
    for (const buttonsReview of buttonsReviews) {
        buttonsReview.classList.remove('slider-navlink-active');
    }
}