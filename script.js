const fullnav = document.querySelector('#fullnav');
const close = document.querySelector('#flinks');

menu.addEventListener('click', function(){
    fullnav.style.right ='0';
});

close.addEventListener('click',function(){
    fullnav.style.right = '-100%';
});
