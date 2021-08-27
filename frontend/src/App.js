import React, { Component } from 'react';
import {Provider} from 'react-redux';
import { Input, Space  , Layout, Menu, Breadcrumb } from 'antd';
import { AudioOutlined,UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import DataFinder from "./components/DataFinder";
import Filters from './components/Filters';
import store from './store';
const { Search } = Input;
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

class App extends Component {
   onSearch = (value)=>{
    console.log(value)
  }
  render() {
    return (
      <Provider store={store}>
        <Layout>
          <Header style={{backgroundColor:'white'}} className="header">
            <div  className="logo" >
            <span style={{color:'black'}}>Visual stock logo</span>
            <Search placeholder="Search company" onSearch={this.onSearch} style={{ width: 300,padding:20 }} />
            </div>
            {/* <Menu inlineCollapsed={false} theme="light" mode="horizontal" >
              {new Array(1).fill(null).map((_, index) => {
                const key = index + 1;
                return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
              })}
              <Menu.Item key={0}>1</Menu.Item>
              <Menu.Item key={1}>2</Menu.Item>
              <Menu.Item key={2}><UserOutlined /></Menu.Item>
            </Menu> */}
          </Header>
          <Layout>
            <Sider width={350} style={{backgroundColor:'white',marginLeft:'20px'}} className="site-layout-background">
              <Filters></Filters>
            </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
              <Content
                className="site-layout-background"
                style={{
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                }}
              >
                
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </Provider>
      
    );
  }
}

export default App;
