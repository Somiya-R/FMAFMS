const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', ()=>{
    container.classList.add("active");
});

loginBtn.addEventListener('click', ()=>{
    container.classList.remove("active");
});

// forgot password
const step1 = document.getElementById('step1');
const step2 = document.getElementById('step2');
const step3 = document.getElementById('step3');

const proceedbtn = document.querySelector('.forgot-password form #step1 button');
const verifybtn = document.querySelector('.forgot-password form #step2 button');
const submitbtn = document.querySelector('.forgot-password form #step3 button');

proceedbtn.addEventListener('click', ()=>{
    step1.classList.remove("active");
    step2.classList.add("active");
});

verifybtn.addEventListener('click', ()=>{
    step2.classList.remove("active");
    step3.classList.add("active");

});

