var title = "AmBlunk";
var subtitle = "Discover, explore, and own albums that define your sound.";
function hieuung(id,text,delay,done){
  var i = 0;
  var chu = document.getElementById(id);
  function gochu(){
  if(i<text.length){
      chu.textContent += text[i];
      i++;
      setTimeout(gochu,delay);
  }
    else{if(done)done();}
  }
  gochu();
}
hieuung("title", title, 100, function(){
    hieuung("subtitle", subtitle, 100);
});