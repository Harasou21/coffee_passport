$(function() {
  var i = 1;
  setInterval(function() {
    if(i > 3) i = 1;
    $("#slideshow").css("background-image","url('/app/assets/images/coffee"+i+".jpg')");
    i++;
    }, 1000
  );
});