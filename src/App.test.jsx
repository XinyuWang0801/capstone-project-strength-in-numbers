import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import React from 'react';
import { App } from './App';

Enzyme.configure({ adapter: new Adapter() });

describe('render', () => {
  const getCMSContent = jest.fn();

  it('should render without crashing', () => {
    const component = shallow(<App getCMSContent={getCMSContent} />);

    expect(component).toMatchSnapshot();
  });
});
