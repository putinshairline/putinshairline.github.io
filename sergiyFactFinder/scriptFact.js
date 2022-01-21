function fact1(){
	
	document.querySelector('#fact').innerHTML = "The worlds first speeding ticket was issued in 1902 for a scandalous 45mph! The car caught was a Morris Oxford Bullnose depicted below. <br><br><br> <img  src='images/45mph.jpg' width='400px' height='auto'>";
	
	
}
function fact2(){
	
	document.querySelector('#fact').innerHTML = "A modern formula one car can drive upside down in a tunnel at the speed of 120mph <br><br><br> <img src='images/f1.jpg' width='400px' height='auto'>";
	
	
}
function fact3(){
	
	document.querySelector('#fact').innerHTML = "The largest fine ever produced was !!1,000,000!! euros, since speeding fines in sweden are proportional to yearly income. <br><br><br> <img src='images/ticket.jpg' width='400px' height='auto'>";
	
	
}
function fact4(){
	
	document.querySelector('#fact').innerHTML = "The worlds fastest pit-stop ever recorded was an astonishing 1.82 seconds, by Ferrari's f1 team comprised of 16 people. <br><br><br> <img src='images/pitstop.jpg' width='400px' height='auto'>";
	
	
}
function fact5(){
	
	document.querySelector('#fact').innerHTML = "A Top Fuel Dragster can consume 11 gallons of fuel in a quick 3.5 seconds down the quarter mile. 10,000 horsepower doesnt come from nowhere! <br><br><br> <img src='images/topfuel.jpg' width='400px' height='auto'>";
	
	
}

function dark(){
	https://coolors.co/000000-19294d-55776c-0a1b1f-738496-b86800
	document.querySelector('html').style.backgroundColor = "#0A1B1F";
	document.querySelector('section').style.backgroundColor = "#334841";
	document.querySelector('section').style.color = "#FFA630";
	document.querySelector('main').style.backgroundColor = "#19294D";
	document.querySelector('html').style.backgroundImage = "";
	
	var but = document.getElementsByTagName('input');
	
	for (var i = 0; i < but.length; i++) { 
		but[i].style.backgroundColor = "#738496";
	}
}


function stupid(){
	https://coolors.co/25291c-d5ffd9-724e91-e54f6d-f8c630-57b8ff
	document.querySelector('html').style.backgroundColor = "#D5FFD9";
	document.querySelector('section').style.backgroundColor = "#724E91";
	document.querySelector('section').style.color = "#E54F6D";
	document.querySelector('main').style.backgroundColor = "#F8C630";
	document.querySelector('html').style.backgroundImage = "url('images/picture.jpg')";
	
	var but = document.getElementsByTagName('input');
	
	for (var i = 0; i < but.length; i++) { 
		but[i].style.backgroundColor = "#57B8FF";
	}
	
}

function dfault(){
	
	document.querySelector('html').style.backgroundColor = "#F5F9AD";
	document.querySelector('section').style.backgroundColor = "beige";
	document.querySelector('section').style.color = "#black";
	document.querySelector('main').style.backgroundColor = "#F5F9AD";
	document.querySelector('html').style.backgroundImage = "";
	
	var but = document.getElementsByTagName('input');
	
	for (var i = 0; i < but.length; i++) { 
		but[i].style.backgroundColor = "beige";
	}
	
}
