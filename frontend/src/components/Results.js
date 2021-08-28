import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Space,Row, Col, Card, Pagination} from 'antd'

class Results extends Component {
    static propTypes = {
        
    }

    render() {
        return (
            <div>
                <Row  gutter={16}>
                  <Col span={12}>
                    <Card style={{backgroundColor:'#b4b8b8'}} bordered={true}>
                      Card content
                    </Card>
                  </Col>
                  <Col span={12}>
                    <Card style={{backgroundColor:'#b4b8b8'}} bordered={true}>
                      Card content
                    </Card>
                  </Col>
                  
                </Row>
                <Pagination defaultCurrent={1} total={50} />
            </div>
        )
    }
}

export default Results
