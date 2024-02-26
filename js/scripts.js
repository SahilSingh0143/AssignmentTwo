const customNumberInput = document.getElementById('customNumber');
const custColorButton = document.querySelector('.custColor');
const randColorButton = document.querySelector('.randColor');
const imageSelect = document.getElementById('imageSelect');
const images = document.getElementById('images');

const imageOptions = [
    "img1.jpg",
    "img2.jpg",
    "img3.jpg",
    "img4.jpg",
    "img5.jpg"
    // Add more image file names here
];

function changeCustomColor() {
    const customNumber = parseInt(customNumberInput.value);
    if (customNumber >= 0 && customNumber <= 100) {
        const color = getColor(customNumber);
        document.body.style.backgroundColor = color;
        document.getElementById('myStudentId').textContent = "Student ID: 200553813";
    } else {
        alert("Please enter a number between 0 and 100.");
    }
}

function changeRandomColor() {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    const color = getColor(randomNum);
    document.body.style.backgroundColor = color;
}

function getColor(number) {
    if (number < 0 || number > 100) return 'red';
    else if (number >= 0 && number <= 20) return 'green';
    else if (number > 20 && number <= 40) return 'blue';
    else if (number > 40 && number <= 60) return 'orange';
    else if (number > 60 && number <= 80) return 'purple';
    else if (number > 80 && number <= 100) return 'yellow';
}

function addList() {
    for (let i = 0; i < imageOptions.length; i++) {
        const option = document.createElement('option');
        option.textContent = imageOptions[i];
        imageSelect.appendChild(option);
    }
}

function changeImage() {
    const selectedIndex = imageSelect.selectedIndex;
    if (selectedIndex !== 0) {
        const selectedImage = imageOptions[selectedIndex - 1];
        images.src = 'img/' + selectedImage; // assuming images are located in the img folder
    } else {
        images.src = '';
    }
}

custColorButton.addEventListener('click', changeCustomColor);
randColorButton.addEventListener('click', changeRandomColor);
imageSelect.addEventListener('change', changeImage);

addList();
