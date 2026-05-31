window.addEventListener('DOMContentLoaded', () => {
  console.log("App is loaded!");
});

const { contextBridge, shell } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  openExternal: (url) => shell.openExternal(url)
});
