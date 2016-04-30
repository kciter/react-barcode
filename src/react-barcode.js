'use strict';

var React = require('react');
var JsBarcode = require('jsbarcode');

var getDOMNode;
// Super naive semver detection but it's good enough. We support 0.12, 0.13
// which both have getDOMNode on the ref. 0.14 and 15 make the DOM node the ref.
var version = React.version.split(/[.-]/);
if (version[0] === '0' && version[1] === '13' || version[1] === '12') {
  getDOMNode = (ref) => ref.getDOMNode();
} else {
  getDOMNode = (ref) => ref;
}


var Barcode = React.createClass({
  propTypes: {
    value: React.PropTypes.string.isRequired,
    renderer: React.PropTypes.string,
    format: React.PropTypes.string,
    width: React.PropTypes.number,
    height: React.PropTypes.number,
    displayValue: React.PropTypes.bool,
    fontOptions: React.PropTypes.string,
    font: React.PropTypes.string,
    textAlign: React.PropTypes.string,
    textPosition: React.PropTypes.string,
    textMargin: React.PropTypes.number,
    fontSize: React.PropTypes.number,
    background: React.PropTypes.string,
    lineColor: React.PropTypes.string,
    margin: React.PropTypes.number,
    marginTop: React.PropTypes.number,
    marginBottom: React.PropTypes.number,
    marginLeft: React.PropTypes.number,
    marginRight: React.PropTypes.number,
  },

  getDefaultProps: function() {
    return {
      format: 'CODE128',
      renderer: 'canvas',
      width: 2,
      height: 100,
      displayValue: true,
      fontOptions: '',
      font: 'monospace',
      textAlign: 'center',
      textPosition: 'bottom',
      textMargin: 2,
      fontSize: 20,
      background: '#ffffff',
      lineColor: '#000000',
      margin: 10,
    };
  },

  shouldComponentUpdate: function(nextProps) {
    return Object.keys(Barcode.propTypes).some((k) => this.props[k] !== nextProps[k]);
  },

  componentDidMount: function() {
    this.update();
  },

  componentDidUpdate: function() {
    this.update();
  },

  update: function() {
    var renderElement = getDOMNode(this.refs.renderElement);
    new JsBarcode(renderElement, this.props.value, this.props);
  },

  render: function() {
    if(this.props.renderer === "svg"){
      return (
        <svg ref="renderElement" />
      );
    }
    else if(this.props.renderer === "canvas"){
      return (
        <canvas ref="renderElement" />
      );
    }
  },
});

module.exports = Barcode;
