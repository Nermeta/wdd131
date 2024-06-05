// select the DOM elements for output
const year = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");
// use the date object
const today = new Date();

year.innerHTML = `&copy ${today.getFullYear()}`;
lastModified.innerHTML = `Last Modification: ${document.lastModified}`;

const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#hamburger');
const title = document.querySelector('#gallery')

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
    hambutton.classList.toggle("change");
    title.style.display = title.style.display === 'none' ? 'block' : 'none';
})


window.addEventListener('scroll', function() {
    const scrolled = window.scrollY;
    const hero = document.getElementsByClassName('hero-image');
    hero.style.backgroundPositionY = -(scrolled * 0.5) + 'px'; // Adjust scroll speed as needed
});
