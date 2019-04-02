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
maid.launchActivity("com.unionpay.activity.UPActivityMain");
maid.sleep(5);
//进入签到页按钮
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