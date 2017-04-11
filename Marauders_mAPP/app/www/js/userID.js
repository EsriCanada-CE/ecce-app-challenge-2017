window.setInterval("test()", 3000);
function test(){
  var pryDist = document.getElementById("pryDist");
  if(typeof pryDist !== "undefined" && pryDist !== null){
    var pry = document.getElementById("pryDist").innerHTML;
    Shiny.onInputChange("valDist", pry);
  }
}
