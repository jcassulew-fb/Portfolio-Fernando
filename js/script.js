//*==============tages para icon da nav ========*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


//*============== SCROLL active link ========*/
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('header nav a[href^="#"]');

function updateActiveLink() {
    const scrollPosition = window.scrollY + 150;
    let activeSection = sections[0];

    sections.forEach(section => {
        if (scrollPosition >= section.offsetTop) {
            activeSection = section;
        }
    });

    navLinks.forEach(link => {
        link.classList.toggle('active', Boolean(activeSection && link.hash === `#${activeSection.id}`));
    });

    //*============== SCROLL active link ========*/
 let header = document.querySelector('header');

 header.classList.toggle('sticky', window.scrollY >= 100);

 //*==============remove os icon e nav qunado é clicado========*/

    menuIcon.classList.remove('bx-x');
     navbar.classList.remove('active');

};

window.addEventListener('scroll', updateActiveLink);
updateActiveLink();


 //*==============revelação ao rolar a página========*/
   ScrollReveal({ 
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
   });

   ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
   ScrollReveal().reveal('.home-img, .services-content, .portfolio-box, .contact form', { origin: 'bottom' });
   ScrollReveal().reveal('.home-content h1, .about-image', { origin: 'left' });
    ScrollReveal().reveal('.home-content p, .about-content', { origin: 'left' });

     //*==============efeito de digitação========*/

     const typed = new Typed('.multiple-text', {
        strings: ['Desenvolvedor Frontend', 'Analista de Segurança Cibernética','Empreendedor Digital'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
     });


