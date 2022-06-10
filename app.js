// import needed modules

// state
function getDefaultCity() {
    let city = {
        skyline: '',
        background: 'neutral',
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

//displaySection children
let cityName = backgroundDisplay.querySelector('h2');
let cityImage = backgroundDisplay.querySelector('img');
let citySlogan = backgroundDisplay.querySelector('p');
let cityBackground = 

nameInput.addEventListener('input', () => {
    city.name = nameInput.value;
    newCity();
});
sloganInput.addEventListener('input', () => {
    city.slogan = sloganInput.value;
    newCity();
});
citySelect.addEventListener('change', () => {
    
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
    //city.skyline holds initial value from object
    backgroundDisplay.classList.value = '';
    //displays new selections and inputs
    backgroundDisplay.classList.add(city.background);
    cityName.textContent = city.name;
    
    //use backticks for images
    cityImage.src = `./assets/${city.skyline}.png`;
    citySlogan.textContent = city.slogan;
    console.log(cityImage.src);
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