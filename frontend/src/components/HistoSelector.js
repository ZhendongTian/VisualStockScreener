import React, { Component } from 'react'
import {Card} from 'antd'
import PropTypes from 'prop-types'
import Histoslider from 'histoslider';
import { filter } from 'd3-array';
const handleSelect = (value)=>{
    // console.log(value)
}

class HistoSelector extends Component {
    static propTypes = {
        name:PropTypes.string.isRequired,
        color:PropTypes.string
    }
    state = {
        data:[],
        perc2value:[],
        selection:[0,100]
    }
    componentWillMount(){
      console.log(this.props.name)
      fetch('http://194.163.166.72:8000/getFilterData?name='+this.props.name)
        .then(res=>res.json())
        .then(data=>{
          console.log(data)
          this.setState({data:data.data,perc2value:data.map})
        })
    }

    render() {
        const {selection}= this.state;
        return (
            <div>
            <Histoslider  
            formatLabelFunction={value=>{
              return this.state.perc2value[Math.floor(value)]}}
            barPadding={0}
            barBorderRadius={0}
            width={300} height={150}
                            selectedColor={this.props.color}
    // An array of objects to create the histogram
            data={this.state.data}
    // How much to pad the slider and histogram by, defaults to 20
    padding={20} 
    handleLabelFormat={ "0.3P"}
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
