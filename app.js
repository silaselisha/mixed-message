
// Arrays containing space related information
const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Urenus', 'Neptune'];
const spaceCraft = ['Biconic Space Vehicle', 'CST-100 Starliner',  'Dragon 2', 'Dream Chaser Space System'];
const spaceCompany = ['SpaceX', 'Blue Origin', 'Boeing', 'Sierra Nevada Corporation'];

// Functionality to randomly select planets on the milky way galaxy
const planetSelector = (planetsArr) => {
    let planet;
    for(let i = 0; i < planetsArr.length; i++){
        planet = planetsArr[Math.floor(Math.random() * i)];
    }
    return planet;
}

// Functionality to randomly select a spacecraft
const spaceCraftSelector = (spaceCraft) => {
    let spaceShip;
    for(let i = 0; i < spaceCraft.length; i++){
        spaceShip = spaceCraft[Math.floor(Math.random() * i)];
    }
    return spaceShip;
}

// Functionality to randomly select a spacecraft company;
const spaceCompanySelector = (spaceCompanyArr) => {
    let company;
    for(let i = 0; i < spaceCompanyArr.length; i++){
        company = spaceCompanyArr[Math.floor(Math.random() * i)];
    }
    return company;
}

// Functionality to randomly create space exploration messages.
const mixedMessage = () => {
    let planet = planetSelector(planets);
    let company = spaceCompanySelector(spaceCompany);
    let spaceShip = spaceCraftSelector(spaceCraft);

    let message = '';

    if(planet === 'Earth'){
        message = `I am ${planet} :), on me ${spaceShip} was built by the influence of NASA`;
    }else if((spaceShip === 'Dragon 2' && company === 'SpaceX') && (planet === 'Mars' || planet === 'Venus' || planet === 'Saturn')){
        message = `I am ${planet} :). ${company} with its' high tech ${spaceShip} chose me for exploration.`;
        
    }else if((spaceShip === 'CST-100 Starliner' && company === 'Boeing') && (planet === 'Mercury' || planet === 'Jupiter' || planet === 'Venus')){
        message = `I am ${planet} :). ${company} with its' high tech ${spaceShip} chose me for exploration.`;
       
    }else if((spaceShip === 'Biconic Space Vehicle' && company === 'Blue Origin') && (planet === 'Saturn' || planet === 'Mars' || planet === 'Mercury')){
        message = `I am ${planet} :). ${company} with its' high tech ${spaceShip} chose me for exploration.`;
       
    }else if((spaceShip === 'Dream Chaser Space System' && company === 'Sierra Nevada Corporation') && (planet === 'Neptune' || planet === 'Urenus' || planet === 'Jupiter')){
        message = `I am ${planet} :). ${company} with its' high tech ${spaceShip} chose me for exploration.`;
       
    }
    else{
        message = `"The Universe is under no obligation to make sense to you..."`;
    }
    return message;
    // console.log(`${planet} :) I was selected for ${company} and its' ${spaceShip} for exploration`);
}

console.log(mixedMessage());