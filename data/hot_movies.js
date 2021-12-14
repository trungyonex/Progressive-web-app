var movies_hot = [
    {
        name: "Avengers",
        rating: "7.3(imbd)",
        age: "16+",
        time: "2h 21min",
        content: "When Tony Stark and Bruce Banner try to jump-start a dormant peacekeeping program called Ultron, \
        things go horribly wrong and it's up to Earth's nightest heroes to stop the villainous Ultron from enacting his terrible plan.",
        starring: "Robert Downey Jr., Chris Evans, Mark Ruffalo",
        genres: "Action",
        tags: "Action, Adventure, Horror",
        link1: "https://www.imdb.com/video/vi2163260441?playlistId=tt4154796&ref_=tt_pr_ov_vi",
        link2: "https://www.imdb.com/title/tt4154796/",
        link3: "https://phim1080z.com/biet-doi-sieu-anh-hung-4-endgame",
    },
    {
        name: "Once Upon A Time",
        rating: "7.4(imbd)",
        age: "13+",
        time: "1h 42min",
        content: "Henry found his birth mother - Emma Swan after 10 years, she brings him back to Storybrooke. \
        Concerned for him, she decides to stay for a while, but soon comes to suspect that Storybrooke is more \
        than it seems. It's a place where magic has been forgotten, but is still powerfully close...where fairytale \
        characters are alive, even though they don't remember who they once were, and where the Evil Queen, known as Regina, \
        is now Henry's foster mother. The epic battle for the future of all worlds is beginning, and for good to win, \
        Emma will have to accept her destiny and fight like hell.",
        starring: "Lana Parrilla, Jennifer Morrison, Robert Carlyle",
        genres: "Action",
        tags: "Fantasy, Adventure, Drama",
        link1: "https://www.imdb.com/video/vi2163260441?playlistId=tt4154796&ref_=tt_pr_ov_vi",
        link2: "https://www.imdb.com/title/tt4154796/",
        link3: "https://phim1080z.com/biet-doi-sieu-anh-hung-4-endgame",
    },
    {
        name: "The Conjuring",
        rating: "7.5(imbd)",
        age: "16+",
        time: "1h 52min",
        content: "Paranomal investigators Ed and Lorraine Warren work to help\
        a family terrorized by a dark presence in their farmhouse.",
        starring: "Patrick Wilson, Vera Farminga, Ron Livingston",
        genres: "Horror",
        tags: "Horror, Mystery, Thriller",
        link1: "https://www.imdb.com/video/vi2163260441?playlistId=tt4154796&ref_=tt_pr_ov_vi",
        link2: "https://www.imdb.com/title/tt4154796/",
        link3: "https://phim1080z.com/biet-doi-sieu-anh-hung-4-endgame",
    }
]
const template_hot_movies = `<div class="slide slick-bg s-bg-POS">
<div class="container-fluid position-relative h-100">
  <div class="slider-inner h-100">
    <div class="row align-items-center h--100">
      <div class="col-xl-6 col-lg-12 col-md-12">
        <a href="javascript:void(0)">
          <div class="channel-logo" data-animation-in="fadeInLeft" data-delay-in="0.5">
            <img src="images/logo.png" class="c-logo" alt="" />
          </div>
        </a>
        <h1 class="slider-text big-title title text-uppercase" data-animation-in="fadeInLeft"
          data-delay-in="0.6">
          NAME
        </h1>
        <div class="d-flex flex-wrap align-items-center fadeInLeft animated" data-animation-in="fadeInLeft"
          style="opacity: 1">
          <div class="slider-ratting d-flex align-items-center mr-4 mt-2 mt-md-3">
            <ul
              class="ratting-start p-0 m-0 list-inline text-primary d-flex align-items-center justify-content-left">
              <li><i class="fa fa-star"></i></li>
              <li><i class="fa fa-star"></i></li>
              <li><i class="fa fa-star"></i></li>
              <li><i class="fa fa-star"></i></li>
              <li><i class="fa fa-star-half"></i></li>
            </ul>
            <span class="text-white ml-2">RATING</span>
          </div>
          <div class="d-flex align-items-center mt-2 mt-md-3">
            <span class="badge badge-secondary p-2">AGE</span>
            <span class="ml-3">TIME</span>
          </div>
        </div>
        <p data-animation-in="fadeInUp">
          CONTENT
        </p>
        <div class="trending-list" data-animation-in="fadeInUp" data-delay-in="1.2">
          <div class="text-primary title starring">
            Starring :
            <span class="text-body">STARRING</span>
          </div>
          <div class="text-primary title genres">
            Genres : <span class="text-body">GENRES</span>
          </div>
          <div class="text-primary title tag">
            Tags :
            <span class="text-body">TAGS</span>
          </div>
        </div>
        <div class="d-flex align-items-center r-mb-23 mt-4" data-animation-in="fadeInUp" data-delay-in="1.2">
          <a href="LINK3" class="btn btn-hover iq-button"><i class="fa fa-play mr-3"></i>Play Now</a>
          <a href="LINK2" class="btn btn-link">More Details</a>
        </div>
      </div>
    </div>
    <div class="col-xl-5 col-lg-12 col-md-12 trailor-video">
      <a href="LINK1" class="video-open playbtn">
        <img src="images/play.png" class="play" alt="" />
        <span class="w-trailor">Watch Trailer</span>
      </a>
    </div>
  </div>
</div>
</div>`;
let hot_movies = '';
for (let i = 0; i < movies_hot.length; i++) {
    let entry = template_hot_movies.replace(/POS/g, (i + 1))
      .replace(/NAME/g, movies_hot[i].name)
      .replace(/RATING/g, movies_hot[i].rating)
      .replace(/AGE/g, movies_hot[i].age)
      .replace(/TIME/g, movies_hot[i].time)
      .replace(/CONTENT/g, movies_hot[i].content)
      .replace(/STARRING/g, movies_hot[i].starring)
      .replace(/GENRES/g, movies_hot[i].genres)
      .replace(/TAGS/g, movies_hot[i].tags)
      .replace(/LINK1/g, movies_hot[i].link1)
      .replace(/LINK2/g, movies_hot[i].link2)
      .replace(/LINK3/g, movies_hot[i].link3)
      hot_movies += entry;
}
document.getElementById('home-slider').innerHTML = hot_movies;