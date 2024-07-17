import React, { Component } from 'react'

export default class Box extends Component {
  constructor(props) {
    super(props)
    this.handleChangeColor = this.handleChangeColor.bind(this)
  }

  //Handler callback
  handleChangeColor() {
    // Call parent component changeColor method passing the 
    // Color value of div
    this.props.changeColor(this.props.color)
  }
  render() {
    return (
     <div 
     // Set click handler to the div and pass a callback
     onClick={this.handleChangeColor}
     style={{backgroundColor: this.props.color, width: '13em', height: '13em'}}
     />
    )
  }
}
