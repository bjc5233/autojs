auto.waitFor();
var Robot = require("./common/Robot.js");
var robot = new Robot();
var Unlock = require("./common/Unlock.js");
var unlock = new Unlock();
robot.before();
unlock.unlock();
// ==================================================

robot.clickTextCenter("支付1元参与挑战 挑战成功奖金更多 ");


// ==================================================
sleep(1000);
robot.after();