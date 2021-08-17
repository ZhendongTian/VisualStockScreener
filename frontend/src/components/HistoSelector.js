import React, { Component } from 'react'
import {Card} from 'antd'
import PropTypes from 'prop-types'
import Histoslider from 'histoslider';
import { filter } from 'd3-array';
const handleSelect = (value)=>{
    console.log(value)
}
const perc2value = ['8.94K',
'10.48K',
'12.11K',
'14.00K',
'16.18K',
'18.70K',
'21.61K',
'24.98K',
'28.87K',
'33.37K',
'38.56K',
'44.57K',
'51.51K',
'59.53K',
'68.80K',
'79.52K',
'91.91K',
'106.22K',
'122.76K',
'141.88K',
'163.98K',
'189.52K',
'219.04K',
'253.15K',
'292.58K',
'338.14K',
'390.81K',
'451.68K',
'522.02K',
'603.32K',
'697.29K',
'805.89K',
'931.40K',
'1.08M',
'1.24M',
'1.44M',
'1.66M',
'1.92M',
'2.22M',
'2.57M',
'2.97M',
'3.43M',
'3.96M',
'4.58M',
'5.29M',
'6.11M',
'7.07M',
'8.17M',
'9.44M',
'10.91M',
'12.61M',
'14.57M',
'16.84M',
'19.46M',
'22.50M',
'26.00M',
'30.05M',
'34.73M',
'40.14M',
'46.39M',
'53.61M',
'61.96M',
'71.61M',
'82.77M',
'95.66M',
'110.55M',
'127.77M',
'147.67M',
'170.67M',
'197.25M',
'227.97M',
'263.48M',
'304.51M',
'351.94M',
'406.75M',
'470.10M',
'543.32M',
'627.94M',
'725.74M',
'838.76M',
'969.40M',
'1.12B',
'1.29B',
'1.50B',
'1.73B',
'2.00B',
'2.31B',
'2.67B',
'3.09B',
'3.57B',
'4.12B',
'4.76B',
'5.51B',
'6.36B',
'7.35B',
'8.50B',
'9.82B',
'11.35B',
'13.12B',
'15.17B',
'17.53B']
export class HistoSelector extends Component {
    static propTypes = {
        name:PropTypes.string.isRequired,
        color:PropTypes.string
    }
    state = {
        selection:[0,100]
    }

    render() {
        const {selection}= this.state;
        return (
            <div>
            <Histoslider  
            formatLabelFunction={value=>{
              return perc2value[Math.floor(value)]}}
            barPadding={0}
            barBorderRadius={0}
            width={300} height={150}
                            selectedColor={this.props.color}
    // An array of objects to create the histogram
    data={[{x0: 0, x: 1, y: 2}, {x0: 1, x: 2, y: 7}, {x0: 2, x: 3, y: 5}, {x0: 3, x: 4, y: 6}, {x0: 4, x: 5, y: 5}, {x0: 5, x: 6, y: 3}, {x0: 6, x: 7, y: 8}, {x0: 7, x: 8, y: 8}, {x0: 8, x: 9, y: 5}, {x0: 9, x: 10, y: 5}, {x0: 10, x: 11, y: 6}, {x0: 11, x: 12, y: 10}, {x0: 12, x: 13, y: 10}, {x0: 13, x: 14, y: 11}, {x0: 14, x: 15, y: 7}, {x0: 15, x: 16, y: 9}, {x0: 16, x: 17, y: 11}, {x0: 17, x: 18, y: 9}, {x0: 18, x: 19, y: 10}, {x0: 19, x: 20, y: 18}, {x0: 20, x: 21, y: 14}, {x0: 21, x: 22, y: 9}, {x0: 22, x: 23, y: 16}, {x0: 23, x: 24, y: 11}, {x0: 24, x: 25, y: 19}, {x0: 25, x: 26, y: 13}, {x0: 26, x: 27, y: 13}, {x0: 27, x: 28, y: 18}, {x0: 28, x: 29, y: 19}, {x0: 29, x: 30, y: 24}, {x0: 30, x: 31, y: 28}, {x0: 31, x: 32, y: 23}, {x0: 32, x: 33, y: 21}, {x0: 33, x: 34, y: 18}, {x0: 34, x: 35, y: 34}, {x0: 35, x: 36, y: 35}, {x0: 36, x: 37, y: 25}, {x0: 37, x: 38, y: 30}, {x0: 38, x: 39, y: 29}, {x0: 39, x: 40, y: 36}, {x0: 40, x: 41, y: 27}, {x0: 41, x: 42, y: 44}, {x0: 42, x: 43, y: 36}, {x0: 43, x: 44, y: 41}, {x0: 44, x: 45, y: 47}, {x0: 45, x: 46, y: 27}, {x0: 46, x: 47, y: 35}, {x0: 47, x: 48, y: 46}, {x0: 48, x: 49, y: 30}, {x0: 49, x: 50, y: 30}, {x0: 50, x: 51, y: 25}, {x0: 51, x: 52, y: 26}, {x0: 52, x: 53, y: 37}, {x0: 53, x: 54, y: 19}, {x0: 54, x: 55, y: 33}, {x0: 55, x: 56, y: 27}, {x0: 56, x: 57, y: 33}, {x0: 57, x: 58, y: 45}, {x0: 58, x: 59, y: 33}, {x0: 59, x: 60, y: 30}, {x0: 60, x: 61, y: 32}, {x0: 61, x: 62, y: 30}, {x0: 62, x: 63, y: 29}, {x0: 63, x: 64, y: 27}, {x0: 64, x: 65, y: 23}, {x0: 65, x: 66, y: 15}, {x0: 66, x: 67, y: 20}, {x0: 67, x: 68, y: 15}, {x0: 68, x: 69, y: 18}, {x0: 69, x: 70, y: 26}, {x0: 70, x: 71, y: 22}, {x0: 71, x: 72, y: 23}, {x0: 72, x: 73, y: 18}, {x0: 73, x: 74, y: 23}, {x0: 74, x: 75, y: 14}, {x0: 75, x: 76, y: 18}, {x0: 76, x: 77, y: 9}, {x0: 77, x: 78, y: 14}, {x0: 78, x: 79, y: 18}, {x0: 79, x: 80, y: 19}, {x0: 80, x: 81, y: 13}, {x0: 81, x: 82, y: 16}, {x0: 82, x: 83, y: 9}, {x0: 83, x: 84, y: 11}, {x0: 84, x: 85, y: 13}, {x0: 85, x: 86, y: 9}, {x0: 86, x: 87, y: 13}, {x0: 87, x: 88, y: 14}, {x0: 88, x: 89, y: 9}, {x0: 89, x: 90, y: 7}, {x0: 90, x: 91, y: 6}, {x0: 91, x: 92, y: 12}, {x0: 92, x: 93, y: 9}, {x0: 93, x: 94, y: 2}, {x0: 94, x: 95, y: 6}, {x0: 95, x: 96, y: 5}, {x0: 96, x: 97, y: 3}, {x0: 97, x: 98, y: 2}, {x0: 98, x: 99, y: 7}, {x0: 99, x: 100, y: 4}]}
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
