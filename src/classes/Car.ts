// Importing Vehicle and Wheel classes
import WheeledVehicle from './WheeledVehicle.js';
import Wheel from './Wheel.js';

// Car class that extends Vehicle class
class Car extends WheeledVehicle {
   // Constructor for the Car class
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
    super(vin, color, make, model, year, weight, topSpeed, 4, wheels);
  }

}

// Export the Car class as the default export
export default Car;
