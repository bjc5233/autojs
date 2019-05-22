auto.waitFor();
var Maid = require("./common/Maid.js");
var maid = new Maid("com.tencent.wifimanager");
var Unlock = require("./common/Unlock.js");
var unlock = new Unlock();
maid.before();
unlock.unlock();
maid.sleep(2);


maid.kill();
maid.sleep(2);
maid.shell("am broadcast -a com.jozein.xedgepro.PERFORM -e data 4383024334027303023294E64756E647B336F6D607F6E656E647D336F6D6E24756E63656E647E277966696D616E616765627F236F6D6E24756E63656E647E2375627675627E266F62756E2354716E6461627461436479667964797B396E2C636D646D313B396E20796679646D31313939333137353B356E64602165747F6A637D2525483528353522454525483521454521464779666965254735214545214135254535214545224635254735214445224545254535283835224030206020602");
waitForActivity("com.tencent.server.fore.StandardActivity");
maid.sleep(4);
maid.clickIdCenter("aqt"); //签到按钮


// 阅读2篇资讯
maid.sleep(7);
maid.clickNTextCenter("去完成", 3);
for (let i = 0; i < 3; i++) {
    maid.sleep(4);
    maid.clickIdCenter("gl"); // 每次版本更新可能变更, 注意下
    maid.sleep(3);
    maid.clickTextCenter("阅读全文");
    maid.pageDown(4, 1);
    maid.back();
    maid.sleep(2);
    if (textMatches(".*WiFi增强包.*").exists()) { // 弹窗关闭
        maid.click(556, 1600);
    }
    if (text("WiFi连接受阻").exists()) { // 弹窗关闭
        maid.click(518, 1690);
    }
    maid.clickTextCenter("刷新");
}
maid.sleep(8);
maid.clickTextCenter("我的");
maid.sleep(2);
maid.clickTextCenter("领取");
maid.sleep(3);
maid.kill();
maid.after();