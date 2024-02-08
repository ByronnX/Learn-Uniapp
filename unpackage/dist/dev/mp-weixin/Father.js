"use strict";
const common_vendor = require("./common/vendor.js");
if (!Math) {
  Son();
}
const Son = () => "./pages/Son/Son2.js";
const _sfc_main = {
  __name: "Father",
  setup(__props) {
    common_vendor.index.$on("sonToFather", function(data) {
      console.log(data, "sonMsg!!!!!!!!!!!");
    });
    function clickToSon() {
      common_vendor.index.navigateTo({
        url: "/pages/Son/Son"
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(clickToSon)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/86138/Documents/HBuilderProjects/Demo/pages/Father/Father.vue"]]);
exports.MiniProgramPage = MiniProgramPage;
