import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Divider,Select,Tag,Input,Row,Col,Space,Card,Button} from 'antd'
import './select.css'
import HistoSelector from './HistoSelector';
const {Option,OptGroup} = Select;
const COLORS = ['gold','lime', 'green', 'cyan','red','blue'];
const OPTIONS = ['Shares (Basic)',
    'Earnings Per Share, Basic',
    'EBITDA',
    'Return on Equity',
    'Free Cash Flow Per Share',
]
const OPTIONS1 =['Price to Earnings','Forward Price to Earnings','PEG','P/S','P/B','Price/Cash','Price/Free Cash Flow','Return on Assets','Return on Equity','Return on Investment','Current Ratio','Quick Ratio','Gross Margin','Operating Margin','Net Profit Margin']
const OPTIONS2 = []
function tagRender(props) {
    const { label, value, closable, onClose } = props;
    const onPreventMouseDown = event => {
      event.preventDefault();
      event.stopPropagation();
    };
    return (
      <Tag
        color={COLORS[OPTIONS.indexOf(value)%(COLORS.length)]}
        onMouseDown={onPreventMouseDown}
        closable={closable}
        onClose={onClose}
        style={{ marginRight: 3 }}
      >
        {label}
      </Tag>
    );
  }
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
                                        showArrow
                                        tagRender={tagRender}
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
                                        
                                    </Select>
                                    </div>
                                </Space>
                            </Input.Group>
                        </div>
            </Card>
            
            <Card title="Selected Filters" >
                    {this.state.selectedFilters.map((item,index)=>
                    <>
                    <HistoSelector color={COLORS[OPTIONS.indexOf(item)%(COLORS.length)]} name={item} key={index}>

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
