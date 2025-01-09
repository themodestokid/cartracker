// Importing Vehicle and Wheel classes
import WheeledVehicle from './WheeledVehicle.js';
import Wheel from './Wheel.js';

// TODO: The Motorbike class should extend the Vehicle class
class Motorbike extends WheeledVehicle {
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[]
  ) {
    // Call the constructor of the parent class, Vehicle
    super(vin, color, make, model, year, weight, topSpeed, 2, wheels);
  }

  wheelie() { console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`); }

}

// Export the Motorbike class as the default export
export default Motorbike;
