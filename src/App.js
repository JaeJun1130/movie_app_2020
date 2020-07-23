import React from "react";
import PropTypes from "prop-types";
import Movie from "./Movie";
import axios from "axios";

import "./Movie.css";

class App extends React.Component {
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
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoding: false });
  };

  componentDidMount() {
    //render 끝나고 실행
    this.getmovies();
  }

  render() {
    const { isLoding, movies } = this.state;
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
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default App;
