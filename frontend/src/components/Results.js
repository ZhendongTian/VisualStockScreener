import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Space,Row, Col, Card, Pagination} from 'antd'
import store from '../store'
import { connect } from 'react-redux';
import { assertDeclareTypeAlias } from '@babel/types';
var resultsElement =[]
class Results extends Component {
  constructor(props){
    super(props);
    this.state = {
      minValue:1,
      maxValue:21,
      currentPage:1,
      sizePerPage:20,
      
    }
  }
    static propTypes = {
        results:PropTypes.array
    }
    handlePage = (value)=>{
    this.setState({
      currentPage:value,

    })
    if (value <= 1) {
      this.setState({
        minValue: 0,
        maxValue: this.state.sizePerPage
      });
    } else {
      this.setState({
        minValue: (value-1) * this.state.sizePerPage,
        maxValue: value * this.state.sizePerPage
      });
    }

    // let base = this.state.currentPage*this.state.sizePerPage
    // console.log(base)
    // resultsElement.length=0;
    // for(var i = 0;i<this.state.sizePerPage&&i<this.props.results.length-1;i++){
    //   resultsElement.push(
    //     <>
    //     <Col span={12}>
    //                 <Card key={base+i} style={{backgroundColor:'#b4b8b8'}} bordered={true} title={'base+i'}>
    //                   {this.props.results[base+i]} 
    //                 </Card>
    //               </Col>
    //               <Col span={12}>
    //                 <Card key={base+i+1} style={{backgroundColor:'#b4b8b8'}} bordered={true}>
    //                   {this.props.results[base+i+1]}at {base+i+1}
    //                 </Card>
    //               </Col>
    //     </>
    //   )
    //   i++;
    // }
    }
    componentWillReceiveProps = (props)=>{
      let total = (props.results.length)
      this.setState({total:total})
    }
    render() {
    
      return (
            <div>
                <Row  gutter={16}>
                {this.props.results &&
          this.props.results.length > 0 &&
          this.props.results.slice(this.state.minValue, this.state.maxValue).map(val => (
            <Card
              title={val}
              style={{ width: 300 }}
            >
              <p>{val}</p>
            </Card>
          ))}
                </Row>
                <Pagination onChange={this.handlePage} current={this.state.currentPage} defaultCurrent={1} total={this.state.total} />
            </div>
        )
    }
}
const mapStateToProps = state =>{
  return({
    results:state.filters.results
  })
}
export default connect(mapStateToProps,{})(Results) 
