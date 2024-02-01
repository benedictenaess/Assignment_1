//BUTTONS
const homeButton = document.querySelector('.home-button');
const filmButton = document.querySelector('.film-button');
const peopleButton = document.querySelector('.people-button');
const planetButton = document.querySelector('.planets-button');
const vehicleButton = document.querySelector('.vehicles-button');

const originalWindow = window;

if (homeButton){
	homeButton.addEventListener('click', () => {
		originalWindow.location.href = '/index.html';
		window.close();
	})
}

if(filmButton) {
	filmButton.addEventListener('click', () => {
		window.open('/html/film.html', '_blank');
	})
}

if (peopleButton){
	peopleButton.addEventListener('click', () => {
		window.open('/html/people.html', '_blank');
	})
}

if(planetButton){
	planetButton.addEventListener('click', () => {
		window.open('/html/planet.html', '_blank');
	})
}

if(vehicleButton){
	vehicleButton.addEventListener('click', () => {
		window.open('/html/vehicle.html', '_blank');
	})
}

//PRINT FUNCTION
function printInfo (img, first, second, third, fourth, fifth, targetElement) {
	//creating elements
	const mainList = document.createElement('li');
	const image = document.createElement('img');
	const item1 = document.createElement('div');
	const item2 = document.createElement('div');
	const item3 = document.createElement('div');
	const item4 = document.createElement('div');
	const item5 = document.createElement('div');

	//classes
	mainList.classList.add('main-cards');
	image.classList.add('properties-img');

	//appending
	mainList.append(image, item1, item2, item3, item4, item5);
	targetElement.append(mainList);

	//content
	image.src = img;
	item1.textContent = first;
	item2.textContent = second;
	item3.textContent = third;
	item4.textContent = fourth;
	item5.textContent = fifth;
}