/**
 * @param {import("../typings/car").Car} car
 */
function printCarDetails(car) {
  console.log(`Make: ${car.make}, Model: ${car.model}, Year: ${car.year}`);
}

/**
 * @param {number} numberOfCars
 * @returns {import("../typings/car").Car[]}
 */
function createCars(numberOfCars) {
  const cars = [];

  for (let i = 0; i < numberOfCars; i++) {
    cars.push({
      make: "Honda",
      model: "Civic",
      year: 2020,
    });
  }

  return cars;
}

/**
 * @param {import("../typings/car").Car} car
 * @returns {import("../typings/car").Car} car with a new make.
 */
function changeCarMake(car) {
  return {
    ...car,
    make: "Fiat",
  };
}

// create new function based on changeCarMake but use arrow function
// generate jsdoc
/**
 * @param {import("../typings/car").Car} car
 * @returns {import("../typings/car").Car} car with a new make.
 */
const changeCarMake2 = (car) => {
  return {
    ...car,
    make: "Fiat",
  };
};
