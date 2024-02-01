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

//FETCH API
const fetchFilms = async () => {
	try {
		const response = await fetch('https://swapi.dev/api/films/');
		const result = await response.json();
		renderFilms(result.results);
	} catch (error) {
		console.log('there is an error', error);
	}
}

fetchFilms();

function renderFilms (films) {
	const filmUl = document.querySelector('.film-ul');
	const imgArrayFilms = ['../assets/film1.jpg', '../assets/film2.jpg', '../assets/film3.jpg', '../assets/film4.jpg', '../assets/film5.jpg', '../assets/film6.jpg'];
	films.forEach((film, index) => {
		const imgIndex = index % imgArrayFilms.length;
		const img = imgArrayFilms[imgIndex];
		printInfo(img, `Title: ${film.title}`, `Episode ID: ${film.episode_id}`, `Director: ${film.director}`, `Producer: ${film.producer}`, `Release date: ${film.release_date}`, filmUl);
	});
}

const fetchPeople = async () => {
	try {
		const response = await fetch('https://swapi.dev/api/people/');
		const result = await response.json();
		renderPeople(result.results);
	} catch (error) {
		console.log('there is an error', error);
	}
}
fetchPeople();


function renderPeople (people) {
	const peopleUl = document.querySelector('.people-ul');
	const imgArrayPeople = ['../assets/people1.jpg', '../assets/people2.jpg', '../assets/people3.jpg', '../assets/people4.jpg', '../assets/people5.jpg', '../assets/people6.jpg'];
	for(let i = 0; i < 6; i++){
		const img = imgArrayPeople[i];
		console.log(img);
		printInfo(img, `Name: ${people[i].name}`, `Mass: ${people[i].mass}`, `Gender: ${people[i].gender}`, `Height: ${people[i].height}`, `Eye color: ${people[i].eye_color}`, peopleUl);
	}
}

const fetchPlanets = async () => {
	try {
		const response = await fetch('https://swapi.dev/api/planets/');
		const result = await response.json();
		renderPlanets(result.results);
	} catch (error) {
		console.log('there is an error', error);
	}
}
fetchPlanets();


function renderPlanets (planets) {
	const planetUl = document.querySelector('.planet-ul');
	const imgArrayPlanets = ['../assets/planet1.jpg', '../assets/planet2.jpg', '../assets/planet3.jpg', '../assets/planet4.jpg', '../assets/planet5.jpg', '../assets/planet6.jpg'];
	for(let i = 0; i < 6; i++){
		const img = imgArrayPlanets[i];
		printInfo(img, `Name: ${planets[i].name}`, `Terrain: ${planets[i].terrain}`, `Climate: ${planets[i].climate}`, `Population: ${planets[i].population}`, `Orbitual period: ${planets[i].orbital_period}`, planetUl);
	}
}

const fetchVehicles = async () => {
	try {
		const response = await fetch('https://swapi.dev/api/vehicles/');
		const result = await response.json();
		renderVehicles(result.results)
	} catch (error) {
		console.log('There is an error', error);
	}
}
fetchVehicles();

function renderVehicles (vehicle) {
	const vehicleUl = document.querySelector('.vehicles-ul');
	const imgArrayVehicles = ['../assets/vehicle1.jpg', '../assets/vehicle2.jpg', '../assets/vehivle3.jpg', '../assets/vehicle4.jpg', '../assets/vehicle5.jpg', '../assets/vehicle6.jpg'];
	for(let i = 0; i < 6; i++){
		const img = imgArrayVehicles[i];
		printInfo(img, `Name: ${vehicle[i].name}`, `Crew: ${vehicle[i].crew}`, `Model: ${vehicle[i].model}`, `Manufacturer: ${vehicle[i].manufacturer}`, `Length: ${vehicle[i].length}`, vehicleUl);
	}
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