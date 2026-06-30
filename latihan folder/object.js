//

var orang = [
    {
        nama : "Adinda",
    warnakulit : "kuning langsat",
    jeniskelamin : "perempuan",
    tinggibadan : 185,
    beratbadan : 70,
    usia : 17
    },

{
    nama : "Andra ",
    warnakulit : "sawo matang",
    jeniskelamin : "laki-laki",
    tinggibadan : 185,
    beratbadan : 70,
    usia : 17
}
]
console.log(orang[0].nama)
console.log(orang[0].warnakulit)
console.log(orang[1].nama)
console.log(orang[1].jeniskelamin)



//pengulangan foreach


orang.forEach(function(item){
    console.log(item.orang)
})


var warnakulit = orang.map(function(item){
    return item.warnakulit
})
console.log(warnakulit)

// var filterwarnakulit = orang.filter(function(item){
//     return item.warnakulit == "sawo matang"
// })

// console.log(sawomatang)



