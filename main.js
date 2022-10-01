const { BrowserWindow, app, ipcMain, Tray, Menu } = require("electron");
const path = require("path");

const isDev = !app.isPackaged;
var isQuiting = false;

app.on("before-quit", function () {
  isQuiting = true;
});

function createWindow() {
  const win = new BrowserWindow({
    width: 940,
    height: 680,
    maxWidth: 940,
    maxHeight: 680,
    frame: false,
    title: "Ensure Replay",
    resizable: false,
    webPreferences: {
      nodeIntegration: false,
      worldSafeExecuteJavaScript: true,
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  // set the window icon
  win.setIcon(path.join(__dirname, "assets", "logo.png"));

  // set background color to the primary color
  win.setBackgroundColor("#131E2A");

  // global data for ipc listeners
  global.share = { ipcMain, win };

  loadListeners(win);

  initTray(win);

  win.loadFile("index.html");
  win.openDevTools();
}

if (isDev) {
  require("electron-reload")(__dirname, {
    electron: path.join(__dirname, "node_modules", ".bin", "electron"),
  });
}

function loadListeners(win) {
  require("./src/listeners/TitleListener.jsx");
}

function initTray(win) {
  const tray = new Tray(path.join(__dirname, "assets", "logo.png"));

  const devMenu = {
    label: "Dev Menu",
    submenu: [
      {
        label: "Toggle Dev Tools",
        click: () => {
          win.webContents.toggleDevTools();
        },
      },
      {
        label: "Reload",
        click: () => {
          win.reload();
        },
      },
    ],
  };

  tray.setContextMenu(
    Menu.buildFromTemplate([
      {
        label: "Open",
        click: function () {
          win.show();
        },
      },
      {
        label: "Exit",
        click: function () {
          isQuiting = true;
          app.quit();
        },
      },
      isDev ? devMenu : null,
    ])
  );

  win.on("close", function (event) {
    if (!isQuiting) {
      event.preventDefault();
      win.hide();
      event.returnValue = false;
    }
  });

  win.on("minimize", function (event) {
    event.preventDefault();
    win.hide();
  });

  tray.setToolTip("Ensure Replay");
  tray.on("click", () => {
    win.show();
  });
}

app.whenReady().then(createWindow);
