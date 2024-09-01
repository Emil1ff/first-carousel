let imgData = [
    { 
        image: "img/images (1).jpg", 
        id: 1 
    },
    { 
        image: 'img/images (2).jpg', 
        id: 2 
    },
    { 
        image: 'img/images (3).jpg', 
        id: 3 
    },
    { 
        image: 'img/images (4).jpg', 
        id: 4 
    },
    { 
        image: 'img/images (5).jpg', 
        id: 5 
    },
    { 
        image: 'img/images (6).jpg', 
        id: 6 
    },
    { 
        image: 'img/images (7).jpg', 
        id: 7 
    }
];

let leftIndex = 0;
let currentIndex = 1;
let rightIndex = 2;

const leftName = document.getElementById('left-name');
const rightName = document.getElementById("right-name")
const currentName = document.getElementById('current-name')

const next = document.getElementById('next');
const prev = document.getElementById('prev');

const circle1 = document.getElementById('circle1');
const circle2 = document.getElementById('circle2');
const circle3 = document.getElementById('circle3');
const circle4 = document.getElementById('circle4');
const circle5 = document.getElementById('circle5');
const circle6 = document.getElementById('circle6');
const circle7 = document.getElementById('circle7');

const leftImg = document.getElementById('left-img');
const img = document.getElementById('current');
const rightImg = document.getElementById('right-img');


function updateImage() {
    leftImg.setAttribute('src', imgData[leftIndex].image);
    img.setAttribute('src', imgData[currentIndex].image);
    rightImg.setAttribute('src', imgData[rightIndex].image);

    leftName.textContent = `${imgData[leftIndex].id}-ci sekil`;
    currentName.textContent = `${imgData[currentIndex].id}-ci sekil`;
    rightName.textContent = `${imgData[rightIndex].id}-ci sekil`;
}

next.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % imgData.length;
    leftIndex = (leftIndex + 1) % imgData.length;
    rightIndex = (rightIndex + 1) % imgData.length;
    updateImage();
});

prev.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + imgData.length) % imgData.length;
    leftIndex = (leftIndex - 1 + imgData.length) % imgData.length;
    rightIndex = (rightIndex - 1 + imgData.length) % imgData.length;
    updateImage();
});

circle1.addEventListener('click', () => {
    currentIndex = 0;
    leftIndex = 6;
    rightIndex = 1;
    updateImage();
});

circle2.addEventListener('click', () => {
    currentIndex = 1;
    leftIndex = 0;
    rightIndex = 2;
    updateImage();
});

circle3.addEventListener('click', () => {
    currentIndex = 2;
    leftIndex = 1;
    rightIndex = 3;
    updateImage();
});

circle4.addEventListener('click', () => {
    currentIndex = 3;
    leftIndex = 2;
    rightIndex = 4;
    updateImage();
});

circle5.addEventListener('click', () => {
    currentIndex = 4;
    leftIndex = 3;
    rightIndex = 5;
    updateImage();
});

circle6.addEventListener('click', () => {
    currentIndex = 5;
    leftIndex = 4;
    rightIndex = 6;
    updateImage();
});

circle7.addEventListener('click', () => {
    currentIndex = 6;
    leftIndex = 5;
    rightIndex = 0;
    updateImage();
});

leftImg.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + imgData.length) % imgData.length;
    leftIndex = (leftIndex - 1 + imgData.length) % imgData.length;
    rightIndex = (rightIndex - 1 + imgData.length) % imgData.length;
    updateImage();
})

rightImg.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % imgData.length;
    leftIndex = (leftIndex + 1) % imgData.length;
    rightIndex = (rightIndex + 1) % imgData.length;
    updateImage();
})


updateImage();