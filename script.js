// Write your JavaScript code here!


window.addEventListener("load", function() {
    let myFrom = this.document.querySelector('form');
    myFrom.addEventListener('submit', function(event){
        event.preventDefault();
        let myList = document.getElementById("faultyItems");
        let pilotName = document.getElementById("pilotName").value;
        let copilotName = document.getElementById("copilotName").value;
        let fuel = document.getElementById("fuelLevel").value;
        let cargo = document.getElementById("cargoMass").value;
        fuel = Number(fuel);
        cargo = Number(cargo);
        formSubmission(document, myList, pilotName, copilotName, fuel, cargo);
    })
    let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let myDestination = pickPlanet(listedPlanets);
        let planetName = myDestination.name ;
        let planetDiameter = myDestination.diameter;
        let planetStar = myDestination.star ;
        let planetDistance = myDestination.distance ;
        let planetMoons = myDestination.moons;
        let planetImage = myDestination.image;

        addDestinationInfo(document, planetName, planetDiameter, planetStar, planetDistance, planetMoons, planetImage);
    })
    
});
//diameter, star, distance, moons, imageUrl