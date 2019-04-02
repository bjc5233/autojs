auto.waitFor();
var Maid = require("../common/Maid.js");
var maid = new Maid("us.ultrasurf.mobile.ultrasurf");
maid.before(true);

maid.launchActivity("us.ultrasurf.mobile.ultrasurf.MainActivity");
maid.sleep(0.2);
maid.clickIdCenter("mySwitch");
maid.after();