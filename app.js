let tiger = document.getElementById('tiger');
let cross = document.getElementById('cross');
let body = document.querySelector('body')
let secnav = document.getElementById('secnav')
let year = document.getElementById('year')
// tiger.addEventListener('click',function(){
//     secnav.style.display ='inline-block'
// })
cross.addEventListener('click', function(){
    secnav.style.display='none'
});


tiger.addEventListener('click',function(){
    secnav.style.display='flex'
})
// this will add the year automatically
year.innerHTML = new Date().getFullYear()


// document.getElementById("year").textContent = new Date().getFullYear();


const email = document.getElementById('email');
const github = document.getElementById('github');


email.addEventListener('click',function(){
    window.location.href = 'https://mail.google.com/mail/?view=cm&fs=1&to=goooluraja@gmail.com';
});
github.addEventListener('click',function(){
    window.location.href='https://www.instagram.com/gooolu__';
})
