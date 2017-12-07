import React, { Component } from 'react';
import Item from '../item/Item';
import './body.css';

export default class Body extends Component {
  constructor(props){
    super(props)
    this.state={
        items:[ ],
        procent:'0%'
    }
}
  
  addItem = () => {
    let myInput =document.querySelector('.inputText')
    let text = { 
      idBig: Date.now(),
      name : myInput.value,
      done: false
    } 
    myInput.value = ''
    let arr = this.state.items
    arr.push(text) 
    this.setState({
      items: arr
    },this.newProcent())
  }



  testFunc = (val) =>{
    let arrTwo = this.state.items
    arrTwo.map((el,i)=>{
      if(el.idBig==val){
        el.done = !el.done
      }})
    this.setState({
      items:arrTwo,
    },this.newProcent())
  }

  newProcent =()=>{
    let allTrue = 0 
    let arrTwo = this.state.items
    arrTwo.map((el,i)=>{
      if(el.done == true){
        allTrue++
      }
    })
    let result = Math.round((allTrue*100)/arrTwo.length)
    this.setState({
      procent: result + '%'
    })
  }

  render() {
    return (
      <div className="body">

        <div className="list">

          {this.state.items.map((el,i)=><Item appThis={this}  data={el} key={i} testFunc={this.testFunc}/>)}
        </div>

        <button onClick={this.addItem}>click me</button>

        <input className='inputText'  type="text"/>
        <div className='procent'>{this.state.procent}</div>     
        
      </div>
    );
  }
}


