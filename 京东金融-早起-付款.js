auto.waitFor();
var Robot = require("./common/Robot.js");
var robot = new Robot();
var Unlock = require("./common/Unlock.js");
var unlock = new Unlock();
robot.before();

unlock.unlock();
sleep(2000);


robot.kill("com.jd.jrapp");
sleep(2000);
robot.shell("am broadcast -a com.jozein.xedgepro.PERFORM -e data 43830233030236F6D6E2A646E2A6271607070236F6D6E2A646E2A627160707E2D61696E6E2163636F657E647E2D656E25796E2D41696E6D456143647966796479702165747F6A637D25254435224145214345254435224835293345254935283735293135254835293545283440206020602");
waitForActivity("com.jd.jrapp.main.account.me.ui.MainMeActivity");
sleep(5000);
robot.clickTextCenter("早起打卡");
sleep(5000);
if (desc("查看详细规则").exists()){
    robot.click(558, 1752); // 规则弹窗关闭
    sleep(1000);
 }
robot.clickDescCenter("支付 1 元参与挑战");
sleep(4000);
robot.clickIdCenter("jdpay_payinfo_txt_pay"); //立即支付
sleep(2000);

// 密码不同需要自定义
let pwdPoints = [
    [899, 1838], 
    [525, 1707],
    [553, 1827],
    [881, 1959],
    [573, 2081],
    [551, 1980]
];
robot.clickMulti(pwdPoints, 1000);
sleep(6000);
robot.kill("com.jd.jrapp");
robot.after();