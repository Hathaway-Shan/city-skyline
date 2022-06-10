// import needed modules

// state
function getDefaultCity() {
    let city = {
        skyline: 'city-sun',
        background: 'neutral-back',
        name: 'New City',
        slogan: '',
    };
    return city;
}

let city = getDefaultCity();




//city inputs section root element
const inputSection = document.getElementById('input-selection');
//inputSection children can be querySelected from root element 
const nameInput = inputSection.querySelector('input');
const sloganInput = inputSection.querySelector('textarea');
const backgroundDisplay = document.getElementById('image-background-display')
// const shareButton = inputSection.querySelector('button');

//children that share a class can be entered into an array
const [citySelect, backgroundSelect] = inputSection.querySelectorAll('select');
//add event listeners to define undefined constants
const [cityImage, backgroundImage] = backgroundDisplay.querySelectorAll('img');
//displaySection children
let cityName = backgroundDisplay.querySelector('h2');
// let cityImage = backgroundDisplay.querySelector('img');
let citySlogan = backgroundDisplay.querySelector('p');
// let backgroundImage = document.getElementsByClassName('back-image');

nameInput.addEventListener('input', () => {
    city.name = nameInput.value;
    newCity();
});
sloganInput.addEventListener('input', () => {
    city.slogan = sloganInput.value;
    newCity();
});
citySelect.addEventListener('change', () => {
    console.log(citySelect.value);
    city.skyline = citySelect.value;
    newCity();
    
});
backgroundSelect.addEventListener('change', () => {
    city.background = backgroundSelect.value;
    newCity();
});
// push function for button under construction please be patient
// shareButton.addEventListener('click', () => {

// });

function newCity() {
    //clears previous state
    console.log(city.skyline);
    console.log(city.background);
    //city.skyline holds initial value from object
    backgroundDisplay.classList.value = '';
    //displays new selections and inputs
    cityName.textContent = city.name;
    citySlogan.textContent = city.slogan;
    //use backticks for images
    backgroundImage.src = `./assets/${city.background}.png`;
    cityImage.src = `./assets/${city.skyline}.png`;
    // backgroundDisplay.classList.add(city.background);
    
}

function displayCity() {
    city.name = cityName.value;
    city.skyline = cityImage.value;
    city.slogan = citySlogan.value;
}
//
// nameInput.value = city.name;
// sloganInput.value = city.slogan;
// themeSelect.value = city.theme;
// citySelect.value = city.skyline;
    

// }