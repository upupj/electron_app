import { ipcMain } from "electron";

const robot = require("robotjs");

ipcMain.on("robot_action", (_, fn) => {
  const { fnName, params } = fn;
  if (params) {
    robot[fnName](...params);
  } else {
    robot[fnName]();
  }
});

getBrowserWindowRuntime().webContents.openDevTools();
