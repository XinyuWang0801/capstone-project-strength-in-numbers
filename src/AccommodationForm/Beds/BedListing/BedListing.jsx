import PropTypes from 'prop-types';
import React from 'react';
import './BedListing.scss';

export const BedListing = (props) => {
  const {
    bedType, numberOfBeds, handleDelete, index, deletable,
  } = props;

  const onDeleteClicked = () => {
    handleDelete(index);
  };

  return (
    <div className="BedListing">
      <p className="BedListing__Type BedListing--noMargin">
        {numberOfBeds} {bedType}(s)
      </p>
      {deletable
        && (
          <button
            type="button"
            className="material-icons BedListing__DeleteBtn"
            onClick={onDeleteClicked}
            value={0}
          >
              delete
          </button>
        )
      }
    </div>
  );
};

BedListing.defaultProps = {
  numberOfBeds: '',
  bedType: '',
  deletable: true,
};

BedListing.propTypes = {
  numberOfBeds: PropTypes.number,
  bedType: PropTypes.string,
  handleDelete: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  deletable: PropTypes.bool,
};
