/* eslint-disable no-console */
// import needed modules

// state
function getDefaultCity() {
    let city = {
        skyline: 'city-sun',
        background: 'sunny-back',
        name: 'New City',
        slogan: [],
        theme: 'neutral'
    };
    return city;
}
//set a new variable city equal to getDefaultCity function
let city = getDefaultCity();
//Empty array for the share button to push toward
let cities = [];
let length = cities.length;

const cityCount = backgroundDisplay.querySelector('span');


//city inputs section root element
const inputSection = document.getElementById('input-selection');
//inputSection children can be querySelected from root element 
const nameInput = inputSection.querySelector('input');
const sloganInput = inputSection.querySelector('textarea');
const shareButton = inputSection.querySelector('button');

//children that share a class can be entered into an array to call them in order from left to right
const backgroundDisplay = document.getElementById('image-background-display');
const [citySelect, backgroundSelect] = inputSection.querySelectorAll('select');
const [cityImage, backgroundImage] = backgroundDisplay.querySelectorAll('img');
//displaySection children
let cityName = backgroundDisplay.querySelector('h2');

//eventListener section
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

shareButton.addEventListener('click', () => {
//
    const slogan = sloganInput.value;
    if (!slogan) {
        return;
    }
    displayCities();
    newCity();
});

const pushButton = backgroundDisplay.querySelector('button');

pushButton.addEventListener('click', () => {
//add created object to array
    cities.push(city);
//display new cities list
    displayCities();
//reset the original city display and text values
    city = getDefaultCity();
    resetCityText();
    newCity();
});


function newCity() {
//clears previous state
    backgroundDisplay.classList.value = '';
//displays new selections and inputs
    cityName.textContent = city.name;
//use backticks for images
    backgroundImage.src = `./assets/${city.background}.png`;
    cityImage.src = `./assets/${city.skyline}.png`;
//there is not currently a select for this but it breaks the background without this line
    backgroundDisplay.classList.add(city.theme);
    
}

//resets the text boxes to empty strings
function resetCityText() {
    nameInput.value = '';
    sloganInput.value = '';
}

//creates a constant for our blank <ul> in the html
const displaySection = document.getElementById('slogan-text-area');
const list = displaySection.querySelector('ul');

function displayCities() {
//set the HTML content of our <ul> in list to an empty string
    list.innerHTML = '';
//iterate through the state of the object
    for (const city of cities) {
//creates a new list item
        const li = document.createElement('li');
// this is just here to make the city name and slogan display with a :space between them
        const spacer = ': ';
//create new spans that read the properties of the created new city
        const cityName = document.createElement('span');
        cityName.textContent = city.name; 
        const citySlogan = document.createElement('span');
        citySlogan.textContent = city.slogan;
//add new spans to new li element
        li.append(cityName, spacer, citySlogan);
//add new item to list li
        list.append(li);
    } 
}
// page load actions are taken care of by the scope of line 16
