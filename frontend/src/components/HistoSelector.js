import React, { Component } from 'react'
import {Card} from 'antd'
import PropTypes from 'prop-types'
import Histoslider from 'histoslider';
import { filter } from 'd3-array';
const handleSelect = (value)=>{
    console.log(value)
}
export class HistoSelector extends Component {
    static propTypes = {
        name:PropTypes.string.isRequired,
        color:PropTypes.string
    }
    state = {
        selection:[0,1]
    }

    render() {
        const {selection}= this.state;
        return (
            <div>
            <Histoslider  width={300} height={150}
                            selectedColor={this.props.color}

    // An array of objects to create the histogram
    data={[
      {
        x0: 0,    // Start of the bucket
        x: 1,     // End of the bucket
        y: 100    // Value
      },
      {
        x0: 1,    // Start of the bucket
        x: 2,     // End of the bucket
        y: 120    // Value
      },
      {
        x0: 2,    // Start of the bucket
        x: 3,     // End of the bucket
        y: 990    // Value
      },
      {
        x0: 3,    // Start of the bucket
        x: 5,     // End of the bucket
        y: 200    // Value
      }
    ]}
    // How much to pad the slider and histogram by, defaults to 20
    padding={20} 
    selection={selection}
    onSelect={handleSelect}
    onChange={array => {this.setState({
        selection:array
    })}}
    // The extent of the selection, this doesn't have to be sorted (and you shouldn't sort it to store it)
    // A function to handle a change in the selection
    
  />
  <h4>{this.props.name}</h4>
  </div>
        )
    }
}

export default HistoSelector
