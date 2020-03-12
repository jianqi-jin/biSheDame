const {app, BrowserWindow} = require('electron')

function createWindow(){
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeINtegration: true
        }
    })

    win.loadURL('http://localhost:8081')

    win.webContents.openDevTools()
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin'){
        app.quit()
    }
})
app.on('activate', () => {
    if(BrowserWindow.getAllWindows().length == 0){
        createWindow()
    }
})