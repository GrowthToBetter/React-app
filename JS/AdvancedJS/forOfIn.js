// For OF untuk iterable

const mhs=['hello', 1,2 ,3]
for(const m of mhs){
    console.log(m)
}

const strMhs='helLo World'
for(const n of strMhs){
    console.log(n)
}
// for of tdk memiliki index namun dapat menggunakan index jika menambahkan entries
for(const [i,n] of mhs.entries()){
    console.log(i)
}

function jmlAngka(){
    let hasil=0
    for(const a of arguments){
        hasil +=a
    }
    return hasil
}
console.log(jmlAngka(1,2,3,4,5))

// for in untuk enumerable
const mhs2={
    nama:'dodi',
    umur:19,
}
for(const n in mhs2){
    console.log(n)
}
