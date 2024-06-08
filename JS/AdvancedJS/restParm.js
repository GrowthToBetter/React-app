function jmlhAngka(...angka){
    return angka.reduce((a,b)=>a+b)
}
console.log(jmlhAngka(1,2,3))

const kelompok=['bara','jean','dodi','jeking']
const [ketua,wakil,...anggota]=kelompok
console.log(ketua,wakil,anggota)


const team={
    pm:'bara',
    wakil:'jean',
    anggota:'dodi',
    bendahara:'robert'
}

const{pm,...etc}=team
console.log(pm,etc)


function filterBy(type,...args){
    return args.filter(m=> typeof m===type)
}
console.log(filterBy('number',1,2,'bara',true,false,'jeje'))
