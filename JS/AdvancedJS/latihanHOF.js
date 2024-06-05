



const video = Array.from(document.querySelectorAll("[data-duration"));


let videoJS = video
  .filter((video) => video.textContent.includes("JAVASCRIPT LANJUTAN"))
  .map(item=>item.dataset.duration)
  .map(waktu=>{
    const parts=waktu.split(':').map(part=>parseFloat(part))
    return (parts[0]*60)+parts[1]
  })
  .reduce((a,b)=>a+b);


const jam=Math.floor(videoJS/3600)


videoJS=videoJS-jam*3600


const menit=Math.floor(videoJS/60)


const detik=videoJS-menit*60


const duration=document.querySelector('.total-durasi')
duration.textContent=`${jam} jam:${menit} menit:${detik} detik`
const jmlVideo=document.querySelector('.jumlah-video').textContent=`${video.filter((video) => video.textContent.includes("JAVASCRIPT LANJUTAN")).length} video`
