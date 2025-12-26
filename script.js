// === AUDIO ===

// === OnClick ---> Buttons ===
const audio = new Audio("sounds/zapsplat_multimedia_plastic_button_press_light_fast_113387.mp3");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        audio.currentTime = 0;
        audio.play();
    });
});


// === OTHERS ===

// === OnClick --> FunnyButton ===
const button = document.querySelector("#FunnyButton");

const handleClick = () => { 
    window.open("https://www.pou.me/");
}

button.addEventListener("click", handleClick);


// == YELLOW MAN ===

// === Draggable ===
// Make the Yellow Freak draggable:
dragElement(document.getElementById("yellow-freak"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    // cursor grabbing
    elmnt.style.cursor = "grabbing";
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // cursor grab
    elmnt.style.cursor = "grab";
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

// === Clicking after 7 times ===
const yellowFreak = document.getElementById("yellow-freak");
let clickCount = 0;

const handleSevenClicks = () => { 
    alert("Clicked 7 times in a row!");
    window.open("yellow.html");
    clickCount = 0;
};

yellowFreak.addEventListener("click", () => {
    clickCount++;
    if (clickCount === 7) {
        handleSevenClicks();
    }
});
