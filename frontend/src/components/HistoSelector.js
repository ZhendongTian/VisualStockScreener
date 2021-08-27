import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import PropTypes from 'prop-types'
import Histoslider from 'histoslider';
import { connect } from 'react-redux';
import { filter } from 'd3-array';
import './select.css'
import { transform } from '@babel/core';
import { submitFilters,changeSelections } from '../actions/filterActions';
import store from '../store'
const handleSelect = (value)=>{
     console.log(value)
}
const backClick = (e)=>{
  // console.log("back clicked")
}



class HistoSelector extends Component {
    static propTypes = {
        name:PropTypes.string.isRequired,
        color:PropTypes.string
    }
    constructor(props){
      super(props);
      this.state = {
        data:props.data,
        perc2value:props.map,
        selection:[0,100],
        isSelected:false,
        isModalVisible:false
      }
    }
    componentWillUnmount(){
    }
    componentDidMount(){
    }
    componentWillMount(){
      // fetch('http://194.163.166.72:8000/getFilterData?name='+this.props.name)
      //   .then(res=>res.json())
      //   .then(data=>{
      //     let map = JSON.parse(data['map']) 
      //     let data1 =JSON.parse(data['data']) 
      //       this.setState({
      //         data:data1,
      //         perc2value:map})
      //     })
          
    }
    fetchData = ()=>{
      const post ={
      }
      // fetch('http://194.163.166.72:8000/onCriteriaChange',{
      //   method:'POST',
      //   headers:{
      //     'content-type':'application/json'
      //   },
      //   body:JSON.stringify(post)
      // }).then(res=>res.json())
      // .then(data=>console.log(data))
      const selections = store.getState().filters.selections
      const newSelect = {
          [this.props.name]:{
            x0:this.state.selection[0],
            x1:this.state.selection[1],
          }
      }
      const newSelections = {...selections, ...newSelect}
      this.props.changeSelections(newSelections);
      this.props.submitFilters(selections)
    }
    mouseclick = (e)=>{
      // console.log("circle clicked")
      this.fetchData()
    }
    componentDidMount(){
      // console.log(this.props.data)
      const dom = ReactDOM.findDOMNode(this);
      let circles = dom.getElementsByTagName('circle')
      let text = dom.getElementsByTagName('text')
      text[0].style.setProperty('transform',"translateY(13px)")
      for (let i = 0; i < circles.length; ++i) {
          circles[i].addEventListener('click',this.mouseclick)
        }
    }
    histoTitleClick =()=>{
      console.log("title clicked")
      console.log()
      this.setState({isModalVisible:true})
    }
    handleModalOpen =(e)=>{
      console.log("modal open")
      let text =e.contentEl.getElementsByTagName('text')
      let circles = e.contentEl.getElementsByTagName('circle')
      text[0].style.setProperty('transform',"translateY(13px)")
      for (let i = 0; i < circles.length; ++i) {
        circles[i].style.setProperty('transform',"scale(1.3) translateY(-2px)")
      }
      console.log(text)
    }
    handleModalClose = (e)=>{
      this.fetchData()
    }
    render() {
        const {selection,isModalVisible}= this.state;
        const customStyles = {
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
          },
        };
        return (
            <div >
            <Modal 
              style={customStyles}
              onRequestClose={()=>this.setState({isModalVisible:false})}
              isOpen={this.state.isModalVisible}
              onAfterOpen={this.handleModalOpen}
              onAfterClose={this.handleModalClose}
              shouldCloseOnOverlayClick
              >
            <Histoslider 
            formatLabelFunction={value=>{
              return this.state.perc2value[Math.floor(value)]}}
            barPadding={0}
            barBorderRadius={0}
            width={500} height={300}
            selectedColor={this.props.color}
    // An array of objects to create the histogram
            data={this.state.data}
    // How much to pad the slider and histogram by, defaults to 20
            padding={20} 
            handleLabelFormat={ "0.3P"}
            selection={selection}
            onChange={array => {
              this.setState({
                selection:array
            })}}
    // The extent of the selection, this doesn't have to be sorted (and you shouldn't sort it to store it)
    // A function to handle a change in the selection
    
  />
            </Modal>
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
    onChange={array => {
      this.setState({
        selection:array
    })}}
    // The extent of the selection, this doesn't have to be sorted (and you shouldn't sort it to store it)
    // A function to handle a change in the selection
    
  />
  <h4 style={{marginTop: '9px'}}><a onClick={this.histoTitleClick} style={{color:'black'}} className="unselectable hvr-grow">
    {this.props.name}
    </a></h4>
  </div>
        )
    }
}
HistoSelector.propTypes={
  data:PropTypes.array.isRequired,
  map:PropTypes.array.isRequired,
  name:PropTypes.string.isRequired,
  color:PropTypes.string.isRequired
}

export default connect(null,{submitFilters,changeSelections})(HistoSelector) 
