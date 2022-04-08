import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

class App extends Component {
  render() {
    return <h1>Page Detail</h1>
  }
}

const container = window.document.getElementById('app');
const root = createRoot(container);
// 在 Root 节点上渲染根组件
root.render(<App/>);
