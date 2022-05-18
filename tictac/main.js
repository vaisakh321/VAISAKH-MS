function spChange(e) {
 console.log(e.target.value);
}
function cpChange(e) {
 console.log(e.target.value);
}
let counter = 1;
function showHistory() {
 let element = document.getElementById(“history”);
 $(“#history”).empty();
 let len = history.length;
 let p = document.createElement(“p”);
 if (len > 0) {
 if (history[len — counter]) {
 p.innerText = history[len — counter];
 } else {
 p.innerText = “No further history available”;
 }
 element.appendChild(p);
 counter++;
 }
}
let playerCounter = 0;
function game(e) {
 let currentPlayer = getPlayer();
 $(`#${e.target.id}`).text(currentPlayer);
 $(`#${e.target.id}`).prop(“disabled”, true);
 playerCounter++;
 won();
}
function getPlayer() {
 if (playerCounter % 2 === 0) {
 return “X”;
 } else {
 return “0”;
 }
}
function won() {
 if (
 $(“#1”).text() === “X” &&
 $(“#2”).text() === “X” &&
 $(“#3”).text() === “X”
 ) {
 alert(“Player X won”);
 }
}
