// U41684674

// Car Class Constructor
class Car {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

// Accelerate Method
accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    }
    
// Brake Method
brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
   }

// Create and Test Car Objects
const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);

car1.accelerate(); // BMW is going at 130 km/h
car1.brake();     // BMW is going at 125 km/h
car1.accelerate(); // BMW is going at 135 km/h
car1.brake(); // BMW is going at 130 km/h

car2.accelerate(); // Mercedes is going at 105 km/h
car2.brake(); // Mercedes is going at 100 km/h
car2.accelerate(); // Mercedes is going at 110 km/h
car2.brake(); // Mercedes is going at 105 km/h
   
}