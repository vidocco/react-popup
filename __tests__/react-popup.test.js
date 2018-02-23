import React from 'react';
import ReactPopup from '../src/react-popup';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { shallow } from 'enzyme';
import { stub } from 'sinon';

Enzyme.configure({ adapter: new Adapter() });

describe('React Popup DOM', () => {
  it('should appear in DOM as <input type="button"/>', () => {
    const component = shallow(<ReactPopup/>)
    expect(component.html()).toMatchSnapshot();
    expect(component.find('.popup-display').exists()).toBe(false);
    expect(component.find('input').exists()).toBe(true);
  });

  it('should display when button is clicked and hide when overlay is clicked', () => {
    const component = shallow(<ReactPopup/>);
    expect(component.find('.popup-display').exists()).toBe(false);
    expect(component.html()).toMatchSnapshot();
    component.find('input').simulate('click');
    expect(component.find('.popup-display').exists()).toBe(true);
    expect(component.html()).toMatchSnapshot();
    component.find('.popup-overlay').simulate('click');
    expect(component.find('.popup-display').exists()).toBe(false);
    expect(component.html()).toMatchSnapshot();
  });

  it('should render any children passed on popup', () => {
    const component = shallow(
      <ReactPopup>
        <p id="test-text">Hello World!</p>
      </ReactPopup>
    );
    expect(component.find('#test-text').exists()).toBe(false);
    expect(component.html()).toMatchSnapshot();
    component.find('input').simulate('click');
    expect(component.find('#test-text').exists()).toBe(true);
    expect(component.html()).toMatchSnapshot();
  })

  it('should not render the button if the disabled prop is set to true', () => {
    const component = shallow(
      <ReactPopup disable={true}>
      </ReactPopup>
    );
    expect(component.find('input').exists()).toBe(false);
    expect(component.html()).toMatchSnapshot();
  })

  it('should render/hide the popup if the pop prop is set to true/false', () => {
    const component = shallow(
      <ReactPopup pop={true}>
      </ReactPopup>
    );
    expect(component.find('.popup-display').exists()).toBe(true);
    expect(component.html()).toMatchSnapshot();
    component.setProps({pop: false});
    expect(component.find('.popup-display').exists()).toBe(false);
    expect(component.html()).toMatchSnapshot();
    component.setProps({pop: true});
    expect(component.find('.popup-display').exists()).toBe(true);
    expect(component.html()).toMatchSnapshot();
  })

  it('not setting pop or setting it to undefined, should not execute the callback', () => {
    const component = shallow(
      <ReactPopup pop={true}>
      </ReactPopup>
    )
    expect(component.find('.popup-display').exists()).toBe(true);
    component.setProps({pop: undefined});
    expect(component.find('.popup-display').exists()).toBe(true);
    expect(component.html()).toMatchSnapshot();
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
  let cbTest;

  beforeEach(() => {
    cbTest = stub();
  })

  it('should execute onPop callback when popup appears', () => {
    const component = shallow(
      <ReactPopup onPop={cbTest}>
        Aw come on! You're still down here?
      </ReactPopup>
    )
    expect(cbTest.callCount).toEqual(0);
    component.find('input').simulate('click');
    expect(cbTest.callCount).toEqual(1);
    component.find('input').simulate('click');
    component.find('input').simulate('click');
    expect(cbTest.callCount).toEqual(2);
    component.find('input').simulate('click');
    component.find('input').simulate('click');
    expect(cbTest.callCount).toEqual(3);
  });

  it('should execute onUnpop callback when popup disappears', () => {
    const component = shallow(
      <ReactPopup onUnpop={cbTest}>
        This is not the easter egg you're looking for...
      </ReactPopup>
    )
    expect(cbTest.callCount).toEqual(0);
    component.find('input').simulate('click');
    component.find('input').simulate('click');
    expect(cbTest.callCount).toEqual(1);
    component.find('input').simulate('click');
    component.find('input').simulate('click');
    expect(cbTest.callCount).toEqual(2);
    component.find('input').simulate('click');
    component.find('input').simulate('click');
    expect(cbTest.callCount).toEqual(3);
  });
});

describe('React Popup PropTypes', () => {
  let warning;

  beforeEach(() => {
    warning = stub(console, 'error');
  })

  afterEach(() => {
    console.error.restore();
  })

  it('should throw a console.warning if wrong type is passed to onPop', () => {
    shallow (
      <ReactPopup onPop="Somebody"/>
    )
    expect(warning.callCount).toEqual(1);
  });

  it('should throw a console.warning if wrong type is passed to onUnpop', () => {
    shallow (
      <ReactPopup onUnpop="once"/>
    )
    expect(warning.callCount).toEqual(1);
  });

  it('should throw a console.warning if wrong type is passed to overlay', () => {
    shallow (
      <ReactPopup overlay="told me"/>
    )
    expect(warning.callCount).toEqual(1);
  });

  it('should throw a console.warning if wrong type is passed to popup', () => {
    shallow (
      <ReactPopup popup="the world"/>
    )
    expect(warning.callCount).toEqual(1);
  });

  it('should throw a console.warning if wrong type is passed to button', () => {
    shallow (
      <ReactPopup button="is gonna"/>
    )
    expect(warning.callCount).toEqual(1);
  });

  it('should throw a console.warning if wrong type is passed to buttonText', () => {
    let rollMe = 4;
    shallow (
      <ReactPopup buttonText={rollMe}/>
    )
    expect(warning.callCount).toEqual(1);
  });

});