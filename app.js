
// Arrays containing space related information
const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Urenus', 'Neptune'];
const spaceCraft = ['Biconic Space Vehicle', 'CST-100 Starliner',  'Dragon 2', 'Dream Chaser Space System'];
const spaceCompany = ['SpaceX', 'Blue Origin', 'Boeing', 'Sierra Nevada Corporation']

// Functionality to randomly select planets on the milky way galaxy
const planetSelector = (planetsArr) => {
    let planet;
    for(let i = 0; i < planetsArr.length; i++){
        planet = planetsArr[Math.floor(Math.random() * i)];
    }
    return planet;
}
