// NAV MENU
const selectElement = (element) => document.querySelector(element);
selectElement('.menu-icons').addEventListener('click',() =>{
   selectElement('nav').classList.toggle('active');
});
selectElement('.nav-list li:hover > .sub-menu').addEventListener('mouseover',() =>{
    selectElement('.sub-menu').style.display="block";
});
// NAV MENU END

const btn_button1 = document.querySelector("#btn_button1");
const btn_button2 = document.querySelector("#btn_button2");
const btn_button3 = document.querySelector("#btn_button3");

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");

btn_button1.addEventListener("click", ()=>{
    button1.style.display="block";
    button2.style.display="none";
    button3.style.display="none";
})
btn_button2.addEventListener("click", ()=>{
    button2.style.display="block";
    button1.style.display="none";
    button3.style.display="none";
})
btn_button3.addEventListener("click", ()=>{
    button3.style.display="block";
    button2.style.display="none";
    button1.style.display="none";
})