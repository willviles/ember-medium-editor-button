/* eslint-env node */
'use strict';

const Funnel = require('broccoli-funnel');
const mergeTrees = require('broccoli-merge-trees');
const map = require('broccoli-stew').map;
const path = require('path');

const { join } = path;

module.exports = {
  name: 'ember-medium-editor-button',

  included(app) {
    if (typeof app.import !== 'function' && app.app) {
      app = app.app;
    }
    this.app = app;

    // Setup paths
    let vendorPath = this.treePaths.vendor;

    this.import({
      development: join(vendorPath, 'medium-button', 'src', 'medium-button.js'),
      production: join(vendorPath, 'medium-button', 'dist', 'medium-button.min.js')
    });

    this.import(path.join(vendorPath, 'shims', 'medium-button.js'));

    return this._super.included.apply(this, arguments);

  },

  treeForVendor(vendorTree) {
    let moduleName = 'medium-button';
    let modulePath = path.join(require.resolve(moduleName), '..', '..');

    let tree = new Funnel(modulePath, {
      include: ['src/**/*', 'dist/**/*'],
      destDir: moduleName
    });

    tree = map(tree, (content) => `if (typeof FastBoot === 'undefined') { ${content} }`);

    return mergeTrees([vendorTree, tree]);
  }

};
