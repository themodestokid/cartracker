import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

// WheeledVehicle class that extends Vehicle class
class WheeledVehicle extends Vehicle {
    // Declare properties of the WheeledVehicle class
    vin: string;
    color: string;
    make: string;
    model: string;
    year: number;
    weight: number;
    topSpeed: number;
    wheels: Wheel[];
  
    // Constructor for the WheeledVehicle class
    constructor(
      vin: string,
      color: string,
      make: string,
      model: string,
      year: number,
      weight: number,
      topSpeed: number,
      nWheels: number,
      wheels: Wheel[]
    ) {
      // Call the constructor of the parent class, Vehicle
      super();
  
      // Initialize properties of the Car class
      this.vin = vin;
      this.color = color;
      this.make = make;
      this.model = model;
      this.year = year;
      this.weight = weight;
      this.topSpeed = topSpeed;
      
      if (wheels.length == nWheels) {
        this.wheels = wheels;
      }
      else {
        this.wheels = [];
        for (let i: number = 0; i < nWheels; ++i) {
          this.wheels.push(new Wheel())
        }
      }
    }
  
    // Override the printDetails method from the Vehicle class
    override printDetails(): void {
      // Call the printDetails method of the parent class, Vehicle
      super.printDetails();
  
      // Print details of the Car class
      console.log(`VIN: ${this.vin}`);
      console.log(`Color: ${this.color}`);
      console.log(`Make: ${this.make}`);
      console.log(`Model: ${this.model}`);
      console.log(`Year: ${this.year}`);
      console.log(`Weight: ${this.weight} lbs`);
      console.log(`Top Speed: ${this.topSpeed} mph`);
  
      // Print details of the wheels
      for (let i: number = 0; i < this.wheels.length; ++i) {
        console.log(
            `Wheel ${i + 1}: ${this.wheels[i].getDiameter} inch with a ${this.wheels[i].getTireBrand} tire`
        );
      }
    }
  }
  
  // Export the WheeledVehicle class as the default export
  export default WheeledVehicle;
  