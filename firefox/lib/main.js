var pageMod = require('sdk/page-mod');
var tabs = require('sdk/tabs');
var self = require('sdk/self');

pageMod.PageMod({
  include: '*',
  contentStyleFile: self.data.url('catwalk.css'),
  contentScriptFile: [
    self.data.url('jquery-1.11.1.min.js'),
    self.data.url('catwalk.js')
  ],
  contentScript: '$.catwalk();'
});
