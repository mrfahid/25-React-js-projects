import { Component } from 'react'
import { generateColors, rgbValue } from './Helper'
import Box from './Box'

export default class BoxContainer extends Component {
  //Number of color boxes want shows by default
  static defaultProps = {
    num:50
  }

  constructor(props) {
    super(props)
    this.state = {
      // Color state contains array of rgb color values
      colors : generateColors(this.props.num)
    }
    this.changeColor = this.changeColor.bind(this)
  }

  changeColor(c) {

    // Create new random rgb color
    let newColor
    do {
      newColor = `
      rgb(
      ${rgbValue()}
      ${rgbValue()}
      ${rgbValue()}
      )
      `
    } while(newColor === c) 
      // Change Colors array state by inserting 
      // new color value in place of previous color
      this.setState(st => ({
        colors: st.colors.map(color => {
          if(color !== c) return color
            return newColor
        })
      }))
  }
  render() {
    return (
      <div className='BoxContainer'>
        {this.state.colors.map((color, index) => (
          // For each make a box component
          <Box key={index} color={color} changeColor={this.changeColor}/>
        ))}
      </div>
    )
  }
}
