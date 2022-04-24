import React, { Component } from 'react'
import { createRoot } from 'react-dom/client'
import { Input } from 'antd'
import './index.css'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Page Login</h1>
        <Input placeholder="antd input" />
      </div>
    )
  }
}

const container = window.document.getElementById('app')
const root = createRoot(container)
// 在 Root 节点上渲染根组件
root.render(<App />)
