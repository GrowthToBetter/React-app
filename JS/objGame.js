
function Angkot(angkot, sopir, biaya, track){
    this.angkot=angkot;
    this.penghasilan=0
    this.sopir=sopir;
    this.biaya=biaya;
    this.track=track;
    this.tambahPenumpang=function(id){
        if(this.angkot.find(function(x){return x==id})){
            return '';
        }
        for(var i=0;i<=this.angkot.length;i++){
            switch (angkot[i]) {
                case undefined:
                    return this.angkot[i]=id
                default:
                    if(i==this.angkot.length-1){
                        return this.angkot.push(id);
                    }
                    break;
            }
        }
    }
    this.kurangPenumpang=function(id, uang){
        for(var i=0;i<this.angkot.length;i++){
            switch (angkot[i].id) {
                case id:
                    this.angkot[i]=undefined
                    break;
                default:
                    break;
            }
        }
        var kembalian= uang-this.biaya
        this.penghasilan +=this.biaya
        return alert(`kembalian anda ${kembalian}`);
    }

}

var angkot1,
    angkot2,
    angkot3,
    jenis,
    nama,
    ktp,
    ask,
    id,
    bayar,
    Run;

angkot1=new Angkot([],'widy',10000,['palempang','yogyakarta'])
angkot2= new Angkot([],'dawam', 15000,['malang','jakarta'])
angkot3=new Angkot([],'didik',20000,['jakarta','bali'])
Run=true
while(Run){
    nama= prompt('nama..')
    ktp=prompt('nomer ktp...')
    ask=prompt('naik/turun')
    id={
        'name':nama,
        'id':ktp
    }
    switch (ask) {
        case 'naik':
            jenis=prompt('angkot 1-3')
                switch (jenis) {
                    case '1':
                        angkot1.tambahPenumpang(id)
                        console.log(`angkot 1 = ${angkot1}`)
                        break;
                    case '2':
                        angkot2.tambahPenumpang(id)
                        console.log(`angkot 2 = ${angkot2}`)
                    case '3':
                        angkot3.tambahPenumpang(id)
                        console.log(`angkot 3 = ${angkot3}`)
                    default:
                        break;
                }
            break;
        case 'turun':
            jenis=prompt('angkot 1-3')
            switch (jenis) {
                case '1':
                    bayar=Number(prompt('biaya 10000, masukkan uang anda'))
                    angkot1.kurangPenumpang(id, bayar)
                    console.log(`angkot 1 = ${angkot1}`)
                    break;
                case '2':
                    bayar=Number(prompt('biaya 15000, masukkan uang anda'))
                    angkot2.kurangPenumpang(id,bayar)
                    console.log(`angkot 2 = ${angkot2}`)
                case '3':
                    bayar=Number(prompt('biaya 20000, masukkan uang anda'))
                    angkot3.kurangPenumpang(id,bayar)
                    console.log(`angkot 3 = ${angkot3}`)
                default:
                    break;
            }
        default:
            break;
    }
    Run=confirm('lanjut? ')
}