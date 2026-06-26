// let nama = "john"

// if(true)
// {
//     let nama = "doe"
//     console.log(nama)
// }

// console.log(nama)

//
// function tampilkanNama(a){
//     console.log("halo,"+ a)

// }
// tampilkanNama("huda")

// var tampilkanNama = function(a){
//     console.log("halo, "+ a)
// }
// tampilkanNama("huda")

// const tampilkanNama = (a) => {
//     console.log("halo, "+ a)
// }
// tampilkanNama("huda")

// const hitungpersegi = (sisi) => {
//     const luas = (s) => s * s
//     const keliling = (s) => 4 * s
//     console.log("luas persegi =", luas(sisi))
//     console.log("keliling persegi =", keliling(sisi))
// }

// hitungpersegi(6)

// const HitungLuasPersegi = (sisi) => {
//     var sisi = 6

//     const luas = (s) => {
//         return s * s 
//     }
//     const keliling = (s) => {
//         return 4 * s
//     }
//     console.log("Luas persegi: ", luas(sisi))
//     console.log("keliling keliling: ", keliling(sisi))
// }
// HitungLuasPersegi(6)


// let nama = "tri agil pribadi"
// console.log("hallo selamat datang.",nama)
// console.log("hallo selamat datang. "+ nama)

// console.log("hallo, "+nama +"!. selamat datang.")

// console.log(`hallo, $(nama). selamat datang!`)

// text1 = "hallo"
// text2 = "selamat"
// text3 = "datang"
 
// console.log("text1+")

//
// let nama = "Andra Ramadhani Widodo"
// let person = {
//     nama : nama,
//     umur : 17 
// }
// console.log(person)

// //destructering array
// let number = [1,5,6,7,8]

// let num1 = number[0]
// let num2 = number[1]
// let num3 = number[2]
// let num4 = number[3]
// let num5 = number[4]

// let [num1, num2, num3, num4, lastnum] = [1,5,6,7,8]

// console.log(lastnum)

//destructering object

// let names = "Andra Ramadhani Widodo"
//  let person = {
//      nama : names,
//      umur : 17,
//      tinggi : 174
//  }

// //  let namaperson = person.nama
// //  let umurperson = person.umur
// //  let tinggiperson = person.tinggi
// let {nama, umur, tinggi} = person
//  console.log(person)


 //rest parameter array
//  let [num1, num2, num3, num4, lastnum] = [1,5,6,7,8]

//  let fotballers = ["messi", "ronaldo", "mbappe", "halland", "neymar"]
//  let [foot1, foot2,...restfoot] = fotballers

//  console.log(foot2)
//  console.log(foot1)
//  console.log(restfoot)

//  rest parameter array
//   let names = "Andra Ramadhani Widodo"
//   let person = {
//       nama : names,
//       umur : 17,
//       tinggi : 173
//   }

//       let {nama, ...restperson} = person
//       console.log(nama)
//       console.log(restperson)

    //spread operator

    // let buah = ["strauberry", "mangga", "apel"]

    // buah.unshift("mangga")
    // buah.push('durian')
    // console.log(buah)
      
    // buah = ["mangga", ...buah, "jeruk",]
    // console.log(buah)

    let botol = {
        merk : "aqua",
        ukuran : "500liter",
        harga : 5000
    }
    
    // botol.warna = "biru"
    // botol.kemasan = "plastik"
    // botol.bentuk = "bulat"
     
    botol = {...botol, warna: "biru", kemasan: "plastik", bentuk: "bulat"}
    console.log(botol)