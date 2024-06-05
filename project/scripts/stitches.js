const stitches = [
    {
        stitchName: "Running Stitch",
        description: "The running stitch is one of the simplest and most fundamental stitches in embroidery, yet its versatility makes it a cornerstone of the craft. It involves creating a series of straight stitches that run in a continuous line, hence its name. Each stitch is made by passing the needle up and down through the fabric, creating evenly spaced stitches that can be used for outlining designs, adding texture, or filling in areas with subtle detail. Despite its simplicity, the running stitch can be adapted and embellished in countless ways, making it an essential technique for both novice and experienced embroiderers alike.",
        imageUrl: "https://penguinandfish.com/cdn/shop/articles/Running-stitch-blog-header_1000x.jpg?v=1621199902"
    },
    {
        stitchName: "Stem Stitch",
        description: "The stem stitch is a classic embroidery stitch that creates a beautiful, rope-like line. It's ideal for outlining shapes, creating stems, or adding detail to designs. To work the stem stitch, bring the needle up through the fabric and take a small stitch forward. Then, bring the needle back down, but instead of pulling the thread all the way through, leave a small loop. Bring the needle up again, just ahead of the loop, and pull the thread through, securing the loop underneath. Repeat this process, keeping the stitches close together for a smooth, continuous line. The result is a series of interlocking stitches that resemble the twisted fibers of a stem, hence the name stem stitch.",
        imageUrl: "https://i.ytimg.com/vi/pMrC3MbAaXs/maxresdefault.jpg"
    },
    
    {
        stitchName: "Back Stich",
        description: "The backstitch is a strong, versatile stitch used in embroidery and sewing. It involves bringing the needle up through the fabric, taking a small backward stitch, and then bringing the needle forward again to make the next stitch. This creates a continuous line of stitches that is both sturdy and precise. Backstitching is often used for outlining designs, adding text, or creating fine details because of its ability to produce clean, straight lines. It's a fundamental stitch in embroidery that offers both durability and flexibility in creating intricate designs.",
        imageUrl: "https://penguinandfish.com/cdn/shop/articles/Backstitch-blog-header_1000x.jpg?v=1621269139",
    },
    {
        stitchName: "Satin Stitch",
        description: "The satin stitch is a smooth and sleek embroidery technique used to fill in shapes and create solid blocks of color or texture. It involves stitching closely side by side until the entire area is filled with parallel stitches. The result is a polished, satin-like finish that adds richness and depth to the embroidery design.",
        imageUrl: "https://penguinandfish.com/cdn/shop/articles/Satin-stitch-blog-header.jpg?v=1621291793",
    },
    {
        stitchName: "French Knot",
        description: "The French knot is a small, decorative knot stitch used to add texture and dimension to embroidery designs. The French knot is created by bringing the needle up through the fabric at the desired point, wrapping the thread around the needle a few times, and then inserting the needle back down into the fabric near the starting point. This creates a raised knot on the surface of the fabric, perfect for adding detail to flowers, eyes, or other small elements in embroidery designs.",
        imageUrl: "https://penguinandfish.com/cdn/shop/articles/French-knot-stitch-blog-header_1000x.jpg?v=1621289478",
    },
    {
        stitchName: "Chain Stitch",
        description: "The chain stitch is an embroidery stitch that creates a series of looped chains. Here's a concise description: To make a chain stitch, bring the needle up through the fabric and insert it back down into the same hole, leaving a loop. Then, bring the needle up through the fabric a short distance away and pass it through the loop, pulling tight to form the first chain. Repeat this process, creating a chain of interconnected loops. The chain stitch is commonly used for outlining, filling shapes, or adding decorative accents in embroidery projects.",
        imageUrl: "https://penguinandfish.com/cdn/shop/articles/Single-detached-chain-stitch-blog-header_1000x.jpg?v=1621294084",
    },
    {
        stitchName: "Lazy Daisy Stitch",
        description: "The Lazy Daisy stitch is a petal-shaped embroidery stitch often used to create flower petals, leaves, and other delicate details. Here's a brief description: To create a Lazy Daisy stitch, bring the needle up through the fabric at the starting point of the petal. Then, make a small loop with the thread and secure it with a tiny stitch at the tip of the loop to form the petal shape. Repeat this process for each petal, spacing them as desired. The Lazy Daisy stitch adds a charming and whimsical touch to embroidery designs, perfect for embellishing floral motifs and adding delicate accents.",
        imageUrl: "https://penguinandfish.com/cdn/shop/articles/Lazy-daisy-stitch-blog-header_1000x.jpg?v=1621290074",
    },
    {
        stitchName: "Feather Stitch",
        description: "The Feather Stitch is a decorative embroidery stitch that resembles the veins of a feather. Here's a succinct description: To create the Feather Stitch, start by making a straight stitch on the fabric. Then, bring the needle up a short distance away from the end of the first stitch and make another straight stitch, angling it towards the first stitch. Continue this process, alternating sides and creating a series of angled stitches that resemble the edges of a feather. The Feather Stitch is versatile and can be used for borders, embellishments, or surface embroidery to add texture and visual interest to your designs.",
        imageUrl: "https://penguinandfish.com/cdn/shop/articles/Feather-stitch-blog-header_1000x.jpg?v=1621293314",
    },
    {
        stitchName: "Cross Stitch",
        description: "Cross stitch is a classic and popular embroidery technique used to create intricate designs and patterns. Here's a brief description: In cross stitch, a pattern is created by making tiny X-shaped stitches on the fabric. To do this, bring the needle up through the fabric at one corner of the square, then insert it diagonally across to the opposite corner to form one arm of the X. Next, bring the needle back up through the fabric at the remaining two corners to complete the X. Repeat this process, following the pattern or chart, to fill in the desired design. Cross stitch is often used to create detailed images, samplers, and decorative pieces, offering endless possibilities for creativity and expression in embroidery.",
        imageUrl: "https://www.perlesandco.co.uk/images/pratiques/12.point_de_croix.png",
    },
    {
        stitchName: "Bullion Stitch",
        description: "The Bullion Stitch is an embroidery stitch that creates raised, coiled effects, often used to add texture and intricate detail to designs. Here's a brief description: To create the Bullion Stitch, bring the needle up through the fabric and wrap the thread around the needle several times to form a coil. Then, insert the needle back down into the fabric close to where it came up, holding the coils in place with your thumb or finger. Pull the needle through, allowing the coils to form a raised loop on the surface of the fabric. The Bullion Stitch can vary in length and thickness depending on the number of wraps around the needle, and it's commonly used for creating curls, twists, and intricate motifs in embroidery.",
        imageUrl: "https://www.embroidery.rocksea.org/images/embroidery/bullion_knot_2.jpg",
    },
];

const mainContainer = document.querySelector('.cards');

stitches.forEach((stitch) => {
    createStitchCard(stitch);
});

function createStitchCard(stitch) {
    // Create stitch card container
    const card = document.createElement('div');
    card.classList.add('stitch-card');

    // Create stitch name element
    const name = document.createElement('h2');
    name.textContent = stitch.stitchName;

    // Create stitch image element
    const image = document.createElement('img');
    image.src = stitch.imageUrl;
    image.alt = stitch.stitchName;
    image.loading = 'lazy'; // native lazy loading

    // Create stitch description element
    const desc = document.createElement('p');
    desc.textContent = stitch.description;

    // Append elements to card container
    card.appendChild(name);
    card.appendChild(image);
    card.appendChild(desc);

    // Append card to main container
    mainContainer.appendChild(card);
}
