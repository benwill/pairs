import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(e){
    if(this.props.disabled){
      return false;
    }
    else {
      this.props.onClick(e);
    }
  }

  render() {
    let css = this.props.disabled ? "disabled" : "";
    let title = this.props.disabled ? this.props.disabledTitle : this.props.title;

    return (
          <a title={title} className={css} onClick={this.onClick}>{this.props.text}</a>
    );
  }
}

Button.propTypes = {
  onClick: React.PropTypes.func.isRequired,
  text: React.PropTypes.string.isRequired,
  disabled: React.PropTypes.bool.isRequired
};

export default Button;