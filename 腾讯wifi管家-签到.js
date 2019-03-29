auto.waitFor();
var Robot = require("./common/Robot.js");
var robot = new Robot();
var Unlock = require("./common/Unlock.js");
var unlock = new Unlock();
robot.before();

unlock.unlock();
sleep(2000);


robot.kill("com.tencent.wifimanager");
sleep(2000);
robot.shell("am broadcast -a com.jozein.xedgepro.PERFORM -e data 4383024334027303023294E64756E647B336F6D607F6E656E647D336F6D6E24756E63656E647E277966696D616E616765627F236F6D6E24756E63656E647E2375627675627E266F62756E2354716E6461627461436479667964797B396E2C636D646D313B396E20796679646D31313939333137353B356E64602165747F6A637D2525483528353522454525483521454521464779666965254735214545214135254535214545224635254735214445224545254535283835224030206020602");
waitForActivity("com.tencent.server.fore.StandardActivity");
sleep(4000);
robot.clickIdCenter("aqt"); //签到按钮


// 阅读n篇资讯
robot.clickNTextCenter("去完成", 3);
for (let i = 0; i < 3; i++) {
    sleep(4000);
    robot.clickIdCenter("gl"); // 每次版本更新可能变更, 注意下
    sleep(3000);
    robot.clickTextCenter("阅读全文");
    robot.pageDown(4, 1000);
    robot.back();
    sleep(2000);
    if (textMatches(".*WiFi增强包.*").exists()) { // 弹窗关闭
        robot.click(556, 1600);
    }
    robot.clickTextCenter("刷新");
}
sleep(2000);
robot.clickTextCenter("我的");
sleep(1000);
robot.clickTextCenter("领取");


sleep(4000);
robot.kill("com.tencent.wifimanager");
robot.after();