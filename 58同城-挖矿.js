auto.waitFor();
var Maid = require("./common/Maid.js");
var maid = new Maid("com.wuba");
var Unlock = require("./common/Unlock.js");
var unlock = new Unlock();
maid.before();
unlock.unlock();
maid.sleep(2);


maid.kill();
maid.sleep(2);
maid.shell("am broadcast -a com.jozein.xedgepro.PERFORM -e data 438302433402231363023294E64756E647B336F6D607F6E656E647D336F6D6E277572616F2E2869726279646E234F6D6D6F6E67556261436479667964797B335E20727F647F636F6C6D3527324522323071676564797075652232352331452232336F6D6D6F6E65223235223345223235727C65223235233145223238647470737523314525334522364525334522364D6167696369637C616E646E25383E236F6D65253345223647756265253345223646752533452236486F6D656522323522334522323479647C65652232352331452232352547352145352935452545352145352837352547352936452246452232352233452232316364796F6E6522323523314522323C6F616460716765652232352233452232316364796F6E6F58616E646C656275223235233145223238647470737523314525334522364525334522364D65637373656E6475627E25383E236F6D6525334522364160707525334522364D656373796E64656875233645737562796465233443303034393233303632303637393522363F63752334416E64627F69646522323527344B335E26627F6D6F51636479667964797F5E616D656D336F6D6E277572616E21636479667964797E27756261636479667964797E23596E676C656C496E6B656461436479667964797B335E24727164656C696E656D336F62756B335E20716765647970756D336F6D6D6F6E6B324E2A657D607F59637F56696E6963786D36616C63756B356E64602165747F6A637D253835254535293035283345254535293645283545254635283345293635254735293645224640206020602");
waitForActivity("com.wuba.hybrid.CommonWebActivity");
maid.sleep(5);
//========================= 早起打卡 =========================
scrollDown(); //滚动到[早起打卡]
maid.sleep(2);
maid.clickTextCenter("打卡");
maid.sleep(2);
maid.clickTextCenter("close"); // 打卡成功弹窗关闭
maid.sleep(2);
maid.clickTextCenter("积极\n参与"); //继续支付0.01g矿石参与早起打卡
maid.sleep(2);
maid.clickTextCenter("立即\n参与"); //继续支付0.01g矿石参与早起打卡
maid.sleep(2);




//========================= 分享帖子 - 分享 =========================
scrollUp(); //滚动到[挖矿任务]
maid.sleep(1);
maid.clickTextCenter("分享帖子");
maid.sleep(2);
for (let i = 0; i < 10; i++) {
    maid.sleep(2);
    maid.clickTextCenter("分享得矿石");
    maid.sleep(1);
    maid.clickSelectorCenter(id("title_right_im_layout").id("title_icon")); //分享按钮
    maid.sleep(1);
    maid.clickTextCenter("微信好友");
    maid.sleep(2);
    text("搜索").setText("文件传输助手");
    maid.sleep(1);
    maid.clickSelectorCenter(className("android.widget.TextView").text("文件传输助手"));
    maid.sleep(1);
    maid.clickSelectorCenter(className("android.widget.Button").text("分享"));
    maid.sleep(1);
    maid.clickSelectorCenter(className("android.widget.Button").text("返回58 同城"));
    maid.sleep(2);
    maid.back();
    maid.sleep(2);
    swipe(500, 2000, 500, 200, 1000);
}
maid.sleep(2);
maid.kill();


//========================= 分享帖子 - 查看 =========================
maid.sleep(2);
maid = new Maid("com.tencent.mm");
maid.launchActivity("com.tencent.mm.plugin.fts.ui.FTSMainUI"); //微信搜索
className("android.widget.EditText").text("搜索").setText("文件传输助手");
maid.sleep(1);
maid.clickSelectorCenter(className("android.widget.TextView").text("文件传输助手"));//进入[文件传输助手]
maid.sleep(3);
var postPageCounter = 0;
while (postPageCounter < 3) {
    let onePagePosts = text("58 同城").find();
    for (let post of onePagePosts) {
        maid.clickCenter(post.parent().parent().parent());
        maid.sleep(9);
        let popu = className("android.widget.Button").text("取消");
        if (popu.exists()) {
            maid.clickSelectorCenter(popu);
            maid.sleep(1);
        }
        maid.back();
        maid.sleep(2);
    }
    scrollUp();
    maid.sleep(2);
    postPageCounter ++;
}
maid.sleep(2);
maid.home();
maid.after();