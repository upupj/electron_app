import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("$api", {
  getPlatform: async () => {
    return await ipcRenderer.invoke("getPlatform");
  },
});

contextBridge.exposeInMainWorld("electronAPI", {
  robotAction: (fn) => ipcRenderer.send("robot_action", fn),
});
