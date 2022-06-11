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
//Empty array for the share button to push to
let cities = [];

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
// let citySlogan = backgroundDisplay.querySelector('ul');

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
    sloganSum();
//add created object to array
    cities.push(city);
//display new cities list
    displayCities();
//reset the original city display
    city = newCity();
//reset display functions 
    newCity();
});

function sloganSum() {
    const slogan = sloganInput.value;
    if (!slogan) {
        return;
    }
} 


function newCity() {
//clears previous state
    backgroundDisplay.classList.value = '';
//displays new selections and inputs
    cityName.textContent = city.name;
    // citySlogan.textContent = city.slogan;
//use backticks for images
    backgroundImage.src = `./assets/${city.background}.png`;
    cityImage.src = `./assets/${city.skyline}.png`;
    backgroundDisplay.classList.add(city.theme);
    
}

function resetCity() {
    cityName.value = city.name;
    cityImage.value = city.skyline;
    city.Slogan = city.slogan;
}

const displaySection = document.getElementById('slogan-text-area');
const list = displaySection.querySelector('ul');

function displayCities() {
//
    list.innerHTML = '';
//iterate through the state of the object
    for (const city of cities) {
//creates a new list 
        const li = document.createElement('li');
//create new spans that read the properties of a new city
        const spacer = ': ';
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

    

// }