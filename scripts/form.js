const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        avgRating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        avgRating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        avgRating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        avgRating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        avgRating: 5.0
    }
];

const productSelect = document.getElementById('reviewItem');
products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
});


let reviewCount = localStorage.getItem('reviewCount') || 0;
reviewCount = parseInt(reviewCount) + 1;

localStorage.setItem('reviewCount', reviewCount);

document.getElementById('review-count').textContent = `You have completed ${reviewCount} reviews.`;