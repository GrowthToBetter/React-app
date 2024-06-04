// reguler arrow function

const tampilNama=(nama)=>{return `hello ${nama}`}

console.log(tampilNama('jean'))


// implisit return

const tampilNama2=nama => `hello ${nama}`

console.log(tampilNama2('richnerd'))

// contoh

let mahasiswa=['bara','jean','richnerd']
let Jumlah= mahasiswa.map(nama=>nama.length);
console.log(Jumlah)
// object
let jumlah=mahasiswa.map(nama=>({nama:nama,jmlh:nama.length}))
console.table(jumlah)


// func
const mahasiswa2=function(){
    this.nama='santo';
    this.umur=20
    this.hello=function(){
        console.log(`hello ${this.nama}`)
    }
}

const santo=new mahasiswa2()

// funct arrow

const mahasiswa3=function(){
    this.nama='santo2';
    this.umur=20
    this.hello=()=>{console.log(`hello ${this.nama}`)}
    // setInterval(()=>{
    //     console.log(this.umur++)
    // },500);
    
}

const santo2=new mahasiswa3()

const mhs={
    nama:'santo3',
    umur:22,
    hello: ()=>{
        // arrow func tidak memiliki konsep this
        console.log(`hello ${this.nama}`)
    }
    
}


// real kasus

const box=document.querySelector('.box').addEventListener('click',function(){
    let satu='size';
    let dua='capt';
    if(this.classList.contains==satu){
        [satu,dua]=[dua,satu];
    }
    this.classList.toggle(satu)
    setTimeout(()=>{
        this.classList.toggle(dua)
    },500)
})