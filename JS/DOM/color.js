const changeColor=document.getElementsByTagName('button')
const H1=document.getElementsByTagName('h1')[0]
changeColor[0].onclick=()=>{
    H1.classList.toggle('Change')
}


// buat baru

const TRandomWarna=document.createElement('button');
const TextRandomWarna=document.createTextNode('Suffle');
TRandomWarna.appendChild(TextRandomWarna);
TRandomWarna.setAttribute('type','button');
changeColor[0].after(TRandomWarna)
TRandomWarna.addEventListener('click',function(){
    const random=Math.round(Math.random()*255+1)
    const random2=Math.round(Math.random()*255+1)
    const random3=Math.round(Math.random()*255+1)
    const random4=Math.round(Math.random()+0.5)
    document.body.style.backgroundColor=`rgba(${random},${random2},${random3},${random4})`
})



// slider

const merah=document.getElementById('red')
const hijau=document.getElementById('green')
const biru=document.getElementById('blue')
const kotak=document.getElementsByClassName('kotak')[0]
merah.addEventListener('input',function(){
    kotak.style.backgroundColor=`rgb(${merah.value},${hijau.value},${biru.value})`
})
hijau.addEventListener('input',function(){
    kotak.style.backgroundColor=`rgb(${merah.value},${hijau.value},${biru.value})`
})
biru.addEventListener('input',function(){
    kotak.style.backgroundColor=`rgb(${merah.value},${hijau.value},${biru.value})`
})

document.body.addEventListener('mousemove', function(e){
    const xpos=Math.round((e.clientX/window.innerWidth)*255);
    const ypos=Math.round((e.clientY/window.innerHeight)*255);
    const zpos=Math.round(Math.random()*255+1)
    const kotak2=document.getElementsByClassName('kotak')[1]
    kotak2.style.backgroundColor=`rgb(${xpos},${ypos},${zpos})`;
})

