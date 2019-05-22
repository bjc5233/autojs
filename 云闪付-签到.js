auto.waitFor();
var Maid = require("./common/Maid.js");
var maid = new Maid("com.unionpay");
var Unlock = require("./common/Unlock.js");
var unlock = new Unlock();
maid.before();
unlock.unlock();
maid.sleep(2);


maid.kill();
maid.sleep(2);
maid.launch();
maid.waitForActivity("com.unionpay.activity.UPActivityMain");
maid.sleep(5);
if (id("btn_cancel").exists()) {
    maid.clickIdCenter("btn_cancel"); // 关闭更新弹窗
    maid.sleep(2);
}
if (id("frog_float_gif").exists()) {
    maid.clickIdCenter("frog_float_gif"); //进入签到页按钮
    maid.sleep(2);
} else {
    maid.kill();
    exit();   
}
maid.clickTextCenter("签到"); //签到按钮
maid.sleep(2);
maid.kill();
maid.after();