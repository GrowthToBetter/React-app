const varr=['hello','tes',1,2]
let [hello,tes,...angka]=varr
console.log(hello,tes,angka)

const obj={
    nama:'mahasiswa',
    umur:'unknown',
}
// destructuring array mengambil urutan dari array sedangkan untuk objek akan mengembalikan nilai yang sama dengan nama variabel
let {nama,umur}=obj

function desc(){
    return [0,1,2,3]
}

let [angka1,...etc]=desc()
console.log(angka1,etc)

function objDesc({nama,umur}){
    return console.log(nama, umur)
}
objDesc(obj)
