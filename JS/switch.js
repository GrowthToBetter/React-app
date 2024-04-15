var i= Number(prompt('masukkan angka...'))
var char=''
switch (i) {
    case 0 :  
        alert('please input Number')  
        break;2
    default:
        for(var n=1;n<=Number(i);n++){
            console.log(char += "*")
            if(char.length==i){
                for (var b=i; b !==0;b--){
                    console.log(char=char.slice(0, -1));}
            }
        }
        break;
}