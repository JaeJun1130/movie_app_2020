import React from "react";
import axios from "axios";

import "./Home.css";
import Movie from "../components/Movie";

class Home extends React.Component {
    state = {
        isLoding: true,
        movies: [],
    };

    getmovies = async () => {
        //api axios를 통해 api 를 가져오는 함수 (async await)
        const {
            data: {
                data: { movies },
            },
        } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
        this.setState({ movies, isLoding: false });
    };

    componentDidMount() {
        //render 끝나고 실행
        this.getmovies();
    }

    render() {
        const { isLoding, movies } = this.state;
        // console.log(movies);
        return (
            <section className="container">
                {isLoding ? (
                    <div className="loader">
                        <span className="loader__text">Loding...</span>
                    </div>
                ) : (
                    <div className="movies">
                        {movies.map((movie) => (
                            <Movie
                                key={movie.id}
                                id={movie.id}
                                year={movie.year}
                                title={movie.title}
                                summary={movie.summary}
                                poster={movie.medium_cover_image}
                                genres={movie.genres}
                                background_image={movie.background_image}
                                slug={movie.slug}
                                rating={movie.rating}
                                trailer={movie.yt_trailer_code}
                                runtime={movie.runtime}
                            />
                        ))}
                    </div>
                )}
            </section>
        );
    }
}

export default Home;
