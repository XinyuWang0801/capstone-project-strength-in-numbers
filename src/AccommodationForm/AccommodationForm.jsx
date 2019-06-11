import React from 'react';
import { Beds } from './Beds';
import { Description } from './Description';
import { Location } from './Location';
import { Name } from './Name';
import { Photos } from './Photos';
import { Price } from './Price';
import { ProgressBar } from 'react-bootstrap';
import './AccommodationForm.scss';

const FORM_ORDER = [
  { name: 'NAME', component: <Name /> },
  { name: 'BEDS', component: <Beds /> },
  { name: 'LOCATION', component: <Location /> },
  { name: 'PRICE', component: <Price /> },
  { name: 'PHOTOS', component: <Photos /> },
  { name: 'DESCRIPTION', component: <Description /> },
];

export class AccommodationForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      progress: 0,
      currentSection: <Name getNextSection={this.getNextSection} />,
    };
  }

  getNextSection = (name) => {
    const currentSection = FORM_ORDER.findIndex(item => item.name === name);

    this.setState({
      progress: currentSection + 1,
      currentSection: React.cloneElement(FORM_ORDER[currentSection + 1].component, { getNextSection: this.getNextSection }),
    });
  }

  calculateProgress = () => {
    const { progress } = this.state;

    const completed = progress / FORM_ORDER.length * 100;

    return completed;
  }

  navigateToSection = (e) => {
    const section = FORM_ORDER.findIndex(item => item.name === e.target.value);

    this.setState({
      progress: section,
      currentSection: React.cloneElement(FORM_ORDER[section].component, { getNextSection: this.getNextSection }),
    });
  }

  render() {
    const { currentSection } = this.state;

    return (
      <div className="AccommodationForm">
        {currentSection}
        <div className="AccommodationForm__Footer">
          <div className="ProgressBar">
            <ProgressBar className="ProgressBar__Container" now={this.calculateProgress()} />
            <div className="ProgressBar__Navigation">
              {FORM_ORDER.map(item => (
                <button type="button" onClick={this.navigateToSection} value={item.name}>
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
