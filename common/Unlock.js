//解锁
function Unlock(){
    this.unlock = function () {
        if (device.isScreenOn()) {
            return
        }
        
        //点亮屏幕
        device.wakeUp();
        sleep(1000);
        //滑动屏幕到输入密码界面
        swipe(500, 1900, 500, 1000, 1000);
        sleep(1000);
        click(821, 883);sleep(500);
        click(544, 614);sleep(500);
        click(538, 878);sleep(500);
        click(810, 1131);sleep(500);
        click(558, 1414);sleep(500);
        click(542, 1150);sleep(500);
    };
}

module.exports = Unlock;