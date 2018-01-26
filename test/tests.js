import React from 'react';
import ReactPopup from '../lib/react-popup.js';

describe('ReactPopup', function() {
  let component;
  let props;
  let children;

  beforeEach(function() {
    component = React.addons.TestUtils.renderIntoDocument(
      <ReactPopup/>
    );
    props = React.addons.TestUtils.renderIntoDocument(
      <ReactPopup
        overlay={{width: '50%', height: '50%', backgroundColor: 'red'}}
        popup={{width: '300px', height: '300px', backgroundColor: 'green'}}
        buttonText="Hello World!"
      />
    );
    children = React.addons.TestUtils.renderIntoDocument(
      <ReactPopup>
        <p className="popup-contents">Hello World!</p>
      </ReactPopup>
    );
  });

  it('should render', () => {
    expect(React.findDOMNode(component).classList[0]).toEqual('react-popup');
  });

  it('should appear and dissappear', () => {
    expect(React.findDOMNode(component).getElementsByClassName('popup-display').length).toEqual(0);
    expect(React.findDOMNode(component).children.length).toEqual(1);
    component.pop();
    expect(React.findDOMNode(component).getElementsByClassName('popup-display').length).toEqual(1);
    expect(React.findDOMNode(component).children.length).toEqual(2);
    component.pop();
    expect(React.findDOMNode(component).getElementsByClassName('popup-display').length).toEqual(0);
    expect(React.findDOMNode(component).children.length).toEqual(1);
  });

  it('should correctly take and apply props', () => {
    expect(React.findDOMNode(props).children[0].value).toEqual('Hello World!');
    props.pop();
    expect(React.findDOMNode(props).children[0].children[0].style.width).toEqual('50%');
    expect(React.findDOMNode(props).children[0].children[0].style.height).toEqual('50%');
    expect(React.findDOMNode(props).children[0].children[0].style.backgroundColor).toEqual('red');
    expect(React.findDOMNode(props).children[0].children[1].style.width).toEqual('300px');
    expect(React.findDOMNode(props).children[0].children[1].style.height).toEqual('300px');
    expect(React.findDOMNode(props).children[0].children[1].style.backgroundColor).toEqual('green');
  });

  it('should apply default values if no props are passed', () => {
    expect(React.findDOMNode(component).children[0].value).toEqual('show');
    component.pop();
    expect(React.findDOMNode(component).children[0].children[0].style.width).toEqual('100%');
    expect(React.findDOMNode(component).children[0].children[0].style.height).toEqual('100%');
    expect(React.findDOMNode(component).children[0].children[0].style.backgroundColor).toEqual('rgba(0, 0, 0, 0.4)');
    expect(React.findDOMNode(component).children[0].children[1].style.width).toEqual('450px');
    expect(React.findDOMNode(component).children[0].children[1].style.height).toEqual('650px');
    expect(React.findDOMNode(component).children[0].children[1].style.backgroundColor).toEqual('white');
  });

  it('should correctly display children on pop', () => {
    children.pop();
    expect(React.findDOMNode(children).getElementsByClassName('popup-contents').length).toEqual(1);
  });
});
