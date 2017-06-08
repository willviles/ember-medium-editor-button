import Ember from 'ember';
import MediumButton from 'medium-button';

export default Ember.Route.extend({
  init() {
    let test = new MediumButton({
      label:'<b>B</b>',
      start:'<b>',
      end:'</b>'
    });

    console.log(test); // eslint-disable-line
  }
});
