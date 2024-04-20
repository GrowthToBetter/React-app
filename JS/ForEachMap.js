
var arr=[]
function prime(angka){
    if (angka === 1 || angka % 2 ===0 || angka % 3===0)return false;
    else if(angka <=3) return true;

    for (var i=5; i*i<=angka;i+=6){
        if (angka%i===0 || angka % (i+2)===0){
            return false
        }
    }
    return true
}
var automatic=function(item){
    switch (prime(item)) {
        case true:
            alert(item+' is prime')
            console.log(arr.filter(function(x){return x==true}))
            break;
        default:
            alert(item+' is not')
            break;
    }
}
var Run=true
while (Run){
    var ask=Number(prompt('what number want to check'))
    arr.push(ask)
    var conf=confirm('want to check?')
    var zip=arr.filter(function(x){return x==true;})
    if (conf){
        arr.forEach(automatic)
    }
    Run=confirm('lanjut?')
}