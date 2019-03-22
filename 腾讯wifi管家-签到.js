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
sleep(2000);
robot.kill("com.tencent.wifimanager");
robot.after();