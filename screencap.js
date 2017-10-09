var page = require('webpage').create();

//CHANGE SETTINGS HERE
var myurl = 'http://datadrop-dev.startribune.com/20170712-mnrecovery/builds/production/'; //WEBPAGE URL HERE
var target = '#mapPersonal'; //THE TARGET DIV OR OTHER HTML ELEMENT ON WEBPAGE
var imagename = 'screencap.png'; //OUTPUT FILENAME

page.open(myurl, function() {
    
  page.viewportSize = { width: 1020, height: 90 };

  var clipRect = page.evaluate(function(){
   
    return document.querySelector(target).getBoundingClientRect();
  });

    //CHANGE IMAGE SIZE
  page.clipRect = {
    top:    clipRect.top,
    left:   clipRect.left,
    width:  976,
    height: clipRect.height
  };

  	//TESTING FOR WHETHER PAGE IS FULLY LOADED BEFORE SNAPPING SCREENSHOT
window.setTimeout(function () {
  var testIt = page.evaluate(function(){
    return document.getElementById('done').innerHTML;
  });

    //SAVE IMAGE TO LOCAL FOLDER
  if (testIt == "DONE"){
  page.render(imagename);
  phantom.exit();
  }
}, 10000);

});