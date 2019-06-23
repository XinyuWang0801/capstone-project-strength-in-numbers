import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import Enzyme, { shallow } from 'enzyme';
import React from 'react';

Enzyme.configure({ adapter: new Adapter() });

describe('render', () => {
  it('should render without crashing', () => {
    const component = shallow(<App />);

    expect(component).toMatchSnapshot();
  });
});
