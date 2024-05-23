// cari dgn id
var title= document.getElementById('title')
title.style.color='blue';
title.style.backgroundColor='cyan'
title.style.zIndex='-1';

// cari dengan tagname
const elemenP=document.getElementsByTagName('p');

for(let i=0;i<elemenP.length;i++){
    elemenP[i].style.border='5px solid black'
}
// cari dengan class
const item=document.getElementsByClassName('header')[0]
item.style.backgroundColor='grey';

// cari dengan elemen
const p4=document.querySelector('#b p')
p4.style.backgroundColor='#ff34';
const ListItemId=document.querySelector('section#b ul li:nth-child(2)'
)
ListItemId.style.backgroundColor="#faba91"
// cari semua elemen yang dipilih(tidak spesifik)
const allElemenListItem=document.querySelectorAll('p')
for(let i =0;i<allElemenListItem.length;i++){
    allElemenListItem[i].style.fontSize='6rem'
};
