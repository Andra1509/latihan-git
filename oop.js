// class Car {
//     constructor(brand, factory) {
//         this.brand = brand
//         this.factory = factory
//         this.sound = "honk ! honk!vroomvroom"
//     }
// }
// var innovam = new Car("Samsung", "J2 prime")
// console.log(innovam)


// class Car {
//     constructor(brand) {
//         this.carname = brand;
//     }
//     present() {
//         return "I have a " + this.carname;
//     }
// }
// mycar = new Car("ford");
// console.log(mycar.present())//


class Car {
    constructor(brand) {
        this.carname = brand;
    }
    present(*) {
        return * + ", I have a " + this.carname;
    }
}
mycar = new Car("Ford");
console.log(mycar.present("Hello"))///