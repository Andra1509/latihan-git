// program untuk menghitung mundur hingga angka 1
// function countDown(number){
//     // menampilkan number
//     console.log(number);
//     //mengurangi nilai namber
//     var newnamber = number -1;
//     if(newnamber > 0){
//         countDown(newnamber);
//     }
// }
// countDown(4)

// function hitunglingkaran(radius){
//     var pi = 22/7
//     function luas (r) {return pi * r * r}
//     function keliling (r){return 2 * pi * r}
//     console.log("luas:", luas (radius))
//     console.log("keliling:",keliling (radius))
// }
// hitunglingkaran(7)


function hitungpersegi(sisi){
    
    function luas(s){
        return s * s
    }
    function keliling(s){
        resturn 4 * s
    }  
        console.log("luas persegi =", luas(sisi))
        console.log("kelilingpersegi =", keliling(sisi))
    
}



// function tambah (a, b){
//     return a + b
// }

// console.log(tambah(24,12))

// function tambah (a){
//     return function(b){
//         return a + b
//     }
// }
// console.log(tambah(24)(12))