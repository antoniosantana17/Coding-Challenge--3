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

}