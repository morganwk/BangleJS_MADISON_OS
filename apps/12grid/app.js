// clear the screen
g.clear();

//define image
var img = {
  width : 176, height : 176, bpp : 1,
buffer : require("heatshrink").decompress(atob("AH4AXh//ACXwhEAsEBwEGgEYAxkQCv4V/Cv4Vxh//ACXwCqpt/Cv4V/Cv4VHh//ACXwCqpt/Cv4V/Cv4VHh//ACXwCqpt/Cv4V/Cv4VHh//ACXwCqpt/Cv4V/Cv4VHh//ACXwCqpt/Cv4V/Cv4VHh//ACXwCqpt/Cv4V/Cv4VHh//ACXwCqpt/Cv4V/Cv4VHh//ACXwCqpt/Cv4V/Cv4VHh//ACXwCqpt/Cv4V/Cv4VHh//ACXwCqpt/Cv4V/Cv4VHh//ACXwCqpt/Cv4V/Cv4VHh//ACXwgAA/ACwA="))
};
function draw() {
  //drawImage
  g.drawImage(img, 0, 0);
  Bangle.buzz(100, 0.5);
}

draw();
