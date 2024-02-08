"use strict";
const common_vendor = require("./common/vendor.js");
const _sfc_main = {
  __name: "Son",
  setup(__props) {
    let msg = "this is a son msg!";
    common_vendor.index.$emit("sonToFather", msg);
    function clickBack() {
      console.log("点击返回");
      common_vendor.index.navigateBack();
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(clickBack)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/86138/Documents/HBuilderProjects/Demo/pages/Son/Son.vue"]]);
exports.MiniProgramPage = MiniProgramPage;
