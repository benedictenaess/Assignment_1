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