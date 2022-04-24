import React, { Component } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserWindow, app } from '@electron/remote'
import path from 'path'
import './index.css'

class App extends Component {
  constructor() {
    super()
    this.win = null
  }

  // 在按钮被点击时
  handleBtnClick() {
    // 新窗口对应的页面的 URI 地址
    const modalPath = path.join('file://', app.getAppPath(), 'dist/login.html')

    // 新窗口的大小
    this.win = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
        enableRemoteModule: true
      }
    })

    this.win.on('close', () => {
      // 窗口被关闭时清空资源
      this.win = null
    })

    // 加载网页
    this.win.loadURL(modalPath)
    // 显示窗口
    this.win.show()
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
        <h1>Page Index</h1>
        <button onClick={this.handleBtnClick.bind(this)}>
          Open Page Login
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
