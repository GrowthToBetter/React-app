var i=prompt('masukkan angka...')
var char='*'
var sv=''
switch (i) {
    case '0' :  
    alert('please input Number')  
    break;2
    default:
        for(var n=1;n<=Number(i);n++){
            sv=sv+char
            console.log(sv)
        }
        break;
}