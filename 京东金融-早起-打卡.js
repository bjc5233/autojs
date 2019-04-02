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
maid.clickTextCenter("早起打卡");
maid.sleep(5);


click(475, 1063); // 打卡
maid.sleep(2);
maid.kill();
maid.after();