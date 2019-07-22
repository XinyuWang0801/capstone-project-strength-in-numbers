import React from 'react';
import './PropertyCard.scss';

// https://icons8.com/icons/set/bathroom

export const PropertyCard = (props) => {
  const {
    className, name, price, address, beds, bathrooms, onClick,
  } = props;

  const handleClick = () => {
    if (onClick === undefined) { return; }
    onClick();
  };

  return (
    <div className={`PropertyCard ${className}`} onClick={handleClick}>
      <img className="PropertyCard__Image" src="https://i1.wp.com/www.decomagz.com/wp-content/uploads/2017/10/Modern-and-Cool-Shipping-Container-Guest-House-15.jpg?w=1080&ssl=1" alt="Accommodation" />
      <div className="PropertyCard__Info">
        <p className="PropertyCard__Name">{name}</p>
        <p className="PropertyCard__Price">${price} per night</p>
        <p className="PropertyCard__Address">{address}</p>
        <div className="PropertyCard__Info__Extras">
          <p><i className="material-icons">hotel</i>{beds} beds</p>
          <p>
            <img src="https://img.icons8.com/metro/26/000000/shower-and-tub.png" alt="bathrooms" />
            {bathrooms} Bath
          </p>
        </div>
      </div>
    </div>
  );
};
