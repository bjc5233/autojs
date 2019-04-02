auto.waitFor();
var Maid = require("./common/Maid.js");
var maid = new Maid();
var Unlock = require("./common/Unlock.js");
var unlock = new Unlock();
maid.before();

unlock.unlock();
maid.sleep(2);
device.vibrate(2000);
for(let i = 0; i < 3; i++){
    toast("即将开始autojs定时任务, 请放下设备等待处理!");
}
maid.after();