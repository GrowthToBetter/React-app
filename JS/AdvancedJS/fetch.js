
// fetch cara membuat program js secara asynchronus namun tidak mengandalkan library dari luar

document.querySelector(".search-button").addEventListener("click", function () {
  fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=f0646e49&s=${document.querySelector(".input-keyword").value}`)
  .then(results=>results.json())
  .then(response=>{
    const movies=response.Search;
    let cards='';
    movies.forEach(m=>cards+=Card(m));
    document.querySelector('.movie-Container').innerHTML=cards;
    const detailButton=document.querySelectorAll('.detail-Button');
    detailButton.forEach(btn=>{
        btn.addEventListener('click',function(){
            fetch(`http://www.omdbapi.com/?i=${this.dataset.imdb}&apikey=f0646e49`)
            .then(response=>response.json())
            .then((m)=>{
                let movieDetail = Movie(m);
                document.querySelector('.modal-body').innerHTML=movieDetail
            });
        })
    })

  })
});

function Card(m) {
  return `<div class="col-md-4 my-3">
      <div class="card">
          <img src="${m.Poster}" class="card-img-top" alt="">
          <div class="card-body">
            <h5 class="card-title">${m.Title}</h5>
            <p class="card-text">rilis pada ${m.Year}, nyatanya film ${m.Title} ssangatlah populer</p>
            <a href="#" class="btn btn-primary detail-Button" data-toggle="modal" data-target="#movieDetail" data-imdb="${m.imdbID}">Munculkan detail</a>
          </div>
        </div>
  </div>`;
}

function Movie(m) {
  return `<div class="container-fluid">
              <div class="row">
                  <div class="col-md-3">
                      <img src="${m.Poster}" alt="" class="img-fluid">
                  </div>
                  <div class="col-md">
                      <ul class="list-group">
                          <li class="list-group-item">${m.Title} (${m.Year})</li>
                          <li class="list-group-item"><strong>Director :</strong>${m.Director}</li>
                          <li class="list-group-item"><strong>Actors :</strong>${m.Actors}</li>
                          <li class="list-group-item"><Strong>Writer : </Strong>${m.Writer}</li>
                          <li class="list-group-item"><strong>Plot: </strong><br>${m.Plot}</li>
                        </ul>
                  </div>
              </div>
            </div>`;
}
