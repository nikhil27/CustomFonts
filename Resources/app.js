
/*
* Let's say you downloaded the "Spicy Rice" font from Google WebFonts.
* You'd have a file named SpicyRice-Regular.ttf in your fonts directory
*/
var win = Ti.UI.createWindow({
	backgroundColor:'white'
});
var customFont = 'PT Sans'; // use the friendly-name on iOS
if(Ti.Platform.osname=='android') {
   // on Android, use the "base name" of the file (name without extension)
   customFont = 'PTS56F';
} 
 
var label1 = Titanium.UI.createLabel({
   color:'#000',
   text:'Hello World !',
   font:{
      fontSize:40,
      fontFamily: customFont
   },
   textAlign:'center',
   width:'auto'
});
win.add(label1);
win.open();
