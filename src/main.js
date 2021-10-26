const {BrowserWindow, ipcMain} = require('electron')


const Task = require('./models/Task')

function createWindow()
{
    const win = new BrowserWindow(
        {
            width:800,
            height:700,
            webPreferences: {
                nodeIntegration: true,
                contextIsolation: false
            }
        })

    win.loadFile('src/index.html')
}

ipcMain.on('new-task', async (e,args) => {
    const newTask = new Task(args);
    const taskSaved = await newTask.save();
    console.log(taskSaved);
    e.reply('new-task-created', taskSaved);
})
module.exports = {createWindow}

