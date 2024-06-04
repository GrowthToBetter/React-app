const closeCard=document.querySelectorAll('.close')
const card=document.querySelectorAll('.card')

closeCard.forEach(function(x){
    x.addEventListener('click',function(e){
        e.target.parentElement.style.display='none'
        e.preventDefault();
    })
})