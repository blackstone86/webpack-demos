import React, { Component } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'

class Button extends Component {
  render() {
    return <h1>Hello,Webpack5 From main.js</h1>
  }
}

const container = window.document.getElementById('main')
const root = createRoot(container)
// 在 Root 节点上渲染根组件
root.render(<Button />)
