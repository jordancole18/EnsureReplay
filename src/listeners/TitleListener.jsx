global.share.ipcMain.on("closeApp", () => {
  global.share.win.close();
});

global.share.ipcMain.on("minimizeApp", () => {
  global.share.win.minimize();
});

global.share.ipcMain.on("maximizeApp", () => {
  if (global.share.win.isMaximized()) {
    global.share.win.unmaximize();
  } else {
    global.share.win.maximize();
  }
});
