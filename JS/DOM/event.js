const p3=document.querySelector('section#a .p3');
function ubah(){
    p3.style.backgroundColor=`red`;
}

// eventhandler menimpa fitur, hanya menjalankan yang terakhir

const p2=document.querySelector('.p2');
p2.onclick=()=>{
    p2.style.backgroundColor='green';
};
// addEventListener menambahkan fitur selama tidak bertabrakan
// menjalankan semua code
const h1=document.querySelector('h1');
h1.addEventListener('click',function(){
    alert('ok');
})

const p4=document.querySelector('section#b p')
p4.addEventListener('click',function(){
    const LiBaru=document.createElement('li');
    const textLiBaru=document.createTextNode('baru');
    LiBaru.appendChild(textLiBaru)
    const ul=document.querySelector('section#b ul')
    return ul.appendChild(LiBaru)
})
const A=document.querySelector('section#a a')
const p1=document.getElementsByTagName('p')[0]
p1.addEventListener('click',function(){
    open('https://google.com','_blank')
})

// daftar event
// Mouse
// keyboard
// resource
// focus
// view
// form
// css animation & transition
// drag & drop
// etc
