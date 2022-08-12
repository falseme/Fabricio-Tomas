function display_image(path, w, h){
  document.getElementById("dialog-image").setAttribute("src", path);
  document.getElementById("dialog").style.display = "block";
  document.getElementById("dialog-background").style.display = "block";

  if(w > h){
    let s = screen.width * 2/3;
    document.getElementById("dialog").style.width = s + "px";
    document.getElementById("dialog").style.height = s*h/w + "px";
  }else{
    let s = screen.height * 2/3;
    document.getElementById("dialog").style.height = s + "px";
    document.getElementById("dialog").style.width = s*w/h + "px";
  }
}

function hide_image(){
  document.getElementById("dialog").style.display = "none";
  document.getElementById("dialog-background").style.display = "none";
}
