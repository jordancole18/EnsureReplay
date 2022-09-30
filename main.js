const { BrowserWindow, app, ipcMain, Notification } = require("electron");
const path = require("path");

const isDev = !app.isPackaged;

function createWindow() {
  const win = new BrowserWindow({
    width: 940,
    height: 680,
    frame: false,
    title: "Ensure Replay",
    webPreferences: {
      nodeIntegration: false,
      worldSafeExecuteJavaScript: true,
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  // set background color to the primary color
  win.setBackgroundColor("#131E2A");

  // global data for ipc listeners
  global.share = { ipcMain, win };

  loadListeners(win);

  win.loadFile("index.html");
}

if (isDev) {
  require("electron-reload")(__dirname, {
    electron: path.join(__dirname, "node_modules", ".bin", "electron"),
  });
}

function loadListeners(win) {
  require("./src/listeners/TitleListener.jsx");
}

app.whenReady().then(createWindow);
