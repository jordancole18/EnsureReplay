const { ipcRenderer, contextBridge } = require("electron");

contextBridge.exposeInMainWorld("electron", {
  titleApi: {
    closeApp: () => ipcRenderer.send("closeApp"),
    maximizeApp: () => ipcRenderer.send("maximizeApp"),
    minimizeApp: () => ipcRenderer.send("minimizeApp"),
    test: () => ipcRenderer.invoke("test-data"),
  },
  notificationApi: {
    sendNotification(message) {
      ipcRenderer.send("notify", message);
    },
  },
  batteryApi: {},
  filesApi: {},
});
