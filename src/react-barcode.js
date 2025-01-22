import React from 'react';
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

class Barcode extends React.Component {
  constructor(props) {
    super(props);
    this.renderElementRef = React.createRef();
    this.update = this.update.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return Object.keys(Barcode.propTypes).some((k) => this.props[k] !== nextProps[k]);
  }

  componentDidMount() {
    this.update();
  }

  componentDidUpdate() {
    this.update();
  }

  update() {
    var renderElement = getDOMNode(this.renderElementRef.current);
    try {
      new JsBarcode(
        renderElement,
        this.props.value,
        Object.assign({text: this.props.text ?? this.props.value}, this.props)
      );
    } catch (e) {
      // prevent stop the parent process
      window.console.error(e);
    }
  }

  render() {
    const { id, className } = this.props;
    if (this.props.renderer === 'svg') {
      return (
        <svg ref={this.renderElementRef} id={id} className={className} />
      );
    } else if (this.props.renderer === 'canvas') {
      return (
        <canvas ref={this.renderElementRef} id={id} className={className} />
      );
    } else if (this.props.renderer === 'img') {
      return (
        <img ref={this.renderElementRef} id={id} className={className} />
      );
    }
  }
}

Barcode.propTypes = {
  value: PropTypes.string.isRequired,
  text: PropTypes.string,
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
  id: PropTypes.string,
  className: PropTypes.string,
  ean128: PropTypes.bool,
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
  className: '',
  ean128: false,
};

module.exports = Barcode;
