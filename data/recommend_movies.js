var recommend_movies = [
    {
        img: "images/tvthrillers/01.jpg",
        name: "The Martian",
        age: "15+",
        time: "2h 45min",
        likes: "89+",
        link: "https://phim1080z.com/the-martian"
    },
    {
        img: "images/tvthrillers/02.jpg",
        name: "Unhinged",
        age: "7+",
        time: "2h 12min",
        likes: "35+",
        link: "https://phim1080z.com/ke-cuong-sat"
    },
    {
        img: "images/tvthrillers/03.jpg",
        name: "Kingsman",
        age: "18+",
        time: "3h",
        likes: "99+",
        link: "https://phim1080z.com/tim-kiem/Kingsman"
    },
    {
        img: "images/tvthrillers/04.jpg",
        name: "Casino Royale",
        age: "18+",
        time: "1h 55min",
        likes: "19+",
        link: "https://phim1080z.com/bad-times-at-the-el-royale"
    },
    {
        img: "images/tvthrillers/05.jpg",
        name: "Mision Impossible",
        age: "17+",
        time: "1h 35min",
        likes: "19+",
        link: "https://phim1080z.com/tim-kiem/Mision%20Impossible"
    },
]

const template_recommend_movies = `
<li class="slide-item">
    <div class="block-images position-relative">
      <div class="img-box">
        <img src="IMG" class="img-fluid" alt="" />
      </div>
      <div class="block-description">
        <h6 class="iq-title">
          <a href="#">NAME</a>
        </h6>
        <div class="movie-time d-flex align-items-center my-2">
          <div class="badge badge-secondary p-1 mr-2">AGE</div>
          <span class="text-white">TIME</span>
        </div>
        <div class="hover-buttons">
          <a href="LINK"><span class="btn btn-hover iq-button">
            <i class="fa fa-play mr-1"></i>
            Play Now
          </span></a>
        </div>
      </div>
      <div class="block-social-info">
        <ul class="list-inline p-0 m-0 music-play-lists">
          <li class="share">
            <span><i class="fa fa-share-alt"></i></span>
            <div class="share-box">
              <div class="d-flex align-items-center">
                <a href="#" class="share-ico"><i class="fa fa-share-alt"></i></a>
                <a href="#" class="share-ico"><i class="fa fa-youtube"></i></a>
                <a href="#" class="share-ico"><i class="fa fa-instagram"></i></a>
              </div>
            </div>
          </li>
          <li>
            <span><i class="fa fa-heart"></i></span>
            <span class="count-box">LIKES</span>
          </li>
          <li>
            <span><i class="fa fa-plus"></i></span>
          </li>
        </ul>
      </div>
    </div>
  </li>
`;
let movies_recommend = '';
for (let i = 0; i < recommend_movies.length; i++) {
    let entry = template_recommend_movies
      .replace(/IMG/g, recommend_movies[i].img)
      .replace(/NAME/g, recommend_movies[i].name)
      .replace(/AGE/g, recommend_movies[i].age)
      .replace(/TIME/g, recommend_movies[i].time)
      .replace(/LIKES/g, recommend_movies[i].likes)
      .replace(/LINK/g, recommend_movies[i].link)
      movies_recommend += entry;
}
document.getElementById('recommend_mv').innerHTML = movies_recommend;