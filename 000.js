//shell("svc wifi enable", true)
//toast(123)

//签到之前先关闭该App

//id("frog_float_gif").findOne().click()
//click(475, 1063); //打
//textContains("签到").findOne().click()

//进入Advanced页
toast("123.....")
sleep(5000)
toast("start.....")
toast("start.....")
toast("start.....")
unlock();
toast("end.....")
exit();



//========================= 2019-03-06 =========================

//解锁
function unlock(){
    if(device.isScreenOn()){
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
}