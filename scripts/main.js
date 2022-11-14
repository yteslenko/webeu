const myImage = document.querySelector('img');

myImage.onclick = () => {
    const mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/adc1.jpg') {
        myImage.setAttribute('src', 'images/adc3.jpg');
    } else {
        myImage.setAttribute('src', 'images/adc1.jpg');
    }
}