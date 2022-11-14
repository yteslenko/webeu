const myImage = document.querySelector('img');

myImage.onclick = () => {
    const mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/adc1.jpg') {
        myImage.setAttribute('src', 'images/adc3.jpg');
    } else {
        myImage.setAttribute('src', 'images/adc1.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    const myName = prompt('Please enter your name.');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = `That's cool ADC, ${myName}`;
    }
}

if (localStorage.getItem('name')) {
    setUserName();
} else {
    const storedName = localStorage.getItem('name');
    myHeading.textContent = `That's cool ADC, ${storedName}`
}

myButton.onclick = () => {
    setUserName();
}