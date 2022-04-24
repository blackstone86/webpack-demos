import React, { Component } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

class App extends Component {
  constructor() {
    super()
    this.win = null
  }

  // 在按钮被点击时
  handleBtnClick() {
    //打开子窗口  第一个参数是子窗口的路径  第二个参数是起的别名
    this.win = window.open('./detail.html', 'popup')
  }

  handleCloseBtnClick() {
    const { win } = this
    if (win) {
      win.close()
    }
  }

  render() {
    return (
      <div>
        <h1>Page Login</h1>
        <button onClick={this.handleBtnClick.bind(this)}>
          Open Page Detail
        </button>
        <br />
        <button onClick={this.handleCloseBtnClick.bind(this)}>
          Close Sub Win
        </button>
      </div>
    )
  }
}

const container = window.document.getElementById('app')
const root = createRoot(container)
// 在 Root 节点上渲染根组件
root.render(<App />)
