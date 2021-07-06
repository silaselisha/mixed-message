
// Arrays containing space related information
const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Urenus', 'Neptune'];
const spaceCraft = ['Biconic Space Vehicle', 'CST-100 Starliner',  'Dragon 2', 'Dream Chaser Space System'];
const spaceCompany = ['SpaceX', 'Blue Origin', 'Boeing', 'Sierra Nevada Corporation', 'NASA'];

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

