auto.waitFor();
var Robot = require("./common/Robot.js");
var robot = new Robot();
var Unlock = require("./common/Unlock.js");
var unlock = new Unlock();
robot.before(true);
unlock.unlock();
// ==================================================
requestScreenCapture()

let templateImg = images.read("resources/苏宁易购-签到-找云钻.png");
let img = robot.getCaptureImg();
let p = findImage(img, templateImg, {threshold: 0.6})
console.log(p)
if (p) {
    sleep(1000)
    robot.click(p.x + templateImg.getWidth()/2, p.y + templateImg.getHeight()/2);
}



// ==================================================
sleep(1000);
robot.after();