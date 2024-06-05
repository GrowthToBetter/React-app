const nama='jean';
const umur=16;

function highLight(strings, ...args){
    return strings.reduce((result,str,i)=>`${result}${str}<span>${args[i] || ''}</span>`,'')
}

const str= highLight`halo, saya ${nama}, ${umur} tahun`
document.body.innerHTML=str
console.log(str)