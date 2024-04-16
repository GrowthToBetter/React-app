
var belanja=[]
var harga=[5000,6000, 10000]
function beli() {
    switch (arguments[0]) {
        case 'ikan':
            if (arguments[2] < arguments[1][0]){
                alert('uang anda kurang')
            }

            belanja.push(arguments[0])
            return alert('kembalian anda ' +(uang-arguments[1][0]))
            break;
        case 'ayam':
            if (arguments[2] < arguments[1][1]){
                alert('uang anda kurang')
            }
            belanja.push(arguments[0])
            return alert('kembalian anda ' +(uang-arguments[1][1]))
            break;
        case 'sapi':
            if (arguments[2] < arguments[1][2]){
                alert('uang anda kurang')
            }
            belanja.push(arguments[0])
            return alert('kembalian anda ' +(uang-arguments[1][2]))
            break;
        default:
            Run=false
            break;
    }
}
var Run=true
while(Run){
    var shop=prompt('menu kami: ikan, ayam, sapi')
    var uang= Number(prompt('berapa uang anda..'))
    beli(shop, harga, uang)
    alert('barang belanjaan anda adalah \n' + belanja.join(' '))
    if(Run){
        Run=confirm('ingin belanja lagi? ')
    }
}