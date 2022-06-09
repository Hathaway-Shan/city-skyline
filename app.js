// import needed modules

// state
// resets the base page load



//city inputs section root element
const inputSection = document.getElementById('image-select');
//inputSection children can be querySelected from root element 
const nameInput = inputSection.querySelector('input');
const sloganInput = inputSection.querySelector('textarea');
const shareButton = inputSection.querySelector('button');
//children that share a class can be entered into an array
const [citySelect, themeSelect] = inputSection.querySelector('select');
//add event listeners to define undefined constants
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


//city image builder root element
const displaySection = document.getElementById('image-display');
//displaySection children
const cityName = displaySection.querySelector('h2');
const cityImage = displaySection.querySelector('img');
const citySlogan = displaySection.querySelector('p');

// function newCity () {
//     cityDisplay.classList.value = '';
//     cityDisplay.classList.add(city.background);
// }