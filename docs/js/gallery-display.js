function display_image(path, w, h, date){
  document.getElementById("dialog-image").setAttribute("src", path);
  document.getElementById("dialog").style.display = "block";
  document.getElementById("dialog-background").style.display = "block";
  document.getElementById("image-date").innerHTML = date;

  // let W = screen.width;
  // let H = screen.height;
  let W = window.innerWidth;
  let H = window.innerHeight;

  //image width - image height
  let ih = H*0.85;
  let iw = ih*w/h;

  document.getElementById("dialog").style.width = iw + "px";
  document.getElementById("dialog").style.height = ih + "px";
}

function hide_image(){
  document.getElementById("dialog").style.display = "none";
  document.getElementById("dialog-background").style.display = "none";
}
