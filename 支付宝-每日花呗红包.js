auto.waitFor();
var Maid = require("./common/Maid.js");
var maid = new Maid("com.eg.android.AlipayGphone");
var Unlock = require("./common/Unlock.js");
var unlock = new Unlock();
maid.before();
unlock.unlock();
maid.sleep(2);


maid.kill();
maid.sleep(2);
maid.launchActivity("com.alipay.android.phone.businesscommon.globalsearch.ui.MainSearchActivity");
maid.sleep(2);
setText(0, "653090090"); // 来源: 首页惠支付-进入惠支付-支付宝官方(更多)-发红包赚赏金-立即赚赏金
maid.sleep(2);
maid.clickRegTextCenter(".*天天领红包");
maid.sleep(4);
maid.kill();
maid.after();