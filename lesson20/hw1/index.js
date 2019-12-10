class Order {

    constructor(price, city, type) {

        this.id = `${Math.random()}`;
        this.dateCreated = new Date();
        this.isConfirmed = false;
        this.dateConfimed = null;
        this.price = price;
        this.city = city;
        this.type = type;

    }
    checkPrice() {

        if (this.price < 1000) return false;
        return true;

    }
    confirmOrder() {

        this.isConfirmed = true;
        this.dateConfimed = new Date();

    }
    isValidType() {
        if (this.type == 'Buy' && this.type == 'Sell') return true;
        return false;
    }
}