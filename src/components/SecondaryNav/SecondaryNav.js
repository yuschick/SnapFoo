import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './SecondaryNav.css';

class SecondaryNav extends Component {
  render() {
    return (
      <nav className='secondary-nav'>
        <ul className='flex-container'>
          <li className={this.props.active === 'animate' ? 'active' : ''} onClick={() => {this.props.update('animate')}}>
            <span>Animate</span>
          </li>
          <li className={this.props.active === 'animate-path' ? 'active' : ''} onClick={() => {this.props.update('animate-path')}}>
            <span>Animate Along Paths</span>
          </li>
          <li className={this.props.active === 'callbacks' ? 'active' : ''} onClick={() => {this.props.update('callbacks')}}>
            <span>Callbacks</span>
          </li>
          <li className={this.props.active === 'loops' ? 'active' : ''} onClick={() => {this.props.update('loops')}}>
            <span>Loops</span>
          </li>
          <li className={this.props.active === 'resets' ? 'active' : ''} onClick={() => {this.props.update('resets')}}>
            <span>Resets</span>
          </li>
        </ul>
      </nav>
    );
  }
}

SecondaryNav.propTypes = {
  active: PropTypes.string.isRequired,
  update: PropTypes.func.isRequired,
};

export default SecondaryNav;