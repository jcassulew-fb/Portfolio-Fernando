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
};

window.addEventListener('scroll', updateActiveLink);
updateActiveLink();



