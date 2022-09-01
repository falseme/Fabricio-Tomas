var pfp = document.getElementById("pfp-big");
var dir = 0.0; // linear gradient direction

const interval = setInterval(function(){
  pfp.style.background = "linear-gradient(#151515 0 0) padding-box, linear-gradient("+dir+"deg, var(--orange), var(--orange2)) border-box";
  dir += 1;

  // console.log("out- " + dir);
}, 8);
