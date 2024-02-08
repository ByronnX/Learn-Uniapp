"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_test22 = common_vendor.resolveComponent("uni-test2");
  const _easycom_uni_test32 = common_vendor.resolveComponent("uni-test3");
  (_easycom_uni_test22 + _easycom_uni_test32)();
}
const _easycom_uni_test2 = () => "../../components/uni-test2/uni-test22.js";
const _easycom_uni_test3 = () => "../../components/uni-test3.js";
if (!Math) {
  (Father + _easycom_uni_test2 + _easycom_uni_test3)();
}
const Father = () => "../Father/Father2.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    return (_ctx, _cache) => {
      return {};
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/86138/Documents/HBuilderProjects/Demo/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
