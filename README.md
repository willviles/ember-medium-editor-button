# Ember Medium Editor Button

This Ember Addon extends the functionality of [ember-cli-medium-editor](https://github.com/lukebrenton/ember-cli-medium-editor) to include [MediumButton](https://github.com/orthes/medium-editor-insert-plugin). MediumButton enables a quick way to add custom buttons to the [Medium Editor](https://github.com/yabwe/medium-editor) toolbar.

## Demo
https://stillhart.biz/project/MediumButton/

## Installation

To install, make sure you've installed [ember-cli-medium-editor](https://github.com/lukebrenton/ember-cli-medium-editor).

`ember install ember-cli-medium-editor`

Then simply run:

`ember install ember-medium-editor-button`

To satisfy jshint, add `MediumButton` to the predef array in .jshintrc.

## Usage

Follow the usage instructions in the [MediumButton](https://github.com/arcs-/medium-button#usage) plugin.

This addon simply includes the plugin via Bower and exposes MediumButton as an ES6 import.

``` javascript
import MediumButton from 'ember-medium-editor-button';
```

## Example

The following example adds a simple custom button which generates a `<hr>` horizontal line.

``` javascript
import MediumButton from 'ember-medium-editor-button';

{
  options: {
    // ... ember-cli-medium-editor options
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
  }
}
```
