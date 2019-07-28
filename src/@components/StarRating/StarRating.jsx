import PropTypes from 'prop-types';
import React from 'react';
import './StarRating.scss';

const FILLED_STAR = 1;
const UNFILLED_STAR = 0;

const StarRating = (props) => {
  const { ratingNum } = props;

  const generateStars = () => {
    const maxStars = 5;
    const stars = new Array(maxStars).fill(UNFILLED_STAR);
    return stars.fill(FILLED_STAR, 0, ratingNum);
  };

  return (
    <div className="StarRating">
      {generateStars().map((item) => {
        if (item === FILLED_STAR) {
          return <i className="material-icons StarRating__Filled">star_rate</i>;
        }
        return <i className="material-icons">star_rate</i>;
      })}
    </div>
  );
};

StarRating.defaultProps = {
  ratingNum: 0,
};

StarRating.propTypes = {
  ratingNum: PropTypes.number,
};

export default StarRating;
