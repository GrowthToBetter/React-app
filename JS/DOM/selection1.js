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

const item=document.getElementsByClassName('container')[0]
item.style.backgroundColor='grey';


