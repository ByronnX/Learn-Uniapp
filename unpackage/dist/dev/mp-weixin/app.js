"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/Father/Father.js";
  "./pages/Son/Son.js";
  "./pages/uni-test/uni-test.js";
  "./components/uni-test2/uni-test2.js";
}
const _sfc_main = {
  onLoad() {
    console.log("页面加载------1");
  },
  onShow() {
    console.log("页面显示----2");
  }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/86138/Documents/HBuilderProjects/Demo/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
