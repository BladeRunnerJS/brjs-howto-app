'use strict';

var Router = require( 'director' ).Router;

var App = function( window, routerEl ) {
  this.displayRouteEl = routerEl;

  var routes = {
    '/': this.root.bind( this ),
    '/awesome': this.awesome.bind( this ),
    '/about': this.about.bind( this )
  };

  var router = Router( routes );

  router.init();

  if( !window.location.hash ) {
    window.location.hash = '#/';
  }
};

App.prototype.root = function() {
  this.displayRouteEl.innerText = 'root';
};

App.prototype.awesome = function() {
  this.displayRouteEl.innerText = 'awesome';
};

App.prototype.about = function() {
  this.displayRouteEl.innerText = 'about';
};

module.exports = App;
