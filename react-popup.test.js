import React from 'react';
import ReactPopup from './dist/index';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { shallow } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

describe('React Popup', () => {
  it('should appear in DOM as <input type="button"/>', () => {
    const component = shallow(<ReactPopup/>)
    expect(component).toMatchSnapshot();
  });

  it('should display when button is clicked and hide when overlay is clicked', () => {
    const component = shallow(<ReactPopup/>);
    expect(component.find('.popup-display')).toHaveLength(0);
    expect(component).toMatchSnapshot();
    component.find('input').simulate('click');
    expect(component.find('.popup-display')).toHaveLength(1);
    expect(component).toMatchSnapshot();
    component.find('.popup-overlay').simulate('click');
    expect(component.find('.popup-display')).toHaveLength(0);
    expect(component).toMatchSnapshot();
  });
});
