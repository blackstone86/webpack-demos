require('./main.css')

var OfflinePlugin = require('@lcdp/offline-plugin/runtime')

OfflinePlugin.install({
  onInstalled: function () {
    console.log('onInstalled')
  },
  onUpdating: function () {
    console.log('onUpdating')
  },
  onUpdateReady: function () {
    OfflinePlugin.applyUpdate()
  },
  onUpdated: function () {
    window.location.reload()
  }
})

window.document.getElementById('app').innerText = 'Hello,Webpack'
