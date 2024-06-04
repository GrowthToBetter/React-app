// object literal
let mahasiswa={
    nama:'tes',
    energy:10,
    makan:function(porsi){
        this.energy=this.energy+porsi;
        console.log(`selamat makan ${this.nama}`)
        console.log(this.energy)
    }
}
let mahasiswa2={
    nama:'tes2',
    energy:10,
    makan:function(porsi){
        this.energy=this.energy+porsi;
        console.log(`selamat makan ${this.nama}`)
        console.log(this.energy)
    }
}

console.log(mahasiswa)
// function declaration

function mahasiswa3(nama,energy){
    let mahasiswa={};
    mahasiswa.nama=nama;
    mahasiswa.energy=energy;
    mahasiswa.makan=function(porsi){
        this.energy +=porsi
        console.log(this.energy,mahasiswa)
    }
    return mahasiswa
}
let hehe=mahasiswa3('hehe',10)
let dd=mahasiswa3('dd',10)


// constructor
function mahasiswa4(nama,energy){
    this.nama=nama;
    this.energy=energy;
    this.makan=function(porsi){
        this.energy +=porsi
        console.log(this.energy,this)
    }
}

let bara=new mahasiswa4('bara',10)


// object.create()
const mahasiswaMethod={
    makan:function(porsi){
        this.energy +=porsi
        console.log(this.energy,mahasiswa)
    }
}
function mahasiswa5(nama,energy){
    let mahasiswa=Object.create(mahasiswaMethod);
    mahasiswa.nama=nama;
    mahasiswa.energy=energy;
    return mahasiswa
}
let santo=mahasiswa5('santo',80)



// Prototype

function mahasiswa6(nama,energy){
    this.nama=nama;
    this.energy=energy;
}
mahasiswa6.prototype.makan=function(porsi){
    this.energy +=porsi
    return `${this.nama} sedang makan`
}
let jean=new mahasiswa6('jean',10)


// prototype class
class mahasiswa7{
    constructor(nama,energy){
        this.nama=nama
        this.energy=energy
    }
    main(porsi){
        this.energy +=porsi
        return `${this.nama} sedang makan`
    }
}
let richnerd=new mahasiswa7('richnerd',10)