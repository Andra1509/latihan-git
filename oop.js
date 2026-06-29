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
// mycar = new Car("Ford");
// console.log(mycar.present())//


// class Car {
//     constructor(brand) {
//         this.carname = brand;
//     }
//     present(x) {
//         return x + ", I have a " + this.carname
//     }
// }
// mycar = new Car("Ford")
// console.log(mycar.present("Hello"))
// mycar = new Car("Bmw")
// console.log(mycar.present("Hello"))


// class Car {
//     constructor(brand) {
//         this.color = brand
//     }
//     get carname() {
//         return this.color
//     }
//     set carname(x) {
//         this.color = x
//     }
// }    
// mycar = new Car("Ford")
// mycar.color = "Black" //
// console.log(mycar) //



class person{
    constructor(nama){
        this._nama = nama
        this._mapel = "Olahraga"
    }
    get personMapel(){
        return this._mapel
    }
    set personMapel(_mapel){
        this._mapel
    }
    berjalan(){
        return "prok prok prok"
    }
}

class School extends person{
    constructor(name){
        super(name)
        this.school = "SMA NEGRI 1 SAMARINDA"
    }

    berjalan(){
        return "prak prak prak"
    }
}


var guru = new School("pak budi")
guru.mapel = "olahraga"
guru.schol = "SMA NEGRI 8 SAMARINDA"
console.log(guru)
console.log(guru.berjalan())

