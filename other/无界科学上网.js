auto.waitFor();
var Robot = require("./common/Robot.js");
var robot = new Robot();
var Unlock = require("./common/Unlock.js");
var unlock = new Unlock();
robot.before(true);

launch("us.ultrasurf.mobile.ultrasurf");
waitForActivity("us.ultrasurf.mobile.ultrasurf.MainActivity");
sleep(200);
robot.clickIdCenter("mySwitch");
robot.after();