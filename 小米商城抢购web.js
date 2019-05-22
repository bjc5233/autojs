if (!device.isScreenOn()) {
    unlock("hgfh$68ug");//里面是你的锁屏密码
    sleep(1000);
}
app.launchApp("小米商城");
sleep(7000); //广告时间
click(400, 900); // 进入闪购
var x = 900; // 抢购按钮横坐标
// 抢购按钮纵坐标,哪行不需要就把哪行注释掉
var ys = [
    1075,
    1410,
    1745,
    2079
];
var count = ys.length; // 1元抢商品数量
// 闪购结束时间，用来控制脚本结束
var now = new Date();
now.setHours(now.getHours() + 1); // 提前30秒进入，时间向下个整点取整
now.setMinutes(0);
now.setSeconds(0);
const timeout = now;
console.log("当前闪购结束时间：" + timeout.toLocaleString());

var quickClick = function(i) {
    while (new Date() <= timeout) {

        click(x, ys[i]);
        if (text("购物车").find().nonEmpty()) {
            log("加入购物车");
            sleep(500);
            click(740, 2090); // 右下立即抢购
            sleep(500);
            click(840, 2090); // 下部立即抢购
            log("结算");
            sleep(500);
            click(840, 2090); // 结算
            if (text("去付款").findOne()) {
                toastLog("结算成功，等待付款");
                device.vibrate(3000);
            }
            exit();
        }

    }
}
//开启多线程，同时点击，如果系统支持的话
threads.start(function() {
    quickClick(0);
});
threads.start(function() {
    quickClick(1);
});
threads.start(function() {
    quickClick(2);
});
threads.start(function() {
   // quickClick(3);
});
//解锁
function unlock() {
    device.wakeUpIfNeeded();
    sleep(500);
    swipe(563, 1600, 500, 1300, 100);
    if (arguments[0]) {
        sleep(500);
        inputPsw(arguments[0]);
        tc("确认", 1000); // 确认
        log("成功解锁");
    }
}

//输入密码
function inputPsw(password) {
    for (var i = 0; i < password.length; i++) {
        var ch = password.charAt(i);
        if (new RegExp("[A-Z]").test(ch)) {
            if (text("ABC").find()) {
                tc("ABC"); // 如果是数字状态需要切换到字母状态
            }
            if (text(ch).find().empty()) {
                var caps = className("TextView").idEndsWith("btn_caps_lock").findOnce();
                print(caps);
                caps.click(); // 若是小写键盘则切换caps
            }
            tc(ch, 1000);
        } else if (new RegExp("[a-z]").test(ch)) {

            if (text("ABC").find()) {
                tc("ABC"); // 如果是数字状态需要切换到字母状态
            }
            if (text(ch).find().empty()) {
                className("TextView").idEndsWith("btn_caps_lock").findOnce().click(); // 切换caps
            }
            tc(ch);
        } else {
            if (text("123").find()) { // 切换到数字符号
                tc("123");
            }
            tc(ch);
        }
    }
}

// 延迟0.1秒点击包含字符串string的控件
function tc(string) {
    var time = (arguments[1]) ? arguments[1] : 100;
    sleep(time);
    click(string);
};