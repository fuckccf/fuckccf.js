const CCF = require("fuckccf.js").default;
var 我 = {
  问候全家: CCF.fuck,
};
CCF.on("被问候全家", () => {
  console.log("CCF被问候全家了");
});
我.问候全家(CCF);
