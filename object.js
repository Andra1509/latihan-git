//

var orang = [
    {
        nama : "Andra Rmadhani Wiodod0",
    warnakulit : "sawo matang",
    jeniskelamin : "laki-laki",
    tinggibadan : 185,
    beratbadan : 70,
    usia : 25
    },

{
    nama : "Andra ",
    warnakulit : "sawo matang",
    jeniskelamin : "laki-laki",
    tinggibadan : 185,
    beratbadan : 70,
    usia : 25
}
]
console.log(orang[0].nama)
console.log(orang[1].usia)


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

