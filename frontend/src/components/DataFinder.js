import {Modal,Select,Input,Row,Col,Card, Space,Divider} from 'antd'
import { useState } from 'react';
import './select.css'
import Histoslider from 'histoslider'
const {Option} = Input
const filterCategories =[
    'General Infomation',
    'Stock Information',
    'Financial Statements',
    'Ratio/Metrics',
    'Growth Rates'
]
const options =[
    {
        value:
        'option1',
        label:'option1'
    },{
        value:
        'option2',
        label:'option2'
    }
]
const DataFinder = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selection,setSelection] = useState([0,1])
      const handleOk = () => {
        setIsModalVisible(false);
      };
    
      const handleCancel = () => {
        setIsModalVisible(false);
      };

const onSelect = (value,event)=>{
    console.log(value)
    setIsModalVisible(true);

}
    return (
        <Space>
            <Card style={{width:1000}} title={'Data Finder'}>
            <Modal title="Select Range" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            
            </Modal>
                <Row>
                    <Col span={24}>
                        Display and filter options
                        <div className="site-input-group-wrapper">
                            <Input.Group  compact size="default">
                                
                                {filterCategories.map(item=> (
                                    <Select className='filter-select' style={{backgroundColor:"blue"}} key={item} onSelect={(value,event)=>{onSelect(value,event)}} options={options} value={item}>

                                    </Select>
                                ))}
                        
                            </Input.Group>
                            
                        </div>
                    </Col>
                    
                    {/* <Col span={12}>
                        content2  
                    </Col>   */}
                </Row>
            </Card>
        </Space>
    )
}

export default DataFinder
