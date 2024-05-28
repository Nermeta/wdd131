const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#hamburger');
const title = document.querySelector('#gallery')

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
    hambutton.classList.toggle("change");
    title.style.display = title.style.display === 'none' ? 'block' : 'none';
})


const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
    {
        templeName: "Salt Lake",
        location: "Salt Lake City, Utah",
        dedicated: "1893, April, 6",
        area: 253000,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg"


      },
      {
        templeName: "Bountiful Utah ",
        location: "Bountiful, Utah ",
        dedicated: "1995, January, 8",
        area: 104000,
        imageUrl:
        "https://churchofjesuschrist.org/imgs/0ef41c19f3cd8113dba38d4dfdca16a5d06cdcd5/full/320%2C/0/default"
      },
      {
        templeName: "Laie Hawaii Temple",
        location: "Laie, Hawaii",
        dedicated: "1919, November, 27",
        area: 47224,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/laie-hawaii-temple/laie-hawaii-temple-7370-main.jpg"
      },
  ];

  const mainContainer = document.querySelector('.cards');

  temples.forEach((temple) => {
      // Create temple card container
      const card = document.createElement('div');
      card.classList.add('temple-card');
  
      // Create temple name element
      const name = document.createElement('h2');
      name.textContent = temple.templeName;
  
      // Create temple location element
      const location = document.createElement('p');
      location.textContent = `Location: ${temple.location}`;
  
      // Create temple dedicated date element
      const dedicated = document.createElement('p');
      dedicated.textContent = `Dedicated: ${temple.dedicated}`;
  
      // Create temple area element
      const area = document.createElement('p');
      area.textContent = `Area: ${temple.area} square feet`;
  
      // Create temple image element
      const image = document.createElement('img');
      image.src = temple.imageUrl;
      image.alt = temple.templeName;
      image.loading = 'lazy'; // native lazy loading
  
      // Append elements to card container
      card.appendChild(name);
      card.appendChild(location);
      card.appendChild(dedicated);
      card.appendChild(area);
      card.appendChild(image);
  
      // Append card to main container
      mainContainer.appendChild(card);
  });

  function displayAllTemples() {
    mainContainer.innerHTML = '';
    temples.forEach((temple) => {
        createTempleCard(temple);
    });
}

function createTempleCard(temple) {
    const card = document.createElement('div');
    card.classList.add('temple-card');

    const name = document.createElement('h2');
    name.textContent = temple.templeName;

    const location = document.createElement('p');
    location.textContent = `Location: ${temple.location}`;

    const dedicated = document.createElement('p');
    dedicated.textContent = `Dedicated: ${temple.dedicated}`;

    const area = document.createElement('p');
    area.textContent = `Area: ${temple.area} square feet`;

    const image = document.createElement('img');
    image.src = temple.imageUrl;
    image.alt = temple.templeName;
    image.loading = 'lazy'; // native lazy loading

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedicated);
    card.appendChild(area);
    card.appendChild(image);

    mainContainer.appendChild(card);
}

function filterAndDisplay(category) {
    mainContainer.innerHTML = '';
    let filteredTemples = [];

    switch (category) {
        case 'Old':
            filteredTemples = temples.filter(temple => parseInt(temple.dedicated.split(',')[0]) < 1900);
            break;
        case 'New':
            filteredTemples = temples.filter(temple => parseInt(temple.dedicated.split(',')[0]) > 2000);
            break;
        case 'Large':
            filteredTemples = temples.filter(temple => temple.area > 90000);
            break;
        case 'Small':
            filteredTemples = temples.filter(temple => temple.area < 10000);
            break;
        case 'Home':
            displayAllTemples();
            return;
    }

    filteredTemples.forEach((temple) => {
        createTempleCard(temple);
    });
}

document.querySelectorAll('.navigation .nav-link').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const category = event.target.textContent.trim();
        filterAndDisplay(category);
    });
});

displayAllTemples();