// 操作 DOM 元素，把 content 显示到网页上
function show(content) {
  window.document.getElementById('app').innerText = 'Hello,' + content
}

// 通过 CommonJS 规范导出 show 函数
module.exports = show

// 通过 ES6 规范导出 show 函数，导致热更新失败
// export default show;
