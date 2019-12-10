class Vechicle {

    constructor(name, numberOfWheels) {

        this.name = name;
        this.numberOfWheels = numberOfWheels;
    }

    move() {

        console.log(`${this.name} is moving `);

    }

    stope() {

        console.log(`${this.name} stopped`);

    }
}

class Ship extends Vechicle {

    constructor(name, numberOfWheels, maxSpeed) {
        super(name, numberOfWheels);
        this.maxSpeed = maxSpeed;
    }

    move() {

        console.log(`${this.name} lifting anchor up`);
        super.move();
    }

    stop() {

        console.log(`${this.name} lifting anchor down`);
        super.stop();
    }
}

export {

    Vechicle,
    ship
}