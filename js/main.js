document.documentElement.classList.add("js-enabled");
const buttonSelector = document.querySelectorAll('.btn_slider');
const tabSelector = document.querySelectorAll('.tabContent');

const displayTab = function (e){
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

for (let i = 0; i <buttonSelector.length ; i++) {
    buttonSelector[i].addEventListener('click',(e)=>{
        displayTab(e);
    })
}