import React from 'react';
import { ACCOMMODATION_FORM_ORDER_UPDATED } from '../actions';
import {
  Bathroom, Bed01, Book, House01, MapLocation, MoneyBag, PictureAdd,
} from '../../icons';
import { Bathrooms } from '../../AccommodationForm/Bathrooms';
import { Beds } from '../../AccommodationForm/Beds';
import { Description } from '../../AccommodationForm/Description';
import { Location } from '../../AccommodationForm/Location';
import { Name } from '../../AccommodationForm/Name';
import { Photos } from '../../AccommodationForm/Photos';
import { Price } from '../../AccommodationForm/Price';

const FORM_ORDER = [
  { name: 'DESCRIPTION', component: <Description />, icon: <Book /> },
  { name: 'NAME', component: <Name />, icon: <House01 /> },
  { name: 'BEDS', component: <Beds />, icon: <Bed01 /> },
  { name: 'BATHROOM', component: <Bathrooms />, icon: <Bathroom /> },
  { name: 'LOCATION', component: <Location />, icon: <MapLocation /> },
  { name: 'PRICE', component: <Price />, icon: <MoneyBag /> },
  { name: 'PHOTOS', component: <Photos />, icon: <PictureAdd /> }
];

export const initialState = {
  progress: 0,
  formOrder: FORM_ORDER,
};

export default (state = initialState, action) => {
  switch (action.type) {
  case ACCOMMODATION_FORM_ORDER_UPDATED:
    return Object.assign({}, state, {
      progress: action.payload,
    });
  default:
    return state;
  }
};
