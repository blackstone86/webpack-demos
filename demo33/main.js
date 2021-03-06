import React from 'react'
import { createRoot } from 'react-dom/client'
import { AppComponent } from './AppComponent'
import './main.css'

const container = window.document.getElementById('main')
const root = createRoot(container)
// 在 Root 节点上渲染根组件
root.render(<AppComponent />)

// 只有当开启了模块热替换时 module.hot 才存在
if (module.hot) {
  // accept 函数的第一个参数指出当前文件接受哪些子模块的替换，这里只接受 ./AppComponent 这个子模块
  // 第二个参数用于在新的子模块加载完毕后需要执行的逻辑
  module.hot.accept(['./AppComponent'], () => {
    // 重新执行下组建渲染逻辑
    root.render(<AppComponent />)
  })
}
