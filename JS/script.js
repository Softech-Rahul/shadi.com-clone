const login_wrapper = document.querySelector('.login_wrapper');
const login_popup = document.querySelector('.login_popup');
const close_btn = document.querySelector('.close');
const main_div = document.querySelector('.main');
const help_container = document.querySelector('.help-container');
const help_popup = document.querySelector('.help-popup');
// const body = document.querySelector('body');

login_popup.addEventListener('click',()=>{
    login_wrapper.classList.add('active');
    help_container.classList.remove ('active');
});

close_btn.addEventListener('click', ()=>{
    login_wrapper.classList.remove('active');

});
login_popup.addEventListener('click', ()=>{
    main_div.classList.add('dark');
});
close_btn.addEventListener('click', ()=>{
    main_div.classList.remove('dark');
});
help_popup.addEventListener('click', () =>{
    if(help_container.className =='help-container')
    {
        help_container.classList.add('active');
    }
    else{
        help_container.classList.remove('active');
    }
   
});




