import React, { Component } from 'react';
import './item.css';



export default class Item extends Component {

  render() {

    return (
      <div className='item' id={this.props.data.idBig}>

        <input className='checkBox' onClick={()=>{this.props.testFunc(this.props.data.idBig)}} type='checkbox'/>

        <p>{this.props.data.name}</p>
        
      </div>
    );
  }
}

