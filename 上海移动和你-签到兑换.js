// [上海移动和你-签到.js]执行后30分钟再执行
auto.waitFor();
var Maid = require("./common/Maid.js");
var maid = new Maid("com.sh.cm.shydhn");
var Unlock = require("./common/Unlock.js");
var unlock = new Unlock();
maid.before();
unlock.unlock();
maid.sleep(2);


//该APP在wifi下连接速度很慢, 转到移动数据连接
shell("svc wifi disable", true);
shell("svc data enable", true);
maid.sleep(2);



maid.kill();
maid.sleep(2);
maid.launchActivity("com.richeninfo.cm.shydhn.ui.v4.ui.activity.HomeActivity");
maid.sleep(8);
if (id("iv_close1").exists()) {
    maid.clickIdCenter("iv_close1"); //弹出的广告
    maid.sleep(2);
}
maid.click(979, 2077); //我的
maid.sleep(5);


maid.click(132, 1678); //我的礼包
maid.sleep(4);


while (text("兑换").exists()) {
    maid.clickTextCenter("兑换");
    maid.sleep(1);
    maid.clickTextCenter("确定");
    maid.sleep(5);
}
maid.kill();

shell("svc wifi enable", true);
shell("svc data disable", true);
maid.sleep(2);
maid.after();