let cookies = 0;

function cookieClick(number) {
  cookies += number;
  document.getElementById("cookies").innerHTML = cookies.toLocaleString();
}

let cursors = 0;
let cursorPower = 1;
let megaCursors = 1;
let cookiesPerSecond;

function buyCursor() {
  let cursorCost = Math.floor(10 * Math.pow(1.1, cursors)); //works out the cost of this cursor
  if (cookies >= cursorCost) {
    //checks that the player can afford the cursor
    cursors = cursors + 1; //increases number of cursors
    cookies = cookies - cursorCost; //removes the cookies spent
    document.getElementById("cursors").innerHTML = cursors; //updates the number of cursors for the user
    document.getElementById("cookies").innerHTML = cookies.toLocaleString(); //updates the number of cookies for the user
  }
  let nextCost = Math.floor(10 * Math.pow(1.1, cursors)); //works out the cost of the next cursor
  document.getElementById("cursorCost").innerHTML = nextCost; //updates the cursor cost for the user
  document.getElementById("cookiesPerSecond").innerHTML = cookiesPerSecond;
}

function megaCursor() {
  let megaCursorCost = 55; // Cost
  if (cookies >= megaCursorCost) {
    cursorPower = 2;
    cookies -= megaCursorCost; // updates cookies
    document.getElementById("cookies").innerHTML = cookies; //updates the number of cookies visually
    document.getElementById("megaCursorCostV").innerHTML = null;
    document.getElementById("cookiesPerSecond").innerHTML = cookiesPerSecond;
  }
}

window.setInterval(function () {
  cookiesPerSecond = cursors * cursorPower;
  document.getElementById("cookiesPerSecond").innerHTML = cookiesPerSecond;
  cookieClick(cursors * cursorPower);
}, 1000);

function save() {
  let saveData = {
    cookies: cookies,
    cursors: cursors,
    cursorPower: cursorPower,
  };
  localStorage.setItem("save", JSON.stringify(saveData));
}

let savegame = JSON.parse(localStorage.getItem("save"));

if (typeof savegame.cookies !== "undefined") {
  cookies = savegame.cookies;
  cursors = savegame.cursors;
  cursorPower = savegame.cursorPower;
  document.getElementById("cookies").innerHTML = cookies;
  document.getElementById("cursors").innerHTML = cursors;
  let nextCost = Math.floor(10 * Math.pow(1.1, cursors));
  document.getElementById("cursorCost").innerHTML = nextCost;
}

function load() {
  let savegame = JSON.parse(localStorage.getItem("save"));

  if (typeof savegame.cookies !== "undefined") {
    cookies = savegame.cookies;
    cursors = savegame.cursors;
    cursorPower = savegame.cursorPower;
    document.getElementById("cookies").innerHTML = cookies;
    document.getElementById("cursors").innerHTML = cursors;
    let nextCost = Math.floor(10 * Math.pow(1.1, cursors));
    document.getElementById("cursorCost").innerHTML = nextCost;
  }
}
