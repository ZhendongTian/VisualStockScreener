import React, { Component } from 'react'
import {Card} from 'antd'
import PropTypes from 'prop-types'
import Histoslider from 'histoslider';
import { filter } from 'd3-array';
const handleSelect = (value)=>{
     console.log(value)
}

class HistoSelector extends Component {
    static propTypes = {
        name:PropTypes.string.isRequired,
        color:PropTypes.string
    }
    state = {
        data:[{'x0': 0, 'x': 1, 'y': 2}, {'x0': 1, 'x': 2, 'y': 7}, {'x0': 2, 'x': 3, 'y': 5}, {'x0': 3, 'x': 4, 'y': 6}, {'x0': 4, 'x': 5, 'y': 5}, {'x0': 5, 'x': 6, 'y': 3}, {'x0': 6, 'x': 7, 'y': 8}, {'x0': 7, 'x': 8, 'y': 8}, {'x0': 8, 'x': 9, 'y': 5}, {'x0': 9, 'x': 10, 'y': 5}, {'x0': 10, 'x': 11, 'y': 6}, {'x0': 11, 'x': 12, 'y': 10}, {'x0': 12, 'x': 13, 'y': 10}, {'x0': 13, 'x': 14, 'y': 11}, {'x0': 14, 'x': 15, 'y': 7}, {'x0': 15, 'x': 16, 'y': 9}, {'x0': 16, 'x': 17, 'y': 11}, {'x0': 17, 'x': 18, 'y': 9}, {'x0': 18, 'x': 19, 'y': 10}, {'x0': 19, 'x': 20, 'y': 18}, {'x0': 20, 'x': 21, 'y': 14}, {'x0': 21, 'x': 22, 'y': 9}, {'x0': 22, 'x': 23, 'y': 16}, {'x0': 23, 'x': 24, 'y': 11}, {'x0': 24, 'x': 25, 'y': 19}, {'x0': 25, 'x': 26, 'y': 13}, {'x0': 26, 'x': 27, 'y': 13}, {'x0': 27, 'x': 28, 'y': 18}, {'x0': 28, 'x': 29, 'y': 19}, {'x0': 29, 'x': 30, 'y': 24}, {'x0': 30, 'x': 31, 'y': 28}, {'x0': 31, 'x': 32, 'y': 23}, {'x0': 32, 'x': 33, 'y': 21}, {'x0': 33, 'x': 34, 'y': 18}, {'x0': 34, 'x': 35, 'y': 34}, {'x0': 35, 'x': 36, 'y': 35}, {'x0': 36, 'x': 37, 'y': 25}, {'x0': 37, 'x': 38, 'y': 30}, {'x0': 38, 'x': 39, 'y': 29}, {'x0': 39, 'x': 40, 'y': 36}, {'x0': 40, 'x': 41, 'y': 27}, {'x0': 41, 'x': 42, 'y': 44}, {'x0': 42, 'x': 43, 'y': 36}, {'x0': 43, 'x': 44, 'y': 41}, {'x0': 44, 'x': 45, 'y': 47}, {'x0': 45, 'x': 46, 'y': 27}, {'x0': 46, 'x': 47, 'y': 35}, {'x0': 47, 'x': 48, 'y': 46}, {'x0': 48, 'x': 49, 'y': 30}, {'x0': 49, 'x': 50, 'y': 30}, {'x0': 50, 'x': 51, 'y': 25}, {'x0': 51, 'x': 52, 'y': 26}, {'x0': 52, 'x': 53, 'y': 37}, {'x0': 53, 'x': 54, 'y': 19}, {'x0': 54, 'x': 55, 'y': 33}, {'x0': 55, 'x': 56, 'y': 27}, {'x0': 56, 'x': 57, 'y': 33}, {'x0': 57, 'x': 58, 'y': 45}, {'x0': 58, 'x': 59, 'y': 33}, {'x0': 59, 'x': 60, 'y': 30}, {'x0': 60, 'x': 61, 'y': 32}, {'x0': 61, 'x': 62, 'y': 30}, {'x0': 62, 'x': 63, 'y': 29}, {'x0': 63, 'x': 64, 'y': 27}, {'x0': 64, 'x': 65, 'y': 23}, {'x0': 65, 'x': 66, 'y': 15}, {'x0': 66, 'x': 67, 'y': 20}, {'x0': 67, 'x': 68, 'y': 15}, {'x0': 68, 'x': 69, 'y': 18}, {'x0': 69, 'x': 70, 'y': 26}, {'x0': 70, 'x': 71, 'y': 22}, {'x0': 71, 'x': 72, 'y': 23}, {'x0': 72, 'x': 73, 'y': 18}, {'x0': 73, 'x': 74, 'y': 23}, {'x0': 74, 'x': 75, 'y': 14}, {'x0': 75, 'x': 76, 'y': 18}, {'x0': 76, 'x': 77, 'y': 9}, {'x0': 77, 'x': 78, 'y': 14}, {'x0': 78, 'x': 79, 'y': 18}, {'x0': 79, 'x': 80, 'y': 19}, {'x0': 80, 'x': 81, 'y': 13}, {'x0': 81, 'x': 82, 'y': 16}, {'x0': 82, 'x': 83, 'y': 9}, {'x0': 83, 'x': 84, 'y': 11}, {'x0': 84, 'x': 85, 'y': 13}, {'x0': 85, 'x': 86, 'y': 9}, {'x0': 86, 'x': 87, 'y': 13}, {'x0': 87, 'x': 88, 'y': 14}, {'x0': 88, 'x': 89, 'y': 9}, {'x0': 89, 'x': 90, 'y': 7}, {'x0': 90, 'x': 91, 'y': 6}, {'x0': 91, 'x': 92, 'y': 12}, {'x0': 92, 'x': 93, 'y': 9}, {'x0': 93, 'x': 94, 'y': 2}, {'x0': 94, 'x': 95, 'y': 6}, {'x0': 95, 'x': 96, 'y': 5}, {'x0': 96, 'x': 97, 'y': 3}, {'x0': 97, 'x': 98, 'y': 2}, {'x0': 98, 'x': 99, 'y': 7}, {'x0': 99, 'x': 100, 'y': 4}],
        perc2value:[],
        selection:[0,100],
        isSelected:false
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
    mouseclick = (e)=>{
      this.state.isSelected=true;
      const post ={
        x0:this.state.selection[0],
        x1:this.state.selection[1],
        name:this.state.name
      }
      console.log(this.state.selection);
      fetch('http://194.163.166.72:8000/',{
        method:'POST',
        headers:{
          'contennt-type':'application/json'
        },
        body:JSON.stringify(post)
      })
    }
    componentDidMount(){
      window.addEventListener('click',this.mouseclick)
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
    onClick={e=>{e.preventDefaut();console.log(e)}}
    onChange={array => {
      this.state.isSelected=false;
      // console.log(selection)
      
        if(selection[0]>=selection[1]-0.1){
          return
        }
      
      
      this.setState({
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
