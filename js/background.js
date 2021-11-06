const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];

const cosenImage = images[Math.floor(Math.random() * images.length)];

const bgimages = document.createElement("img");

bgimages.src = `img/${cosenImage}`;

document.body.appendChild(bgimages);
