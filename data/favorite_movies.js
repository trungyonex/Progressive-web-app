var movies_favorite = [
    {
        img: "images/favorite/f1.jpg",
        name: "Insidious",
        age: "16+",
        time: "1h 43min",
        likes: "19+",
        link: "https://phim1080z.com/quy-quyet-3",
    },
    {
        img: "images/favorite/f2.jpg",
        name: "War",
        age: "12+",
        time: "2h 34min",
        likes: "58+",
        link: "https://phim1080z.com/penthouse-cuoc-chien-thuong-luu-phan-3/tap-1-su-khoi-dau",
    },
    {
        img: "images/favorite/f3.jpg",
        name: "Five Feet Apart",
        age: "18+",
        time: "2h 57min",
        likes: "19+",
        link: "https://phim1080z.com/nam-buoc-de-yeu",
    },
    {
        img: "images/favorite/f4.jpg",
        name: "Chhichore",
        age: "10+",
        time: "2h 23min",
        likes: "19+",
        link: "https://www.youtube.com/watch?v=YrXneG7LZDI",
    },
    {
        img: "images/favorite/f5.jpg",
        name: "Doctor Strange",
        age: "12+",
        time: "1h 55min",
        likes: "19+",
        link: "https://www.ssphim.net/phim/doctor-strange-phu-thuy-toi-thuong",
    },
]
const template_favorite_movies = `<li class="slide-item">
    <div class="block-images position-relative">
        <div class="img-box">
        <img src="IMG" class="img-fluid" alt="" />
        </div>
        <div class="block-description">
        <h6 class="iq-title">
            <a href="#"> NAME </a>
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
</li>`;
let favorite_movies = '';
for (let i = 0; i < movies_favorite.length; i++) {
    let entry = template_favorite_movies
      .replace(/IMG/g, movies_favorite[i].img)
      .replace(/NAME/g, movies_favorite[i].name)
      .replace(/AGE/g, movies_favorite[i].age)
      .replace(/TIME/g, movies_favorite[i].time)
      .replace(/LIKES/g, movies_favorite[i].likes)
      .replace(/LINK/g, movies_favorite[i].link)
      favorite_movies += entry;
}
document.getElementById('favorite_mv').innerHTML = favorite_movies;