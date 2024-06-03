
function PilihanComputer(){
    const num= Math.random()
    if(num<= .3) return 'gajah';
    else if (num >= .3 && num <=.8) return 'semut';
    return 'orang'
} 
function getHasil(comp, user){
    if(user==comp) return 'seri';
    if(user=='gajah') return (comp=='orang')?'menang':'kalah';
    if(user=='orang') return (comp=='semut')?'menang':'kalah';
    if(user=='semut') return (comp=='gajah')?'menang':'kalah';

}

function putar(){
    const img=document.querySelector('.img-komputer')
    const gambar=['gajah','semut','orang']
    let i=0;
    const waktuAwal= new Date().getTime();
    setInterval(function(){
        if(new Date().getTime()-waktuAwal>1000){
            clearInterval;
            return;
        }
        img.setAttribute('src',`../img/${gambar[i++]}.png`)
        if(i == gambar.length) i=0;
    },100)
}


const user=document.querySelectorAll('li img');
const Inpo=document.querySelector('.info')
user.forEach(function(userCh){
    userCh.addEventListener('click',function(){
        const comp=PilihanComputer()
        const hasil= getHasil(comp,userCh.className)
        putar();
        setTimeout(function(){
            const imgComp=document.querySelector('.img-komputer').setAttribute('src',`../img/${comp}.png`)
            Inpo.innerHTML=hasil
        },1000)
    })
})






// const pGajah=document.querySelector('.gajah')
// const pOrang=document.querySelector('.orang')
// const pSemut=document.querySelector('.semut')
// const Inpo=document.querySelector('.info')
// pGajah.addEventListener('click',function(){
//     const comp=PilihanComputer()
//     const hasil= getHasil(comp,pGajah.className)
//     const imgComp=document.querySelector('.img-komputer').setAttribute('src',`../img/${comp}.png`)
//     Inpo.innerHTML=hasil
// })
// pOrang.addEventListener('click',function(){
//     const comp=PilihanComputer()
//     const hasil= getHasil(PilihanComputer(),pOrang.className)
//     const imgComp=document.querySelector('.img-komputer').setAttribute('src',`../img/${comp}.png`)
//     Inpo.innerHTML=hasil
// })
// pSemut.addEventListener('click',function(){
//     const comp=PilihanComputer()
//     const hasil= getHasil(PilihanComputer(),pSemut.className)
//     const imgComp=document.querySelector('.img-komputer').setAttribute('src',`../img/${comp}.png`)
//     Inpo.innerHTML=hasil
// })