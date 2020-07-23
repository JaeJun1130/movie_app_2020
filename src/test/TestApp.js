import React from "react";
import axios from "axios";

import TestMovie from "../test/TestMovie";

class TestApp extends React.Component {
  state = {
    isLoding: true,
    movies: [],
  };
  getmovie = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies: movies, isLoding: false });
  };
  componentDidMount() {
    this.getmovie();
  }

  render() {
    const { isLoding, movies } = this.state;
    return (
      <div>
        <h1>
          {isLoding
            ? "Loding..."
            : movies.map((movie) => (
                <TestMovie
                  id={movie.id}
                  title={movie.title}
                  year={movie.year}
                  rating={movie.rating}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />
              ))}
        </h1>
      </div>
    );
  }
}

export default TestApp;
