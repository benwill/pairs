import React, { Component } from 'react';
import { CARD_STATUS } from '../constants/application'

class Card extends Component {
  render() {
    let className =
        this.props.visible ? `card card-${this.props.number}` : `card card-hidden`;

    let cardNumber =
        this.props.showNumber ? <strong>{this.props.number}</strong> : ''

    return (
        <div className={className} onClick={this.props.onClick}>
          <div className="flipper">
            <div className="front">
              {cardNumber}
            </div>
            <div className="back">
              {cardNumber}
            </div>
          </div>
        </div>
    );
  }
}

Card.propTypes = {
  number: React.PropTypes.number.isRequired,
  visible: React.PropTypes.bool.isRequired,
  showNumber: React.PropTypes.bool.isRequired,
  onClick: React.PropTypes.func.isRequired
};

export default Card;