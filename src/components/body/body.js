import React, { Component } from 'react';
import Item from '../item/Item';
import './body.css';

export default class Body extends Component {

  constructor(props){
    super(props)
    this.state={
        items:[ ]
    }
  } 
  


  addItem = () => {
    let myInput =document.querySelector('.inputText')
    let text = { 
      idBig: Date.now(),
      name : myInput.value,
      done: false,
      
    } 
    myInput.value = ''
    let arr = this.state.items
    arr.push(text) 
    this.setState({
      items: arr
    })
  }
  
  delItem = (val) => {

    console.log('hello i`m delete')

    let arrThree = this.state.items
    arrThree = arrThree.filter((el,i)=>{
      if(el.idBig !== val ){
        return el
      }
    })
      this.setState({
        items : arrThree
      })
  }

  testFunc = (val) =>{
    let arrTwo = this.state.items
    arrTwo.map((el,i)=>{
      if(el.idBig==val){
        el.done = !el.done
      }})
    this.setState({
      items:arrTwo,
    })
  }


  render() {
    let procent = (()=>{
      let allTrue = 0 
      let arrTwo = this.state.items
      arrTwo.map((el,i)=>{
        if(el.done == true){
          allTrue++
        }
      })
    let result = Math.round((allTrue*100)/arrTwo.length)
    return result
    })()
  
    
    return (
      <div className="body">

        <div className="list">

          {this.state.items.map((el,i)=><Item appThis={this}  data={el} key={el.idBig} delItem={this.delItem} testFunc={this.testFunc}/>)}

        </div>

        <button onClick={this.addItem}>click me</button>

        <input className='inputText'  type="text"/>

        <div className='procent'>{procent || 0}%</div>     
        
      </div>
    );
  }
}


