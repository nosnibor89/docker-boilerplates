var casper = require('casper').create();

var cSite = 'http://casperjs.org/';
var pSite = 'http://phantomjs.org';

casper.start(cSite, function() {
    console.log('parsing ' + cSite + '...');
    this.echo(this.getTitle());
});

casper.thenOpen(pSite, function() {
    console.log('parsing ' + pSite + '...');
    this.echo(this.getTitle());
});

casper.run();