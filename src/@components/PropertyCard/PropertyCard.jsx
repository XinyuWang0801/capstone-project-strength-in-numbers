import React from 'react';
import { Bed02, Toilet } from '../../icons';
import { Empty, Icon } from 'antd';
import './PropertyCard.scss';

const BedIcon = props => <Icon component={Bed02} {...props} />;
const ToiletIcon = props => <Icon component={Toilet} {...props} />;

export const PropertyCard = (props) => {
  const {
    id, className, name, price, address, beds, bathrooms, onClick, photo,
  } = props;

  const handleClick = () => {
    if (onClick === undefined) { return; }
    onClick(id);
  };

  return (
    <div className={`PropertyCard ${className}`} onClick={handleClick}>
      {photo ? <img className="PropertyCard__Image" src={photo} alt="Accommodation" />
        : <Empty className="PropertyCard__Image" style={{ position: 'relative', top: '50px' }} />
      }
      <div className="PropertyCard__Info">
        <p className="PropertyCard__Name">{name}</p>
        <p className="PropertyCard__Price">${price} per night</p>
        <p className="PropertyCard__Address">{address}</p>
        <div className="PropertyCard__Info__Extras">
          <span className=""><BedIcon style={{ fontSize: '2em', color: '#007bff' }} />{beds} beds</span>
          <span className=""><ToiletIcon style={{ fontSize: '2em', color: '#007bff' }} />{bathrooms} bathrooms</span>
        </div>
      </div>
    </div>
  );
};
