$('.search-button').on('click',function(){
  $.ajax({
    url: `http://www.omdbapi.com/?i=tt3896198&apikey=f0646e49&s=${$('.input-keyword').val()}`,
    success: (results) => {
      const Movies = results.Search;
      let Cards = "";
      Movies.forEach((m) => {
        Cards += Card(m);
      });
      $(".movie-Container").html(Cards);
      $(".detail-Button").on("click", function () {
        $.ajax({
          url: `http://www.omdbapi.com/?i=${$(this).data('imdb')}&apikey=f0646e49`,
          success: m => {
            const movieDetail = Movie(m);
            $('.modal-body').html(movieDetail)
          },
          error: (e) => {
            console.log(e.responseText);
          },
        });
      });
    },
    error: (e) => {
      console.log(e.responseText);
    },
  });

})


function Card(m){
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
};

function Movie(m){
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
};