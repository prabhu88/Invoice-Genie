const fs = require('fs')
const os = require('os')
const url = require('url')
const path = require('path')
//const glob = require(glob)
const isDev = require('electron-is-dev')
const omit = require('lodash').omit

const {app,BrowserWindow,ipcMain} = require('electron')
//const appConfig = require('electron-settings')

const centerDisplay = require('./helpers/center-display')

function addDevToolsExtension() {
    if (process.env.DEVTRON_DEV_TOOLS_PATH)
        BrowserWindow.addDevToolsExtension(process.env.DEVTRON_DEV_TOOLS_PATH)
    if (process.env.REACT_DEV_TOOLS_PATH)
        BrowserWindow.addDevToolsExtension(process.env.REACT_DEV_TOOLS_PATH)
    if (process.env.REDUX_DEV_TOOLS_PATH)
        BrowserWindow.addDevToolsExtension(process.env.REDUX_DEV_TOOLS_PATH)
}
let mainWindow = null;
function createMainWindow(){
    const width = 700;
    const height = 600;
    const winPOS = centerDisplay(width, height);
    mainWindow = new BrowserWindow({
        x: winPOS.x,
        y: winPOS.y,
        width,
        height,
        minWidth: 700,
        minHeight: 500,
        backgroundColor: '#2e2c29',        
        webPreferences: {            
            webSecurity: false
        }
    })
    //mainWindow.loadFile('./build/index.html')
    mainWindow.loadURL(
        url.format({
          pathname: path.join(__dirname, './build/index.html'),
          protocol: 'file:',
          slashes: true,
        })
    );
    mainWindow.on('show', event => {
        if (isDev || forceDevtools) mainWindow.webContents.openDevTools({ mode: 'detach' });
    });
    mainWindow.on('close', event => {
        if (process.platform === 'darwin') {
          event.preventDefault();
          if (isDev || forceDevtools) mainWindow.webContents.closeDevTools();
          mainWindow.hide();
        } else {
          app.quit();
        }
    });
}
function initialize(){
    app.on('ready',()=>{
        createMainWindow()
        if (isDev) addDevToolsExtension();
    })
    app.on('before-quit',()=>{
        if (mainWindow !== null) mainWindow.destroy();
    })
    console.timeEnd('init');
}
initialize()
