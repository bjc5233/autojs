auto.waitFor();
var Maid = require("./common/Maid.js");
var maid = new Maid("com.tencent.weread");
var Unlock = require("./common/Unlock.js");
var unlock = new Unlock();
maid.before();
unlock.unlock();
maid.sleep(2);


maid.kill();
maid.sleep(2);
maid.launchActivity("com.tencent.weread.WeReadFragmentActivity");
maid.sleep(3);
maid.clickTextCenter("我");
maid.sleep(2);
maid.clickTextCenter("无限卡");
maid.sleep(2);
maid.clickRegTextCenter("免费领取.*天无限卡");
maid.sleep(2);
maid.clickRegTextCenter("分享领取.*天无限卡");
maid.sleep(2);
maid.back();
maid.sleep(2);
maid.clickTextCenter("退出");
maid.sleep(2);
maid.kill();
maid.after();