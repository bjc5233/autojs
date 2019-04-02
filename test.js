auto.waitFor();
var Maid = require("./common/Maid.js");
var maid = new Maid();
var Unlock = require("./common/Unlock.js");
var unlock = new Unlock();
maid.before(true);
unlock.unlock();
// ==================================================

toast(getAppName("com.tencent.mm2"));

// ==================================================
maid.sleep(1);
maid.after();