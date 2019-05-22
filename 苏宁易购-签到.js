auto.waitFor();
var Maid = require("./common/Maid.js");
var maid = new Maid("com.suning.mobile.ebuy");
var Unlock = require("./common/Unlock.js");
var unlock = new Unlock();
maid.before();
unlock.unlock();
maid.sleep(2);


maid.kill();
maid.sleep(2);
maid.shell("am broadcast -a com.jozein.xedgepro.PERFORM -e data 438302433402132323023294E64756E647B3C61657E6368664C6167637D303873303430303030303B336F6D607F6E656E647D336F6D6E23757E696E676E2D6F62696C656E256265797F236F6D6E23757E696E676E2D6F62696C656E257367767E25796E2755626659656771436479667964797B335E2261636B67627F657E646D38647470737523314522364522364679607E23757E696E676E236F6D6522364D652236447F694E6465687E28647D6B396E237F657273656D303B335E216469446D38647470737523314522364522364679607E23757E696E676E236F6D6522364D652236447F694E6465687E28647D6B335E277562667965677F537F657273656D3525453522413529353525473521443522414D2525493521463529363525493521413522453D2B356E64602165747F6A637D25254835283245283645254535214545283135254635293835293335254835224435214445254735214445224545254535283835224030206020602");
waitForActivity("com.suning.mobile.ucwv.ui.WebViewActivity");
maid.sleep(8); //偶尔会有读秒广告
// maid.click(914, 348); //进入签到页
// maid.sleep(5);
if (text("连续参与才能继续膨胀哦~").exists()) {
    maid.click(540, 1281); //关闭弹窗: 我知道了
    maid.sleep(1);
}
if (textStartsWith("恭喜你！").exists()) { // 恭喜你！连续膨胀了7天
    maid.click(555, 1255); //关闭弹窗: 收下啦
    maid.sleep(1);
}

let signStrs = ["签到奖励", "云钻", "签到集up", "疯抢48小时"];
signStrs.forEach(function (str) {
    if (text(str).exists()) {
        maid.clickTextCenter(str);
        maid.sleep(3);
    }
});


//找云钻
requestScreenCapture();
for (let i = 0; i < 3; i++) {
    let starEnterImg = images.read("resources/苏宁易购-签到-找云钻.png");
    let starEnterPos = findImage(maid.getCaptureImg(), starEnterImg, {threshold: 0.6});
    if (starEnterPos) {
        maid.click(starEnterPos.x + starEnterImg.getWidth()/2, starEnterPos.y + starEnterImg.getHeight()/2);
        maid.sleep(6);
        maid.back();
        maid.sleep(6);
        let starImg = images.read("resources/苏宁易购-签到-云钻.png");
        let starPos = findImage(maid.getCaptureImg(), starImg, {threshold: 0.6});
        if (starPos) {
            maid.click(starPos.x + starImg.getWidth()/2, starPos.y + starImg.getHeight()/2);
            maid.sleep(4);
        }
        maid.sleep(2);
    }
}

maid.kill();
maid.after();