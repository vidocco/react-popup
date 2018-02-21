// required file for mocking styling on jest (since we are testing customization of styles too).
module.exports = {
  'popup-display': {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    '-webkit-box-pack': 'center',
    '-ms-flex-pack': 'center',
    'justify-content': 'center',
    '-webkit-box-align': 'center',
    '-ms-flex-align': 'center',
    'align-items': 'center',
  },
  'popup-overlay': {
    position: 'absolute',
    'z-index': 1,
    '-webkit-animation': 'fade 0.35s ease-in-out',
    animation: 'fade 0.35s ease-in-out',
  },
  '.popup': {
    '-webkit-animation': 'fade 0.35s ease-in',
    animation: 'fade 0.35s ease-in',
  },
  '@-webkit-keyframes fade': {
    '0%': {
      opacity: 0,
      '-ms-filter': 'progid:DXImageTransform.Microsoft.Alpha(Opacity=0)',
    },
    '100%': {
      opacity: 1,
      '-ms-filter': 'progid:DXImageTransform.Microsoft.Alpha(Opacity=100)',
    },
  },
  '@keyframes fade': {
    '0%': {
      opacity: 0,
      '-ms-filter': 'progid:DXImageTransform.Microsoft.Alpha(Opacity=0)',
    },
    '100%': {
      opacity: 1,
      '-ms-filter': 'progid:DXImageTransform.Microsoft.Alpha(Opacity=100)',
    },
  },
}