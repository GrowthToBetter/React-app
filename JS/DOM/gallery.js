const Jumbo=document.querySelector('.jumbo')
const Container=document.querySelector('.container')
const thumbs=document.querySelectorAll('.thumb')
Container.addEventListener('click',function(e){
    if(e.target.className=='thumb'){
        const img=e.target.getAttribute('src')
        Jumbo.setAttribute('src',`${img}`)
        Jumbo.classList.add('fade')
        setTimeout(function(){
            Jumbo.classList.remove('fade')
        },500)
        thumbs.forEach(function(thumb){
            thumb.className='thumb';
        })
        e.target.classList.add('active')
    }
})