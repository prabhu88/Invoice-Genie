const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require("url");
function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {     
      webSecurity: false
    }
  })
  win.loadURL(
    url.format({
      pathname : path.resolve(__dirname,'build/index.html'),
      protocol: "file:",
      slashes: true
    })
  )
  win.webContents.openDevTools();
  //win.loadFile('build/index.html')
}

app.whenReady().then(() => {
  createWindow()
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})
app.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
