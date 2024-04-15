var run=true
function suit(char, enemy){
    
    switch (char) {
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
            run=false
            break;
    }
}
// function have a arguments, in python we call it args
function math(type, x, y, z){
    var total
    switch (type) {
        case 'permukaan':
            total= 2*(x*z)+(y*z)+(x*y)
            alert('hasilnya adalah' + total)
            break;
        case 'volume':
            total= x*y*z
            alert('hasilnya adalah' + total) 
        default:
            break;
    }
}
while(run){
    var play=prompt('math or suit?')
    var num= Math.random()
    var enemy
    if(num<= .3){
        enemy='gajah'

    }
    else if (num >= .3 && num <=.8){
        enemy='semut';
        
    } else{
        enemy='orang'
            
    }
    switch (play) {
        case 'suit':
            play=prompt('choose between: gajah, semut, orang')
            suit(play, enemy)
            break;
        case 'math':
            var kind=prompt('permukaan atau volume?')
            var x=prompt('masukkan nilai x...')
            var y=prompt('masukkan nilai y...')
            var z=prompt('masukkan nilai z...')
            math(kind,x,y,z)
        default:
            break;
    }
    if(run){
        run=confirm('lanjut bermain? ')
    }
}

function args(){
    for(var i=0; i< arguments.length;i++){
        alert(arguments[i])
    }
    
}
args(1,23,2,21,'hsj')