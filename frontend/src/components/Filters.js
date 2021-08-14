import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Divider,Select,Input,Row,Col,Space,Card,Button} from 'antd'
import './select.css'
import HistoSelector from './HistoSelector';
const {Option,OptGroup} = Select;
const OPTIONS =['Price to Earnings','Forward Price to Earnings','PEG','P/S','P/B','Price/Cash','Price/Free Cash Flow','Return on Assets','Return on Equity','Return on Investment','Current Ratio','Quick Ratio']
const OPTIONS2 = ['Gross Margin','Operating Margin','Net Profit Margin']
class Filters extends Component {
    static propTypes = {

    }
    state ={
        selectedFilters:[],
        options:[],
        selection:[0,1]
    }
    handleChange = (selectedFilters)=>{
        this.setState({ selectedFilters });
        console.log(selectedFilters)
    }
    handleSelect = (selected)=>{
        console.log(selected)
    }
    render() {
        const { selectedFilters } = this.state;
        const filteredOptions = OPTIONS.filter(o => !selectedFilters.includes(o));
        const filteredOptions2 = OPTIONS2.filter(o => !selectedFilters.includes(o));
    
        return (
            <Space direction="vertical" style={{textAlign:'center',width:'100%'}}>
            <h3 style={{margin:"20px"}}>Filter Options</h3>
            <Card>
            <div style={{textAlign:'left',width:'100%'}} className="site-input-group-wrapper">
                            <Input.Group  compact size="default">
                                <Space direction="vertical">
                                    <div style={{margin:'5px',width:'300px'}}>
                                    <Select
                                        onSelect={this.handleSelect}
                                        style={{width:'100%'}}
                                        className="filter-select" 
                                        onChange={this.handleChange}
                                        mode="multiple"
                                        placeholder="Insert filters"
                                        value={selectedFilters}>
                                        <OptGroup label="Ratio/Metrics">
                                        {filteredOptions.map(item => (
                                            <Select.Option key={item} value={item}>
                                                {item}
                                            </Select.Option>
                                            ))}
                                        </OptGroup>
                                        <OptGroup label="Profit & loss">
                                        {filteredOptions2.map(item => (
                                            <Select.Option key={item} value={item}>
                                                {item}
                                            </Select.Option>
                                            ))}
                                        </OptGroup>
                                    </Select>
                                    </div>
                                </Space>
                            </Input.Group>
                        </div>
            </Card>
            
            <Card title="Selected Filters" >
                    {this.state.selectedFilters.map((item,index)=>
                    <>
                    <HistoSelector name={item} key={index}>

                    </HistoSelector>
                    <Divider></Divider>
                    </>
                    )}
            </Card>
        </Space>
        )
    }
}

export default Filters