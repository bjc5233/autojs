auto();
const WIDTH = Math.min(device.width, device.height);
const HEIGHT = Math.max(device.width, device.height);
setScreenMetrics(WIDTH, HEIGHT);
var Robot = require("./common/Robot.js");
var robot = new Robot();
toast("开始...")
// ==================================================




//sleep(5000);
//robot.clickRegTextCenter("\\+\\d+里程");
robot.clickRegDescCenter("签到\\+\\d+里程");

// ==================================================
sleep(1000)
toast("结束...")