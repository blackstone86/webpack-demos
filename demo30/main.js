// import 'core-js/actual/object/assign';
// import 'core-js/actual/promise';
// import 'whatwg-fetch';

import React, { Component } from 'react'
import { createRoot } from 'react-dom/client'

class Button extends Component {
  render() {
    return <h1>Hello,Webpack</h1>
  }
}

const container = window.document.getElementById('app')
const root = createRoot(container)
// 在 Root 节点上渲染根组件
root.render(<Button />)
