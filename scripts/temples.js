const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#hamburger');
const title = document.querySelector('#gallery')

hambutton.addEventListener('click', () => {
    hambutton.classList.toggle('show');

    mainnav.classList.toggle('show');
   
})


function myFunction(x) {
    x.classList.toggle("change");
  }