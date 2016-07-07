import React, { PropTypes } from 'react';

import { Link } from 'react-router';
import logo from '../assets/drive-log.jpg'

const Main = React.createClass({
  propTypes: {
    update: PropTypes.func,
    dealerInfo: PropTypes.object 
  },

  childContextTypes: {
    update: PropTypes.func,
    dealership: PropTypes.object
  },

  getChildContext(){
    console.log('main', this.props)
    return {
      update: this.props.update,
      dealership: this.props.dealerInfo
    }
  },


  render() {

    return (
      <div>
        <img className="image" src={logo}/>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
});

export default Main;
