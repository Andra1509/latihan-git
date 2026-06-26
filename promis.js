// var isMomHappy = false

// //promis
// var willtgetnewphone = new Promise(
//     function(resolve, reject){
//         if(isMomHappy) {
//             var phone = {
//                 brand : "samsung",
//                 tipe : "j2 prime",
//                 color : "black"
//             }
//             resolve(phone);
//         }else{
//             var reason = new Error("Mom is not Happy!");
//             reject(reason)
//         }
//     }
// );    

// function askMom(){
//     willtgetnewphone
//     .then(function (terpenuhi){
// console.log(terpenuhi);
//     })
//     .catch(function(gagal) {
//         console.log(gagal.message)
//     })
// }

// askMom()


//asyn await
function doAcync() {
    return new Promise( function (resolve, reject){
        var check = true
        if (check){
            resolve("anda berhasil")
        }else{
            reject("anda gagal")
        }
    })
}

async function hello() {
    var result = await doAcync()
    console.log(result)
}
hello()