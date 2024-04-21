
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
        return console.log(`kembalian anda ${kembalian}`);
    }

}
