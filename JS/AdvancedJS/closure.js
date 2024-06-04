// function init(){
//     let nama='jean';
//     function tampil(){
//         console.log(nama)
//     }
//     console.dir(tampil);
//     return tampil
// }
// function init(){
//     return function(nama){
//         console.log(nama)
//     }
// }

// let panggil=init()
// panggil('jean')





// function factory
function ucapkanSalam(waktu){
    return function(nama){
        console.log(`selamat ${waktu}, ${nama}`)
    }
}
let panggil=ucapkanSalam('pagi')
panggil('jean')
console.dir(panggil)


// study kasus

// count dapat diganggu ditengah
console.log('biasa')
let count=0;
let add=function(){
    return ++count
}
console.log(add())
console.log(add())
count=12
console.log(add())
// akan tereset
console.log('reset')
let add2=function(){
    let count=0;
    return ++count
}
console.log(add2())
console.log(add2())
console.log(add2())

// menggunakan closure
console.log('closure')
let add3=function(count){
    return function(){
        return count++;
    }
}
let count2=add3(1)
console.log(count2())
console.log(count2())
console.log(count2())
// immediately function
console.log('fungsi cepat')

let add4=(function(){
    let count=1
    return function(){
        return count++;
    }
})();
console.log(add4())
console.log(add4())
console.log(add4())