auto.waitFor();
var Robot = require("./common/Robot.js");
var robot = new Robot();
var Unlock = require("./common/Unlock.js");
var unlock = new Unlock();
robot.before();

unlock.unlock();
sleep(2000);
device.vibrate(2000);
for(let i = 0; i < 3; i++){
    toast("即将开始autojs定时任务, 请放下设备等待处理!");
}
robot.after();