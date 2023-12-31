 /*==================================Toggle icons===============================*/
 let menuIcon = document.querySelector("#menu-icon");
 let navbar = document.querySelector(".navbar");

 menuIcon.onclick = () => {
   menuIcon.classList.toggle("bx-x");
   navbar.classList.toggle("active");
 };


 /*==================================Scroll sections===============================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height ){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        
        };
    });

/*==================================Sticky navbar===============================*/
let header = document .querySelector('header');

header.classList.toggle('stricky' , window.scrollY > 100);

/*==================================Remove Toggle icons and navbar when click navbar link===============================*/
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');
};

 /*==================================Scroll reveal===============================*/
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200

});

// ScrollReveal().reveal('.home-content', {origin: 'top'});
// ScrollReveal().reveal('.home-content, .lineUp', {origin: 'bottom'});
// ScrollReveal().reveal('.home-content, .ready-australia', {origin: 'left'});