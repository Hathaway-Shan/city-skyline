// import needed modules

// state
const city = {
    skyline: 'Sunny City'
    background: 'Neutral'
    name: 'New City'
    slogan: []
}


//city inputs section root element
const inputSection = document.getElementById('image-select');
//inputSection children can be querySelected from root element 
const nameInput = inputSection.querySelector('input');
const sloganInput = inputSection.querySelector('textarea');
const shareButton = inputSection.querySelector('button');
//children that share a class can be entered into an array
const [citySelect, themeSelect] = inputSection.querySelector('select');
//add event listeners to define undefined constants

//city image builder root element
const displaySection = document.getElementById('image-display');
//displaySection children
const cityName = displaySection.querySelector('h2');
const cityImage = displaySection.querySelector('img');
const citySlogan = displaySection.querySelector('p');

nameInput.addEventListener('input', () => {

});
sloganInput.addEventListener('input', () => {

});
citySelect.addEventListener('select', () => {

});
themeSelect.addEventListener('select', () => {

});
shareButton.addEventListener('click', () => {

});

function cityDisplay() {
    city.name = cityName.value;
    city.skyline = cityImage.value;
    city.slogan = citySlogan.value;
}

// nameInput.value = city.name;
// sloganInput.value = city.slogan;
// themeSelect.value = city.theme;
// citySelect.value = city.skyline;

// function newCity () {
    

// }