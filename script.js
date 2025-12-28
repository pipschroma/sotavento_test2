// To bring popups forward
let highestZIndex = 1000;

function bringToFront(element) {
    highestZIndex++;
    element.style.zIndex = highestZIndex;
}


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

// === OnClick ---> Close Button ===
const closeButton = document.querySelector(".close");
closeButton.addEventListener("click", () => {
    audio.currentTime = 0;
    audio.play();
});


// === OnClick --> Yellow Freak ===
const squeak = new Audio("sounds/zapsplat_multimedia_game_sound_8_bit_blip_short_squeak_112042.mp3");
const yellowFreak = document.getElementById("yellow-freak");

squeak.volume = 0.3; // Este gajo guincha buéda alto

const handleYellowClick = () => {
    squeak.play();
}

yellowFreak.addEventListener("click", handleYellowClick);

// === OnClick --> Title ===
const title = document.getElementById("sota-logo");

const handleLogoClick = () => {
    squeak.play();
}

title.addEventListener("click", handleLogoClick);

// === OnClick --> Background Music ===
const musicButton = document.getElementById("music-player");
const bgMusic = document.getElementById("bg-music");

let isPlaying = false;

musicButton.addEventListener("click", () => {
    if (!isPlaying) {
        bgMusic.volume = 0.3;
        bgMusic.play();
        isPlaying = true;
    } else {
        bgMusic.pause();
        isPlaying = false;
    }
});



// === OTHERS ===

// === OnClick --> FunnyButton ===
const button = document.querySelector("#FunnyButton");

const handleClick = () => { 
    window.open("https://www.pou.me/");
}

button.addEventListener("click", handleClick);

// === OnClick --> 300 milhoes de anos ===
const milhoesDeAnos = document.querySelector("#milhoes-anos");

const handleMilhoesDeAnosClick = () => {
    window.open("https://en.wikipedia.org/wiki/Speed_of_light");
}

milhoesDeAnos.addEventListener("click", handleMilhoesDeAnosClick);


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
let clickCount = 0;

const handleSevenClicks = () => { 
    // alert("Clicked 7 times in a row!");
    window.open("yellow.html");
    clickCount = 0;
};

yellowFreak.addEventListener("click", () => {
    clickCount++;
    if (clickCount === 7) {
        handleSevenClicks();
    }
});


// ===================== POPUP ======================
// BUTTONS
const buttonTest = document.getElementById("HistoriaMundo");
const buttonMapaMundo = document.getElementById("MapaMundo");
const buttonLimbus = document.getElementById("Limbus");
const closeBtn = document.querySelector(".close");
// POPUPS
const popup = document.getElementById("historia-mundo-popup");
const popupMapaMundo = document.getElementById("mapa-mundo-popup");
const popupLimbus = document.getElementById("limbus-popup");

// Show Historia do Mundo popup
buttonTest.addEventListener("click", function() {
    popup.style.display = "block";
    bringToFront(popup);
});

// Show Mapa do Mundo popup
buttonMapaMundo.addEventListener("click", function() {
    popupMapaMundo.style.display = "block";
    bringToFront(popupMapaMundo);
});

// Show Limbus popup
buttonLimbus.addEventListener("click", function() {
    popupLimbus.style.display = "block";
    bringToFront(popupLimbus);
});

// Make all of these come forward when clicked
document.querySelectorAll(".popup").forEach(popup => {
    popup.addEventListener("mousedown", () => {
        bringToFront(popup);
    });
});


// Hide popups when close button is clicked
function closePopup(popup) {
    popup.style.display = "none";
    // reset position
    popup.style.top = "50%";
    popup.style.left = "50%";
    popup.style.transform = "translate(-50%, -50%)";
}

document.querySelectorAll(".close").forEach(closeBtn => {
    closeBtn.addEventListener("click", function () {
        const popup = closeBtn.closest(".popup");
        closePopup(popup);
    });
});



// ===================== DRAGGABLE DIV ======================
// Make the DIV element draggable:
document.querySelectorAll(".popup").forEach(popup => {
    const header = popup.querySelector(".popup-header");
    if (header) {
        dragElement(popup, header);
    }
});

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
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
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
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}