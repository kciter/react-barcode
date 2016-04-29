'use strict';

var React = require('react');
var JsBarcode = require('jsbarcode');
var Canvas = require('canvas');

var canvas = new Canvas();
JsBarcode(canvas, 'Hello');

console.log('<img src="' + canvas.toDataURL() + '" />');
console.log('test');