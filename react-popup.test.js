import React from 'react';
import ReactPopup from './index.js';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

describe('React Popup', () => {
  // beforeEach(() => {
  //   component = renderer.create(
  //     <ReactPopup/>
  //   );
  //   props = renderer.create(
  //     <ReactPopup
  //       overlay={{width: '50%', height: '50%', backgroundColor: 'red'}}
  //       popup={{width: '300px', height: '300px', backgroundColor: 'green'}}
  //       buttonText="Hello World!"
  //     />
  //   );
  //   children = renderer.create(
  //     <ReactPopup>
  //       <p className="popup-contents">Hello World!</p>
  //     </ReactPopup>
  //   );
  // });

  test('should render', () => {
    const component = renderer
      .create(<ReactPopup/>)
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  test('should appear and dissappear', () => {
    const component = shallow(<ReactPopup/>);
    expect(component.find('.popup-display')).to.have.length(0);
    // // manually trigger the callback
    // popTest.props.onClick();
    // // re-rendering
    // popTest = component.toJSON();
    // expect(popTest).toMatchSnapshot();
    // // manually trigger the callback
    // popTest.props.onClick();
    // // re-rendering
    // popTest = component.toJSON();
    // expect(popTest).toMatchSnapshot();
    // const checkbox = shallow(<CheckboxWithLabel labelOn="On" labelOff="Off" />);

    // expect(checkbox.text()).toEqual('Off');
  
    // checkbox.find('input').simulate('change');
  
    // expect(checkbox.text()).toEqual('On');

    // expect(React.findDOMNode(component).getElementsByClassName('popup-display').length).toEqual(0);
    // expect(React.findDOMNode(component).children.length).toEqual(1);
    // component.pop();
    // expect(React.findDOMNode(component).getElementsByClassName('popup-display').length).toEqual(1);
    // expect(React.findDOMNode(component).children.length).toEqual(2);
    // component.pop();
    // expect(React.findDOMNode(component).getElementsByClassName('popup-display').length).toEqual(0);
    // expect(React.findDOMNode(component).children.length).toEqual(1);
  });

  // test('should correctly take and apply props', () => {
  //   expect(React.findDOMNode(props).children[0].value).toEqual('Hello World!');
  //   props.pop();
  //   expect(React.findDOMNode(props).children[0].children[0].style.width).toEqual('50%');
  //   expect(React.findDOMNode(props).children[0].children[0].style.height).toEqual('50%');
  //   expect(React.findDOMNode(props).children[0].children[0].style.backgroundColor).toEqual('red');
  //   expect(React.findDOMNode(props).children[0].children[1].style.width).toEqual('300px');
  //   expect(React.findDOMNode(props).children[0].children[1].style.height).toEqual('300px');
  //   expect(React.findDOMNode(props).children[0].children[1].style.backgroundColor).toEqual('green');
  // });

  // test('should apply default values if no props are passed', () => {
  //   expect(React.findDOMNode(component).children[0].value).toEqual('show');
  //   component.pop();
  //   expect(React.findDOMNode(component).children[0].children[0].style.width).toEqual('100%');
  //   expect(React.findDOMNode(component).children[0].children[0].style.height).toEqual('100%');
  //   expect(React.findDOMNode(component).children[0].children[0].style.backgroundColor).toEqual('rgba(0, 0, 0, 0.4)');
  //   expect(React.findDOMNode(component).children[0].children[1].style.width).toEqual('450px');
  //   expect(React.findDOMNode(component).children[0].children[1].style.height).toEqual('650px');
  //   expect(React.findDOMNode(component).children[0].children[1].style.backgroundColor).toEqual('white');
  // });

  // test('should correctly display children on pop', () => {
  //   children.pop();
  //   expect(React.findDOMNode(children).getElementsByClassName('popup-contents').length).toEqual(1);
  // });
});
