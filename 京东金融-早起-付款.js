// TODO 考虑与打卡合并
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
if (desc("查看详细规则").exists()){
    maid.click(558, 1752); // 规则弹窗关闭
    maid.sleep(1);
 }
maid.clickDescCenter("支付 1 元参与挑战");
maid.sleep(4);
maid.clickIdCenter("jdpay_payinfo_txt_pay"); //立即支付
maid.sleep(2);

// 密码不同需要自定义
let pwdPoints = [
    [899, 1838], 
    [525, 1707],
    [553, 1827],
    [881, 1959],
    [573, 2081],
    [551, 1980]
];
maid.clickMulti(pwdPoints, 1);
maid.sleep(6);
maid.kill();
maid.after();