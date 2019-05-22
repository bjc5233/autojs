auto.waitFor();
var Maid = require("./common/Maid.js");
var maid = new Maid("com.tencent.weread");
var Unlock = require("./common/Unlock.js");
var unlock = new Unlock();
maid.before(true);
unlock.unlock();
// ==================================================


maid.clickTextCenter("我的");
maid.sleep(1);
maid.clickTextCenter("领取");




// ==================================================
maid.sleep(1);
maid.after();