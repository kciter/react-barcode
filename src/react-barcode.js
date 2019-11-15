'use strict';

import React, {Component} from 'react';
import JsBarcode from 'jsbarcode';
import PropTypes from 'prop-types';

var getDOMNode;
// Super naive semver detection but it's good enough. We support 0.12, 0.13
// which both have getDOMNode on the ref. 0.14 and 15 make the DOM node the ref.
var version = React.version.split(/[.-]/);
if (version[0] === '0' && (version[1] === '13' || version[1] === '12')) {
  getDOMNode = (ref) => ref.getDOMNode();
} else {
  getDOMNode = (ref) => ref;
}

class Barcode extends Component {
  constructor(props) {
    super(props);
    this.update = this.update.bind(this);
  };

    shouldComponentUpdate(nextProps) {
      return Object.keys(Barcode.propTypes).some((k) => this.props[k] !== nextProps[k]);
    };

    componentDidMount() {
      this.update();
    };

    componentDidUpdate() {
      this.update();
    };

    update() {
      var renderElement = getDOMNode(this.refs.renderElement);
      try {
        new JsBarcode(renderElement, this.props.value, Object.assign({}, this.props));
      } catch (e) {
        // prevent stop the parent process
        window.console.error(e);
      }
    };

  render() {
    if (this.props.renderer === 'svg') {
      return (
        <svg ref="renderElement" />
      );
    } else if (this.props.renderer === 'canvas') {
      return (
        <canvas ref="renderElement" />
      );
    } else if (this.props.renderer === 'img') {
      return (
        <img ref="renderElement" />
      );
    }
  };


}

Barcode.propTypes = {
  value: PropTypes.string.isRequired,
  renderer: PropTypes.string,
  format: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  displayValue: PropTypes.bool,
  fontOptions: PropTypes.string,
  font: PropTypes.string,
  textAlign: PropTypes.string,
  textPosition: PropTypes.string,
  textMargin: PropTypes.number,
  fontSize: PropTypes.number,
  background: PropTypes.string,
  lineColor: PropTypes.string,
  margin: PropTypes.number,
  marginTop: PropTypes.number,
  marginBottom: PropTypes.number,
  marginLeft: PropTypes.number,
  marginRight: PropTypes.number,
};

Barcode.defaultProps = {
  format: 'CODE128',
  renderer: 'svg',
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

module.exports = Barcode;
