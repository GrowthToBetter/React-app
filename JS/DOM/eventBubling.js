const closeCard=document.querySelectorAll('.close')
const cards=document.querySelectorAll('.card')

// closeCard.forEach(function(x){
//     x.addEventListener('click',function(e){
//         e.target.parentElement.style.display='none'
//         e.preventDefault();
//         e.stopPropagation();
//     })
// })

// cards.forEach(function(card){
//     card.addEventListener('click',function(e){
//         alert('ok')
//     })
// })

const container=document.querySelector('.container')
container.addEventListener('click',function(e){
    if(e.target.className=='close'){
        e.target.parentElement.style.display='none'
        e.preventDefault();
    }
})
