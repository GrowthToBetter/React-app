var Run=true
while(Run){
    var suit=prompt('choose beetween : semut, gajah, orang')
    var num= Math.random()
    var enemy=''
    if(num<= .3){
        enemy='gajah'

    }
    else if (num >= .3 && num <=.8){
        enemy='semut';
        
    } else{
        enemy='orang'
            
    }
    switch (suit) {
        case 'gajah':
            switch (enemy) {
                case 'gajah':
                    alert('seri')
                    break;
                case 'semut':
                    alert('kalah')
                    break;
                default:
                    alert('menang')
                    break;
            }
            break;
        case 'semut':
            switch (enemy) {
                case 'gajah':
                    alert('menang')
                    break;
                case 'semut':
                    alert('seri')
                    break;
                default:
                    alert('kalah')
                    break;
            }
            break;
        case 'orang':
            switch (enemy) {
                case 'gajah':
                    alert('kalah')
                    break;
                case 'semut':
                    alert('menang')
                    break;
                default:
                    alert('seri')
                    break;
            }
            break;
        default:
            Run=false
            break;
    }
    if (Run){
        Run=confirm('lanjut? ')
    }
}