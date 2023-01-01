burger  = document.querySelector('.burger')
navbar  = document.querySelector('.navbar')
nav  = document.querySelector('.nav')
nitem  = document.querySelector('.n-item')





burger.addEventListener('click', ()=>{
 nitem.classList.toggle('v-class-resp');
 nav.classList.toggle('v-class-resp');
 navbar.classList.toggle('h-nav-resp');
});