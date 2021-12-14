var trending_movies = [
    {
        img: "images/top-10/01.jpg",
        name: "Harry Potter",
        age: "10+",
        num: "7 Parts",
        link: "https://phim1080z.com/tim-kiem/Harry%20Potter",
    },
    {
        img: "images/top-10/02.jpg",
        name: "The Queen's Gambit",
        age: "18+",
        num: "1 Season",
        link: "https://www.imdb.com/title/tt10048342/",
    },
    {
        img: "images/top-10/03.jpg",
        name: "Scam 1992",
        age: "12+",
        num: "1 Season",
        link: "https://www.imdb.com/title/tt12392504/?ref_=fn_al_tt_1",
    },
    {
        img: "images/top-10/04.jpg",
        name: "Stranger Things",
        age: "16+",
        num: "3 Season",
        link: "https://www.imdb.com/title/tt4574334/?ref_=fn_al_tt_1",
    },
    {
        img: "images/top-10/05.jpg",
        name: "Cruella 2021",
        age: "15+",
        num: "6 Season",
        link: "https://www.imdb.com/title/tt3228774/?ref_=fn_al_tt_2",
    },
    {
        img: "images/top-10/06.jpg",
        name: "Peaky Blinders",
        age: "20+",
        num: "5 Season",
        link: "https://www.imdb.com/title/tt2442560/?ref_=fn_al_tt_1",
    },
]
const template_list_trending_movies = `
<li class="slick-bg">
    <a href="#">
    <img src="IMG" class="img-fluid w-100" alt="" />
    <h6 class="iq-title"><a href="#">NAME</a></h6>
    </a>
</li>
`;
let list_trending_movies = '';
for (let i = 0; i < trending_movies.length; i++) {
    let entry = template_list_trending_movies
      .replace(/IMG/g, trending_movies[i].img)
      .replace(/NAME/g, trending_movies[i].name)
      list_trending_movies += entry;
}
document.getElementById('top-ten-slider').innerHTML = list_trending_movies;

const template_trending_movies = `
<li>
    <div class="block-images position-relative">
        <a href="#">
        <img src="IMG" class="img-fluid w-100" alt="" />
        </a>
        <div class="block-description">
            <h5>NAME</h5>
            <div class="movie-time d-flex align-items-center my-2">
                <div class="badge badge-secondary p-1 mr-2">
                AGE
                </div>
                <span class="text-white">NUM</span>
            </div>
            <div class="hover-buttons">
                <a href="LINK" class="btn btn-hover" tabindex="0">
                <i class="fa fa-play mr-1" aria-hidden="true"></i>
                Play Now
                </a>
            </div>
        </div>
    </div>
</li>
`;

let movies_trending = '';
for (let i = 0; i < trending_movies.length; i++) {
    let entry = template_trending_movies
      .replace(/IMG/g, trending_movies[i].img)
      .replace(/NAME/g, trending_movies[i].name)
      .replace(/AGE/g, trending_movies[i].age)
      .replace(/NUM/g, trending_movies[i].num)
      .replace(/LINK/g, trending_movies[i].link)
      movies_trending += entry;
}
document.getElementById('top-ten-slider-nav').innerHTML = movies_trending;