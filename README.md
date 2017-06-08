Ember Medium Editor Button ![Download count all time](https://img.shields.io/npm/dt/ember-medium-editor-button.svg) [![npm](https://img.shields.io/npm/v/ember-medium-editor-button.svg)](https://www.npmjs.com/package/ember-medium-editor-button)
======

An Ember addon to quickly create custom buttons for [Ember Medium Editor](https://github.com/kolybasov/ember-medium-editor).

## Demo
https://stillhart.biz/project/MediumButton/

## Installation

To install, make sure you've installed [Ember Medium Editor](https://github.com/kolybasov/ember-medium-editor).

`ember install ember-medium-editor`

Then simply run:

`ember install ember-medium-editor-button`

## Usage

Ember Medium Editor Button exposes `medium-button` as an ES6 import. Follow the usage instructions in the [Medium Button](https://github.com/arcs-/medium-button#usage) plugin.

For example, the following code adds a custom button which generates a `<hr>` horizontal line.

``` javascript
import MediumButton from 'medium-button';

// Ember Medium Editor options
options: {
  extensions: {
    'hr': new MediumButton({
      label: '<i class="icon-hr"></i>',
      action(html, mark, parent) {
        Ember.$(parent).remove();
        return '<hr>';
      }
    })
  },
  toolbar: {
    buttons: [
      'hr'
    ]
  }  
};
```
