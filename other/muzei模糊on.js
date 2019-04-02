auto.waitFor();
var Maid = require("../common/Maid.js");
var maid = new Maid("net.nurik.roman.muzei");
maid.before(true);
maid.shell("am broadcast -a com.jozein.xedgepro.PERFORM -e data 4334029334023294E64756E647B316364796F6E6D316E64627F69646E296E64756E647E216364796F6E6E2D41494E4B3C61657E6368664C6167637D303873303360303030343B336F6D607F6E656E647D3E65647E2E6572796B6E227F6D616E6E2D657A75696F236F6D6E276F6F676C656E216E64627F69646E216070737E2D657A75696E23756474796E67637E23556474796E676371436479667964797B356E64602");
maid.sleep(0.5);

//进入Advanced页
if (text("Sources").exists()) {
    maid.clickTextCenter("Sources");
    maid.sleep(0.2);
    maid.clickTextCenter("Advanced");
    maid.sleep(0.2);
}
click(508, 936);
maid.sleep(0.2);
maid.home();
maid.after();