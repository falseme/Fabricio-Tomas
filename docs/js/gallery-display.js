var resized = false;

function display_image(path){
  document.getElementById("dialog-image").setAttribute("src", path);
  document.getElementById("dialog").style.display = "block";
  document.getElementById("dialog-background").style.display = "block";

  if(!resized){
    let h = document.getElementById("dialog").offsetHeight;
    let w = document.getElementById("dialog").offsetWidth;
    let s = screen.height * 2/3;
    document.getElementById("dialog").style.height = s + "px";
    document.getElementById("dialog").style.width = s*w/h + "px";
    resized = true;
  }
}

function hide_image(){
  document.getElementById("dialog").style.display = "none";
  document.getElementById("dialog-background").style.display = "none";
}
