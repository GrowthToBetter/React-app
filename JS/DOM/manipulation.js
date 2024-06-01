
// inner html dapat digunakan untuk menambahkan apapun kedalam elemen yang dipilih
// inner html dapat mengganti apapun isi elemen menjadi div baru section baru dll
const FirstH1= document.getElementsByTagName('h1')
FirstH1[0].innerHTML='testing'

// properties
const sectionh1=document.querySelector('h1');
sectionh1.style.color='lightblue'
sectionh1.style.backgroundColor='#56aaba'

// atribut
const atH=document.getElementsByTagName('p')[0];
atH.setAttribute('class', 'helo');
const a=document.querySelector('section#a a')
a.setAttribute('href', 'https://google.com')
a.setAttribute('target','_blank')
console.log(a.getAttribute('href'))

// classList
const header=document.querySelector('.header')
header.classList.add('first')
header.classList.remove('header')
a.classList.toggle('tot')
a.classList.add('tot2')
console.log(a.classList.item(1))
console.log(a.classList.contains('tot'))
const item=document.querySelector('.item')
item.classList.replace('item', 'const')

