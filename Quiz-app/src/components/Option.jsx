import { Component } from 'react'
import PropTypes from 'prop-types';

export class Option extends Component {
  static propTypes = {
    options: PropTypes.array.isRequired,
    selectedOption: PropTypes.string,
    onOptionChange: PropTypes.func.isRequired,
  };
  
  render() {
    const { options, selectedOption, onOptionChange } = this.props
    return (
      <div className='options'>
        {options.map((option, index) => (
          <div key={index} className='form-check'>
            <input 
              type='radio'
              name='option'
              value={option}
              checked={selectedOption === option}
              onChange={onOptionChange}
              className='form-check-input'
             />
             <label className='form-check-label'>{option}</label>
          </div>
        ))}
      </div>
    )
  }
}

export default Option