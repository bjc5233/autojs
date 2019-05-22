auto.waitFor();
var Maid = require("./common/Maid.js");
var maid = new Maid("com.baidu.BaiduMap");
var Unlock = require("./common/Unlock.js");
var unlock = new Unlock();
maid.before();
unlock.unlock();
maid.sleep(2);


maid.kill();
maid.sleep(2);
maid.launch();
maid.waitForActivity("com.baidu.baidumaps.MapsActivity");
maid.sleep(5);
if (id("cancel_update").exists()) { //更新弹窗关闭
    maid.clickIdCenter("cancel_update"); 
    maid.sleep(1);
}
maid.clickIdCenter("user_head_portrait_icon");
maid.sleep(4);
maid.clickIdCenter("ll_lv_signin");
maid.sleep(4);
maid.clickTextCenter("不选择地点");


maid.sleep(3);
maid.kill();
maid.after();