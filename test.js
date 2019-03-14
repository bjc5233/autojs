auto();
const WIDTH = Math.min(device.width, device.height);
const HEIGHT = Math.max(device.width, device.height);
setScreenMetrics(WIDTH, HEIGHT);
var Robot = require("./common/Robot.js");
var robot = new Robot();
toast("开始...")
// ==================================================



// var i = app.intent({
//     action: "VIEW",
//     type: "image/png",
//     data: "file:///sdcard/Pictures/Screenshots/S90311-040913.png"
// });
// context.startActivity(i);
// console.log(device.getAvailMem());

robot.shell("am start -n org.autojs.autojs/.external.open.RunIntentActivity -d file:///storage/emulated/0/脚本/大众点评-签到.js -t text/javascript")



// ==================================================
sleep(10000)
toast("结束...")