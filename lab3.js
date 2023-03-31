const modal = document.querySelector('.modal-cont');
const cont = document.querySelector('.modal-content');

let closeButton = document.querySelector('.close');
let modalTrigger = document.querySelectorAll('[data-trigger]');
let isModalOpen = false;
let pageOffset = 0;

let openModal = function(){
    modal.classList.add('is-open');
    isModalOpen = true;
    pageOffset = window.scrollY;
}

let closeModal = function(){
    modal.classList.remove('is-open');
    isModalOpen = false;
}

modalTrigger.forEach(function(item){
    item.addEventListener('click', openModal)
})

modal.addEventListener('click', (event)=> {
    if(isModalOpen && event.target == modal){
        closeModal();
        console.log(event.target);
    }
    else console.log(event.target);
});

closeButton.addEventListener('click', closeModal);

let onScroll = function(){
    if (isModalOpen){
        window.scrollTo(0, pageOffset);
    }
}

document.addEventListener('scroll', onScroll);

const body = document.body;
const form = document.getElementById('form');
const show = document.getElementById('btn1');
const send = document.getElementById('btn2');
const input1 = document.getElementById('id1');
const input2 = document.getElementById('id2');

form.addEventListener('submit', (event)=>{
    email = input1.value;
    password = input2.value;
    console.table({email, password});
    event.preventDefault();
    closeModal();
    input1.value = " ";
    input2.value = " ";
});

input1.addEventListener('focus', ()=>{
    console.log('focus1');
})

input2.addEventListener('focus', ()=>{
    console.log('focus2');
})

show.addEventListener('pointerdown', ()=>{
    input2.setAttribute('type', 'text');
})

show.addEventListener('pointerleave', ()=>{
    input2.setAttribute('type', 'password');
})

error1 = document.getElementById("error1");

input1.addEventListener('blur', ()=>{
    if(input1.validity.typeMismatch){
        error1.textContent = "Не почта";
        input1.setCustomValidity("Не почта");
    }
    else if(input1.validity.tooShort){
        error1.textContent = "Мало";
    }
    else{
        error1.textContent = "";
        input1.setCustomValidity("");
    }
    console.log(input1.validity);
    console.log(error1);
});

input2.addEventListener('blur', ()=>{
    if(input2.validity.typeMismatch){
        error2.textContent = "Неверный пароль";
        input2.setCustomValidity("Неверный пароль");
    }
    else if(input2.validity.tooShort){
        error2.textContent = "Мало";
    }
    else{
        error2.textContent = "";
        input2.setCustomValidity("");
    }
    console.log(input2.validity);
});


