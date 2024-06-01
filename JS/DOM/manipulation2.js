// buat elemen
const abaru=document.createElement('a');
abaru.setAttribute('href','#')
// buat text
const textABaru=document.createTextNode('hello');
// gabungkan text dan elemen
abaru.appendChild(textABaru)
// tambahkan ke body
const sectionA=document.querySelector('section#a')
sectionA.appendChild(abaru)

// menyisipkan list
const libaru=document.createElement('li');
const textLi=document.createTextNode('baru');
libaru.appendChild(textLi)

const ul=document.querySelector('section#b ul');
const p2=ul.querySelector('li:nth-child(2)')

ul.insertBefore(libaru,p2)

// remove
const link=document.getElementsByTagName('a')[0];
sectionA.removeChild(link)

// replace
const sectionB=document.querySelector('section#b')
const p4=sectionB.querySelector('p');
const h2baru=document.createElement('h2')
const textH2=document.createTextNode('baru')
h2baru.appendChild(textH2)
sectionB.replaceChild(h2baru,p4)



