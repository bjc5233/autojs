auto.waitFor();
var Maid = require("./common/Maid.js");
var maid = new Maid("com.jd.jrapp");
var Unlock = require("./common/Unlock.js");
var unlock = new Unlock();
maid.before();
unlock.unlock();
maid.sleep(2);


maid.kill();
maid.sleep(2);
maid.shell("am broadcast -a com.jozein.xedgepro.PERFORM -e data 43830233030236F6D6E2A646E2A6271607070236F6D6E2A646E2A627160707E2D61696E6E2163636F657E647E2D656E25796E2D41696E6D456143647966796479702165747F6A637D25254435224145214345254435224835293345254935283735293135254835293545283440206020602");
waitForActivity("com.jd.jrapp.main.account.me.ui.MainMeActivity");
maid.sleep(5);
maid.clickTextCenter("签到");
maid.sleep(5);
maid.clickDescCenter("签到领钢镚");
maid.sleep(3);
maid.click(950, 828); //签到成功弹窗关闭 TODO检查下，有未成功状态
maid.sleep(1);
maid.click(980, 1850); //进入"双签领京豆"
maid.sleep(4);
maid.clickDescCenter("完成双签领取");
maid.sleep(2);
maid.clickDescCenter("立即领取");
maid.sleep(2);

maid.kill();
maid.after();