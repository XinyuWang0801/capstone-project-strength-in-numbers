import React from 'react';
import {
  Bed01, Book, House01, MapLocation, MoneyBag, PictureAdd,
} from '../icons';
import { Beds } from './Beds';
import { BubbleIcon, Panel, ProgressBar } from '../@components';
import { Description } from './Description';
import { Location } from './Location';
import { Name } from './Name';
import { Photos } from './Photos';
import { Price } from './Price';
import './AccommodationForm.scss';

const FORM_ORDER = [
  { name: 'NAME', component: <Name />, icon: <House01 /> },
  { name: 'BEDS', component: <Beds />, icon: <Bed01 /> },
  { name: 'LOCATION', component: <Location />, icon: <MapLocation /> },
  { name: 'PRICE', component: <Price />, icon: <MoneyBag /> },
  { name: 'PHOTOS', component: <Photos />, icon: <PictureAdd /> },
  { name: 'DESCRIPTION', component: <Description />, icon: <Book /> },
];

export class AccommodationForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      progress: 0,
    };
  }

  getNextSection = (name) => {
    const currentSection = FORM_ORDER.findIndex(item => item.name === name);

    this.setState({
      progress: currentSection + 1,
    });
  }

  calculateProgress = () => {
    const { progress } = this.state;

    const completed = progress / FORM_ORDER.length * 100;

    return completed;
  }

  navigateToSection = (e) => {
    const section = FORM_ORDER.findIndex(item => item.name === e.value);

    this.setState({
      progress: section,
    });
  }

  render() {
    const { progress } = this.state;

    return (
      <div className="AccommodationForm">
        {FORM_ORDER.map((item, index) => (
          <Panel isMounted={progress === index} getNextSection={this.getNextSection}>{item.component}</Panel>
        ))}
        <div className="AccommodationForm__Footer">
          <ProgressBar now={this.calculateProgress()}>
            <div className="ProgressBar__Navigation">
              {FORM_ORDER.map((item, index) => (
                <BubbleIcon onClick={this.navigateToSection} value={item.name} toggled={index === progress}>
                  {React.cloneElement(item.icon, { width: '35px', height: '35px' })}
                </BubbleIcon>
              ))}
            </div>
          </ProgressBar>
        </div>
      </div>
    );
  }
}
