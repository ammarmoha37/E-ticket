//button 
var btn = document.getElementById('btn');
var flight = document.getElementById('search-flight');
var bus = document.getElementById('search-bus');


function leftClick() {
	btn.style.left = '0';
	flight.style.display = 'block';
	bus.style.display = 'none';
}

function rightClick() {
	btn.style.left = '140px';
	flight.style.display = 'none';
	bus.style.display = 'block';
}

function roundTrip() {
	
}