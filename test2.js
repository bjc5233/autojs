
toast(123)
var window = floaty.rawWindow(
    <canvas id="board" h="{{device.height}}" w="{{device.width}}" />
  );
  window.setTouchable(false);
  setInterval(()=>{},3000)

window.board.on("draw", function (canvas) {
    var context = canvas.getContext("2d");
    toast(context)
  })

  setTimeout(()=>{
    w.close();
}, 2000);