$(document).ready(function(){
    function getColor() {
    return '#' + Math.random().toString(16).slice(2, 8);
  }

    setInterval(function(){$("body").css("background-color",getColor);},2000);





});