var nomor=Number(prompt('sebutkan nomor anda...'))
var bomb=5
var pengunjung=10
if (nomor !==bomb){
    if(nomor<5){
        for (var i=1;i<=nomor;i++){
        alert(i + ' masih aman');
    }
}else{
    for(var i=pengunjung;i>=nomor ;i--){
        alert(i +' masih aman');
    }
}     
}else{
    while(nomor ===bomb){
        bomb= prompt('you lose, now chose the bomb');
    }
}


