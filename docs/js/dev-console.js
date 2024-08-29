const text_left = "<b>></b>";
const text_right = "<b>_</b> Developer";
const text_right_space = "<b>&nbsp</b> Developer";

var text_console = document.getElementById("dev-console");
var text = ""; // text to display
var text_list = [" Java", " C++", " C#", " Backend"];
var index = 100; // index inside text_list
var chars = 0; // character count

var waiting = true; // says if must wait a few seconds before start typing again
var max_wait = 9;
var wait_count = 0;
var display_dash = true;

var erasing = false;

const console_interval = setInterval(() => {
    
    if(waiting){
        
        if(display_dash)
            text_console.innerHTML = text_left + text + text_right;
        else
            text_console.innerHTML = "<b>></b>" + text + text_right_space;
        
        if(wait_count % 3 == 0)
            display_dash = !display_dash;

        // erase
        if(wait_count > max_wait){
            wait_count = 0;
            max_wait = 18;
            waiting = false;
            erasing = true;
        }
        wait_count++;

        return;
    }

    if(erasing){

        text = text.substring(0, text.length-1);
        text_console.innerHTML = text_left + text + text_right;

        // reset
        if(text.length == 0){
            chars = 0;
            index++;
            if(index >= text_list.length)
                index = 0;
            erasing = false;
        }

        return;
    }
    
    chars++;
    if(chars > text_list[index].length) {
        waiting = true;
        display_dash = false;
    }
    text = text_list[index].substring(0, chars);
    text_console.innerHTML = text_left + text + text_right;
}, 110);