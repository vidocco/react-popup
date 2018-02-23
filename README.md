[![npm version](https://badge.fury.io/js/react-base-popup.svg)](https://badge.fury.io/js/react-base-popup)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/vidocco/react-popup)
[![Build Status](https://travis-ci.org/vidocco/react-popup.svg?branch=master)](https://travis-ci.org/vidocco/react-popup)
[![codecov](https://codecov.io/gh/vidocco/react-popup/branch/master/graph/badge.svg)](https://codecov.io/gh/vidocco/react-popup)
[![Maintainability](https://api.codeclimate.com/v1/badges/765751f97027fed7b3bf/maintainability)](https://codeclimate.com/github/vidocco/react-popup/maintainability)
[![NSP Status](https://nodesecurity.io/orgs/react-base-popup/projects/e08d46d5-0f44-4c15-9e32-4ad94d2b270c/badge)](https://nodesecurity.io/orgs/react-base-popup/projects/e08d46d5-0f44-4c15-9e32-4ad94d2b270c)
[![Inline docs](http://inch-ci.org/github/vidocco/react-popup.svg?branch=master)](http://inch-ci.org/github/vidocco/react-popup)


# react-base-popup

A simple and fully customizable modal/pop-up for React.

## Installation

```shell
npm install --save react-base-popup
```

## Importing

```js
import PopUp from 'react-base-popup';
```

## Usage

react-base-popup will display in the page as a button that, on click, will open up a modal display over the entire page. All of the components are fully customizable, there are callback functions available for when the modal appears (OnPop) and when it disappears (OnUnpop) and all props for react-base-popup are validated through PropTypes.

```js
import React from 'react';
import PopUp from 'react-base-popup';

class MyComponent extends React.Component {
  render() {
    /**
     * Pass any content that you want displayed on the modal within the two PopUp tags.
     * This content will only be displayed when the button is clicked.
     */
    <PopUp>
        <p>Hello World!</p>
    </PopUp>

    /**
     * You can use the onPop and onUnpop props to pass functions that you want to be
     * executed when the modal appears or disappears (respectively).
     */
    <PopUp
      onPop={() => console.log('Hello!')}
      onUnpop={() => console.log('Goodbye!')}>
    </PopUp>

    /**
     * All three components of react-base-popup are fully customizable with the standard
     * react styles. Read more about the available styles and names here:
     * https://reactjs.org/docs/dom-elements.html#style
     */
    <PopUp
      overlay={{backgroundColor: 'green'}}
      popup={{borderRadius: '50px'}}
      button={{width: '1000px', height: '1000px'}}>
    </PopUp>

    /**
     * Pass text to the buttonText prop to set the text of the button.
     */
    <PopUp
      buttonText="Click Me!">
    </PopUp>

    /**
     * Set the disable prop to true if you want not to display the button. This means that
     * you will need to use the pop prop to control the popup status (if set to true, it
     * will render the modal; if set to false it will hide it). You will need an external
     * function to make the modal work this way, something that can toggle the prop
     * status.
     */
    componentWillReceiveProps () {
      this.setState({togglePopUp: !this.state.togglePopUp});
    }

    <PopUp
      disable={true}
      pop={this.state.togglePopUp}>
    </PopUp>

    /**
     * If any of the props passed to react-base-popup are invalid, there will be a warning
     * in the console displaying the correct type expected for that specific prop.
     */
    <PopUp overlay={() => console.log('hello!')}> //will display a warning
    </PopUp>
  }
}
```

Refer to the [React documentation](https://facebook.github.io/react/docs/typechecking-with-proptypes.html) for more information.

## Future Features

- Make the button optional.
- Add prop to set a condition for displaying popup.
- Add functions for before popping and before disappearing.
- Add support for css modules.
- Add support for icons on button.

## Sending Feedback

Please feel free to write an issue in the official repo if you have any feedback, suggestions, improvements and (specially) if you bump into any bugs. I will be happy to solve them.

## Collaborating

If you want to collaborate with this project, please leave an issue beforehand to let us know and to ensure that you are not working on anything that is already on the way. Also please stick to the linting style guidelines and write appropriate tests for your suggestions.

Other than that, collaborators are welcome! :).