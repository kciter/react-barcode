'use strict';

var Barcode = require('..');
var React = require('react');
var ReactDOM = require('react-dom');
var createClass = require('create-react-class');

var Demo = createClass({
  getInitialState: function() {
    return {
      value: 'http://github.com/kciter',
    }
  },

  update: function(event) {
    this.setState({
      value: event.target.value,
    });
  },

  render: function() {
    return (
      <div>
        <div>
          <input
            type="text"
            style={{width: 300+'px'}}
            onChange={this.update}
            value={this.state.value}
          />
        </div>

        <Barcode
          value={this.state.value}
          width={this.state.width}
          height={this.state.height}
          format={this.state.format}
          displayValue={this.state.displayValue}
          fontOptions={this.state.fontOptions}
          font={this.state.font}
          textAlign={this.state.center}
          textPosition={this.state.textPosition}
          textMargin={this.state.textMargin}
          fontSize={this.state.fontSize}
          background={this.state.background}
          lineColor={this.state.lineColor}
          margin={this.state.margin}
          marginTop={this.state.marginTop}
          marginBottom={this.state.marginBottom}
          marginLeft={this.state.marginLeft}
          marginRight={this.state.marginRight}
        />
      </div>
    );
  },
});

ReactDOM.render(
  <Demo />,
  document.getElementById('demo')
);
