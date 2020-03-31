console.log("Hello from src/index.js!");

const cards = document.querySelectorAll('.card');
// console.log(cards); // will return a NodeList, not an array, but you can iterate over it!


// 'blur' event example:
const driverInput = document.querySelector('#driver-name');
driverInput.addEventListener('blur', (event) => {
  if (event.currentTarget.value === ""){
    alert('Por favor, digite um nome!');
  }
})

// Button that "adds" a new driver

// Button that hides all the drivers
// #1 find element that we will listen to
const hideButton = document.querySelector('#hide');
// #2 Define callback function
const hideDrivers = () => {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => card.classList.toggle("noshow"));
}
// #3 Add an event listener with hideDrivers as callback
hideButton.addEventListener('click', hideDrivers );


// Mouse over/ Mouse Out effect
// #1 Select all the cards:
const driverCards = document.querySelectorAll('.card');
// #2 add the event listeners on each cards
driverCards.forEach((card) => card.addEventListener('mouseover', (e) => {
  e.currentTarget.querySelector('.team').classList.toggle('noshow');
}))

driverCards.forEach((card) => card.addEventListener('mouseout', (e) => {
  e.currentTarget.querySelector('.team').classList.toggle('noshow');
}))



