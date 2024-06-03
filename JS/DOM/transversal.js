const closeCard=document.querySelectorAll('.close')
const card=document.querySelectorAll('.card')
// for(let i=0;i<closeCard.length;i++){
//     closeCard[i].addEventListener('click',function(e){
//         // card[i].style.display='none'
//         e.target.parentElement.style.display='none'
//     })
// }

closeCard.forEach(function(x){
    x.addEventListener('click',function(e){
        e.target.parentElement.style.display='none'
    })
})