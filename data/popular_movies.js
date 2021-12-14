var movies_popular = [
    {
        img: "images/popular/u1.jpg",
        name: "Mulan",
        age: "10+",
        time: "2h",
        likes: "89+",
        link: "https://phim1080z.com/hoa-moc-lan-2020-huamulan-2020",
    },
    {
        img: "images/popular/u2.jpg",
        name: "Why Woman Kill 2",
        age: "18+",
        time: "2h 21min",
        likes: "35+",
        link: "https://phim1080z.com/duong-gia-chu-mau",
    },
    {
        img: "images/popular/u3.jpg",
        name: "Captain America",
        age: "12+",
        time: "2h 4min",
        likes: "99+",
        link: "https://phim1080z.com/captain-america-civil-war",
    },
    {
        img: "images/popular/u4.jpg",
        name: "Life of Pie",
        age: "11+",
        time: "2h 7min",
        likes: "19+",
        link: "https://phim1080z.com/cuoc-doi-vat-lon",
    },
    {
        img: "images/popular/u5.jpg",
        name: "Mission Mangal",
        age: "12+",
        time: "2h 10min",
        likes: "19+",
        link: "https://phim1080z.com/nhiem-vu-kha-thi-2021",
    },
]
const template_popular_movies = `<li class="slide-item">
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
let popular_movies = '';
for (let i = 0; i < movies_popular.length; i++) {
    let entry = template_popular_movies
      .replace(/IMG/g, movies_popular[i].img)
      .replace(/NAME/g, movies_popular[i].name)
      .replace(/AGE/g, movies_popular[i].age)
      .replace(/TIME/g, movies_popular[i].time)
      .replace(/LIKES/g, movies_popular[i].likes)
      .replace(/LINK/g, movies_popular[i].link)
      popular_movies += entry;
}
document.getElementById('popular_mv').innerHTML = popular_movies;