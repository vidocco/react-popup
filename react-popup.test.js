import React from 'react';
import ReactPopup from './dist/index';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { shallow } from 'enzyme';
import { stub } from 'sinon';

Enzyme.configure({ adapter: new Adapter() });

describe('React Popup DOM', () => {
  it('should appear in DOM as <input type="button"/>', () => {
    const component = shallow(<ReactPopup/>)
    expect(component).toMatchSnapshot();
    expect(component.find('.popup-display').exists()).toBe(false);
    expect(component.find('input').exists()).toBe(true);
  });

  it('should display when button is clicked and hide when overlay is clicked', () => {
    const component = shallow(<ReactPopup/>);
    expect(component.find('.popup-display').exists()).toBe(false);
    expect(component).toMatchSnapshot();
    component.find('input').simulate('click');
    expect(component.find('.popup-display').exists()).toBe(true);
    expect(component).toMatchSnapshot();
    component.find('.popup-overlay').simulate('click');
    expect(component.find('.popup-display').exists()).toBe(false);
    expect(component).toMatchSnapshot();
  });

  it('should render any children passed on popup', () => {
    const component = shallow(
      <ReactPopup>
        <p id="test-text">Hello World!</p>
      </ReactPopup>
    );
    expect(component.find('#test-text').exists()).toBe(false);
    expect(component).toMatchSnapshot();
    component.find('input').simulate('click');
    expect(component.find('#test-text').exists()).toBe(true);
    expect(component).toMatchSnapshot();
  })
});

describe('React Popup Styling', () => {
  it('should modify button styling if passed as props correctly', () => {
    const component = shallow(
      <ReactPopup button={{backgroundColor: 'green'}}>
        If you're reading this you've gone down the rabbit hole.
      </ReactPopup>
    )
    expect(component.find('input').prop('style')).toHaveProperty('backgroundColor', 'green');
  });

  it('should modify overlay styling if passed as props correctly', () => {
    const component = shallow(
      <ReactPopup overlay={{backgroundColor: 'green'}}>
        Seriously stop.
      </ReactPopup>
    )
    component.find('input').simulate('click');
    expect(component.find('.popup-overlay').prop('style')).toHaveProperty('backgroundColor', 'green');
  });

  it('should modify popup styling if passed as props correctly', () => {
    const component = shallow(
      <ReactPopup popup={{backgroundColor: 'green'}}>
        These are just tests dude, I'm sure you have better stuff to do.
      </ReactPopup>
    )
    component.find('input').simulate('click');
    expect(component.find('.popup').prop('style')).toHaveProperty('backgroundColor', 'green');
  });
});

describe('React Popup Callbacks', () => {
  it('should execute onPop callback when popup appears', () => {
    const popTest = stub();
    const component = shallow(
      <ReactPopup onPop={popTest}>
        Aw come on! You're still down here?
      </ReactPopup>
    )
    expect(popTest.callCount).toEqual(0);
    component.find('input').simulate('click');
    expect(popTest.callCount).toEqual(1);
    component.find('input').simulate('click');
    component.find('input').simulate('click');
    expect(popTest.callCount).toEqual(2);
    component.find('input').simulate('click');
    component.find('input').simulate('click');
    expect(popTest.callCount).toEqual(3);
  });

  it('should execute onUnpop callback when popup disappears', () => {
    const unpopTest = stub();
    const component = shallow(
      <ReactPopup onUnpop={unpopTest}>
        Aw come on! You're still down here?
      </ReactPopup>
    )
    expect(unpopTest.callCount).toEqual(0);
    component.find('input').simulate('click');
    component.find('input').simulate('click');
    expect(unpopTest.callCount).toEqual(1);
    component.find('input').simulate('click');
    component.find('input').simulate('click');
    expect(unpopTest.callCount).toEqual(2);
    component.find('input').simulate('click');
    component.find('input').simulate('click');
    expect(unpopTest.callCount).toEqual(3);
  });
});

describe('React Popup PropTypes', () => {

});