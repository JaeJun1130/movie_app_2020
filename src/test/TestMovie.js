import React from "react";
import PropTypes from "prop-types";

function TestMovie({ id, title, year, rating, summary, poster, genres }) {
  return (
    <div>
      <h5>{title}</h5>
      <div>
        <ul>
          {genres.map((genrs) => (
            <li>{genrs}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

TestMovie.prototype = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TestMovie;
