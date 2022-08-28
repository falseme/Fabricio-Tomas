var pfp = document.getElementById("pfp-big");
var dir = 0.0; // linear gradient direction

const interval = setInterval(function(){
  pfp.style.background = "linear-gradient(#151515 0 0) padding-box, linear-gradient("+dir+"deg, #0DCAF0, #0d4df0) border-box";
  dir += 1;

  // console.log("out- " + dir);
}, 8);
