const vehicle = {
    move() {
        console.log(`${this.name} is moving`);
    },
    stop() {
        console.log(`${this.name} stopped`);
    },
};

const ship = {
    name: 'Argo',
    startMachine() {
        console.log(`${this.name} lifting anchor up`);
        ship.move();
    },
    stopMachine() {
        ship.stop(),
            console.log(`${this.name} lifting anchor down`);
    },
};

Object.setPrototypeOf(ship, vehicle);


export {
    vehicle,
    ship
};