// synchronus callback
const mhs=[
    {
        'nama':'bara',
        'usia':'16',
    },
    {
        'nama':'jean',
        'usia':'15',
    },
    {
        'nama':'dodi',
        'usia':'17',
    },
    {
        'nama':'peking',
        'usia':'18',
    },
]
function halo(nama){
    alert(nama)
}

function Tampil(callback){
    let nama=prompt('masukkan nama')
    callback(nama)
}

console.log('mulai')
mhs.forEach(n=>{console.log(n.nama)})
console.log('selesai')


// Asynchronus callback

function getDataMahasiswa(url, succes, eror){
    let xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function(){
        if(xhr.readyState===4){
            if(xhr.status===200){
                succes(xhr.response);
            } else if(xhr.status===404){
                eror()
            }
        }
    }
    xhr.open('get',url);
    xhr.send();

}




console.log('mulai')

getDataMahasiswa('callback.json',results=>{
    const mhs=JSON.parse(results);
    mhs.forEach(m=>console.log(m.nama))
},(e)=>{console.log(e)})
console.log('selesai')


// jQuery
console.log('mulai')
$.ajax({
    url:'callback.json',
    success:(results)=>{
        results.forEach(m=>console.log(m.nama))
    },
    error:(e)=>{
        console.log(e.responseText)
    }
});
console.log('selesai')