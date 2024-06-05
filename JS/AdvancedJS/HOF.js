// high order function adalah function yang berjalan diatas fungsi lain
function HOF(nama, callback){
    console.log(nama)
    callback()
}

function callback(){
    console.log('function yang dijalankan dibawah function lain adalah callback')
}
HOF('jean',callback)

// contoh HOF yang sering digunakan
console.log('for')
const angka=[1,3,8,2,9,7,0,4,6,5];
let newArr=[];
for(let i=0;i<angka.length;i++){
    if(angka[i]>=3){
        newArr.push(angka[i]);
    }
}
console.log(newArr)
console.log('filter')
newArr=angka.filter(a => a>=3);
console.log(newArr)

console.log('map')
newArr=angka.map(a=>a*2).sort((a,b)=>a-b);
console.log(newArr)

console.log('reduce')
newArr=angka.reduce((accumulator,currentValue)=>accumulator+currentValue,0);
console.log(newArr)

// method chaining
console.log('method chaining')
const hasil=angka.filter(a=>a>5).map(a=>a*3).reduce((a,b)=>a+b)
console.log(hasil)
