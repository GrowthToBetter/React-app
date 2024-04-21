var penumpang=[]

function tambahPenumpang(nama){
    if(penumpang.find(function(x){return x==nama})){
        return ''
    }
    for(var i=0;i<=penumpang.length;i++){

        switch(penumpang[i]){
            case undefined:
                return penumpang[i]=nama;

            default:
                if(i==penumpang.length-1){
                    return penumpang.push(nama);
                }
        }
    }

};
function kurangPenumpang(nama){
    if (penumpang.find(function(x) {return x==nama})){
    var i =penumpang.indexOf(nama)
    penumpang[i]=undefined
    }
}
var Run=true
while(Run){
    var ask=prompt('naik/turun')
    var nama=prompt('name ')
    switch (ask) {
        case 'naik':
            tambahPenumpang(nama)
            penumpang.forEach(function(x){
                return alert(x)
            })
            break;
        case 'turun':
            kurangPenumpang(nama)
            penumpang.forEach(function(x){
                return alert(x)
            })
            break;
        default:
            break;
    }
    Run=confirm('lanjut?')
};