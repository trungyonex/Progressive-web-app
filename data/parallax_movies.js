var parallax_movies = [
    {
        img: "images/parallax/avatar.jpg",
        name: "Avatar",
        rating: "7.8(Imbd)",
        age: "9+",
        time: "2h 42min",
        content: "A paraplegic Marine dispatched to the moon Pandora on a unique\
        mission becomes torn between following his orders and\
        protecting the world he feels is his home.",
        link: "https://www.imdb.com/title/tt0499549/?ref_=fn_al_tt_1",
    }
]

const template_parallax_movies = `
<div class="col-lg-4 r-mb-23">
    <div class="text-left">
      <a href="javascript:void(0)">
        <h1 class="parallax-heading">NAME</h1>
      </a>
      <div class="parallax-ratting d-flex align-items-center mt-3 mb-3">
        <ul
          class="ratting-start p-o m-0 list-inline text-primary d-flex align-items-center justify-content-left">
          <li>
            <a href="#" class="text-primary"><i class="fa fa-star"></i></a>
          </li>
          <li>
            <a href="#" class="text-primary"><i class="pl-2 fa fa-star"></i></a>
          </li>
          <li>
            <a href="#" class="text-primary"><i class="pl-2 fa fa-star"></i></a>
          </li>
          <li>
            <a href="#" class="text-primary"><i class="pl-2 fa fa-star"></i></a>
          </li>
          <li>
            <a href="#" class="text-primary"><i class="pl-2 fa fa-star-half-o"></i></a>
          </li>
        </ul>
        <span class="text-white ml-3">RATING</span>
      </div>
      <div class="movie-time d-flex align-items-center mb-3">
        <div class="badge badge-secondary p-1 mr-2">AGE</div>
        <span class="text-white">TIME</span>
      </div>
      <p>
        CONTENT
      </p>
      <div class="parallax-buttons">
        <a href="LINK" class="btn btn-hover">Play Now</a>
        <a href="LINK" class="btn btn-link">More Details</a>
      </div>
    </div>
  </div>
  <div class="col-lg-8">
    <div class="parallax-img">
      <a href="#"><img src="IMG" alt="" class="img-fluid w-100" /></a>
    </div>
  </div>
`;

let movies_parallax = '';
for (let i = 0; i < parallax_movies.length; i++) {
    let entry = template_parallax_movies
      .replace(/IMG/g, parallax_movies[i].img)
      .replace(/NAME/g, parallax_movies[i].name)
      .replace(/RATING/g, parallax_movies[i].rating)
      .replace(/AGE/g, parallax_movies[i].age)
      .replace(/TIME/g, parallax_movies[i].time)
      .replace(/CONTENT/g, parallax_movies[i].content)
      .replace(/LINK/g, parallax_movies[i].link)
      movies_parallax += entry;
}
document.getElementById('parallax_mv').innerHTML = movies_parallax;