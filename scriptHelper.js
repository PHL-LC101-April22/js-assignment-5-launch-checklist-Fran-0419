// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
    document.getElementById('missionTarget').innerHTML =`
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name} </li>
                    <li>Diameter: ${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons} </li>
                </ol>
                <img src="${imageUrl}">
    `;
}

function validateInput(testInput) {
    let numberInput = Number(testInput);
    if(testInput ===""){
        return "Empty";
    }else if(isNaN(numberInput)){
        return "Not a number";
    }else if(isNaN(numberInput) === false){
        return "Is a number";
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotName = pilot;
    let copilotName = copilot;
    let fuel = fuelLevel;
    let cargo = cargoLevel;

    if(validateInput(pilotName) === 'Empty' || validateInput(copilotName) === 'Empty' || validateInput(fuel) === 'Empty' || validateInput(cargo) === 'Empty'){
        alert('All field are required!');
    }else if (validateInput(pilotName) === 'Is a number' || validateInput(copilotName) === 'Is a number' || validateInput(fuel) === 'Not a number' || validateInput(cargo) === 'Not a number'){
        alert("Please enter the rigth data type");
    }else{
        
    //pilotName.innerHTML = "";
        if(fuel < 10000){
            document.getElementById("fuelStatus").innerHTML = "There is not enough fuel for the journey";
            document.getElementById("launchStatus").style.color ="red";
            document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotName} is ready`;
            document.getElementById("copilotStatus").innerHTML = `Pilot ${copilotName} is ready`;
            document.getElementById("faultyItems").style.visibility = "visible";
        }else if(cargo > 10000){
            document.getElementById("cargoStatus").innerHTML = "Shuttle not ready for launch";
            document.getElementById("launchStatus").style.color ="red";
            document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotName} is ready`;
            document.getElementById("copilotStatus").innerHTML = `Pilot ${copilotName} is ready`;
            document.getElementById("faultyItems").style.visibility = "visible";
        }else if((fuel > 10000)){
            document.getElementById("fuelStatus").innerHTML = "There is too much fuel for the journey";
            document.getElementById("launchStatus").style.color ="red";
            document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotName} is ready`;
            document.getElementById("copilotStatus").innerHTML = `Pilot ${copilotName} is ready`;
            document.getElementById("faultyItems").style.visibility = "visible";
        }else if(cargo < 10000){
            document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotName} is ready`;
            document.getElementById("copilotStatus").innerHTML = `Pilot ${copilotName} is ready`;
            document.getElementById("faultyItems").style.visibility = "visible";
        }else{
            document.getElementById("pilotStatus").innerHTML = `Pilot ${pilotName} is ready`;
            document.getElementById("copilotStatus").innerHTML = `Pilot ${copilotName} is ready`;
            document.getElementById("faultyItems").style.visibility = "visible";
        }
    }

}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then( function(response) {
        return response.json();
    });

    return planetsReturned;
}

function pickPlanet(planets) {
    let planet = Math.floor(Math.random() * planets.length);
    let destination = planets[planet];

    return destination;

}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
