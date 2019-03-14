# autojs
> 安卓autojs脚本


### 说明
脚本主要用于签到类自动处理

### other
1. 当前机型[魅族16x][1080 x 2160][开发者选项中最小宽度设值380]
2. shell直接运行脚本：
```
am start -n org.autojs.autojs/.external.open.RunIntentActivity -d file:///storage/emulated/0/脚本/大众点评-签到.js -t text/javascript
```
3. autojs自带定时功能可靠性较差，因此使用tasker处理[autojs.prj.xml]