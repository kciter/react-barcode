const Barcode = require('..');
const React = require('react');
const ReactDOM = require('react-dom');

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'https://github.com/kciter',
      text: 'Custom Text',
    };
  }

  update(event) {
    this.setState({
      value: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <div>
          <input
            type="text"
            style={{width: 300+'px'}}
            onChange={this.update.bind(this)}
            value={this.state.value}
          />
        </div>

        <Barcode
          value={this.state.value}
          text={this.state.text}
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
          id={this.state.id}
          className={this.state.className}
        />
      </div>
    );
  }
}

ReactDOM.render(
  <Demo />,
  document.getElementById('demo')
);
