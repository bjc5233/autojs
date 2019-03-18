auto.waitFor();
var Robot = require("./common/Robot.js");
var robot = new Robot();
var Unlock = require("./common/Unlock.js");
var unlock = new Unlock();
robot.before();
unlock.unlock();
// ==================================================


robot.click(540, 987); //收金币按钮

// ==================================================
sleep(1000);
robot.after();