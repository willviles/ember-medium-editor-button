(function() {
  function vendorModule() {
    'use strict';

    return {
      'default': self['MediumButton'] || function() {},
      __esModule: true,
    };
  }

  define('medium-button', [], vendorModule);  // eslint-disable-line
}());
