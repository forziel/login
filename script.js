'USE STRICT'
const hideBtn = document.querySelector('#lock + button');
const hide = document.querySelector('#lock + button #hide');
const show = document.querySelector('#lock + button #show');
const lockContainer = document.querySelector('.password label');
const lock = document.querySelector('#lock');
const contin = document.querySelector('.continue button');
const body = document.getElementsByTagName('body');
const locked = document.getElementById('locked');
const open = document.getElementById('open');
const container = document.getElementsByClassName('container');


const resetPopup = document.querySelector('.reset-popup');
const xmark = document.querySelector('.popup header i');

xmark.addEventListener('click', () =>{
    resetPopup.classList.remove('active')
})

//! LOGİN VERİFİCATİON
contin.addEventListener('click', () =>{

    if ( lock.value == 'aligüvenç' ) {
        
        locked.style.display='none';
        open.style.display='block';
        open.style.color='green';

        setTimeout(() => {
            alert('login succesfully');
        }, 100);
        

    }else{
        locked.style.display='block';
        open.style.display='none';
        setTimeout(() => {
            alert('login failed');
        }, 100);
        locked.style.color='darkred';
    }

})




//! HİDE/SHOW PASSWORD
hideBtn.addEventListener('click' , hideFunction); 

function hideFunction() {
    if (lock.type === 'password') {
        lock.type = 'text';
        hideBtn.replaceChild(show , hide);
        
    }else{
        lock.type = 'password';
        hideBtn.replaceChild(hide, show);
    }
}


const forgetButton = document.querySelector('.forget');
const popup = document.querySelector('.reset-popup');
const logInButton= document.querySelector('.log-in button');


forgetButton.addEventListener('click' , () =>{
    popup.classList.add('active');
} );

logInButton.addEventListener('click' , () =>{
    popup.classList.remove('active');
} );







