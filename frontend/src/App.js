import { Input, Space  , Layout, Menu, Breadcrumb } from 'antd';
import { AudioOutlined,UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { useState } from "react"
import DataFinder from "./components/DataFinder";
import Filters from './components/Filters';
const { Search } = Input;
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
function App() {
  const [showAddTask,setShowAddTask]= useState(false)
  const [tasks,setTasks]= useState([])
  const name = 'brad';
  const x =false;
  const deleteTask = (id)=>{
    setTasks(tasks.filter((task)=>(task.id!==id)))
  }
  const addTask = (task)=>{
    console.log(task)
    const id = Math.floor(Math.random()*1000+1)
    const newTask= {id,...task}
    setTasks([...tasks,newTask])
  }
  const toggleReminder = (id)=>{
    setTasks(tasks.map((task) => 
    task.id===id?{...task,reminder:!task.reminder}:task))
  }
  const onSearch = (value)=>{
    console.log(value)
  }
  return (
    <Layout>
    <Header style={{backgroundColor:'white'}} className="header">
      <div  className="logo" >
      <span style={{color:'black'}}>Visual stock logo</span>
      <Search placeholder="Search company" onSearch={onSearch} style={{ width: 300,padding:20 }} />
      </div>
      
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
  );
}

export default App;
