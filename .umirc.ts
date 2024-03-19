import { defineConfig } from "umi";
import { Platform, Arch } from "@umijs/plugin-electron";
import defaultSettings from "./config/defaultSettings";
// import routes from "./config/route";

export default defineConfig({
  npmClient: "yarn",
  plugins: ["@umijs/plugin-electron"],
  electron: {
    builder: {
      targets: Platform.MAC.createTarget(["dmg"], Arch.arm64),
    },
  },
  theme: {
    "primary-color": defaultSettings.primaryColor,
    "font-size-base": "13px",
  },
  // routes,
  fastRefresh: true,
});
