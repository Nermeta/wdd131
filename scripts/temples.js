const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#hamburger');
const title = document.querySelector('#gallery')

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
    hambutton.classList.toggle("change");
    title.style.display = title.style.display === 'none' ? 'block' : 'none';
})


