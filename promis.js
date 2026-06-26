// contoh code asynchronous
// var isMomHappy = false;

// promise
// var willNewGetNewPhone = new Promise(
//     function (resolve, reject) {
//         if (isMomHappy) {
//             var phone = {
//                 brand: "Samsung",
//                 color: "black"
//             };
//             resolve(phone); //fulfiled atau janji dipenuhi
//         } else {
//             var reason = new Error('mom is not happy');
//             reject(reason);
//         }
//     }
// );

// function askMom(){
//     willNewGetNewPhone
//     .then(function(fulfiled){
//         console.log(fulfiled)
//     })
//     .catch(function(error){
//         console.log(error.message);
//     });
// }
// askMom()


// contoh promise lainnya
// function periksaDataPasien(nomorIdPasien){
//     var dataPasien = [
//         {id : 1, nama: "John", jenisKelamin : "Laki-Laki"},
//         {id : 2, nama: "Michael", jenisKelamin : "Laki-Laki"},
//         {id : 3, nama: "Sarah", jenisKelamin : "Perempuan"},
//         {id : 4, nama: "Frank", jenisKelamin : "Laki-Laki"},
//     ]
//     return new Promise( function (resolve, reject){
//         var pasien = dataPasien.find(x=> x.id === nomorIdPasien)
//         if (pasien === undefined){
//             reject("data pasien tidak ada")
//         }else {
//             resolve(pasien)
//         }
//     })
// }

// periksaDataPasien(5).then(function(data){
//     console.log(data)
// }).catch(function(err){
//     console.log(err)
// })


// 
// function doAsync(){
//     return new Promise (function (resolve, reject){
//         var check = false
//         if (check){
//             resolve("berhasil")
//         }else{
//             reject("gagal")
//         }
//     })
// }
// async function hello() {
//     try{
//         var result = await doAsync()
//         console.log(result)
//     }catch(err){
//         console.log(err)
//     }
// }
// hello()


// Tugas
function doAsync(nomorIdPasien){
    return new Promise (function (resolve, reject){
        var dataPasien = [
        {id : 1, nama: "John", jenisKelamin : "Laki-Laki"},
        {id : 2, nama: "Michael", jenisKelamin : "Laki-Laki"},
        {id : 3, nama: "Sarah", jenisKelamin : "Perempuan"},
        {id : 4, nama: "Frank", jenisKelamin : "Laki-Laki"},
        ]
        var pasien = dataPasien.find(x=> x.id === nomorIdPasien)
        if (pasien === undefined){
            reject("data pasien tidak ada")
        }else {
            resolve(pasien)
        }
    })
}
async function hello(nomorIdPasien) {
    try{
        var result = await doAsync(nomorIdPasien)
        console.log(result)
    }catch(err){
        console.log(err)
    }
}
hello(1)