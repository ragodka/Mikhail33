let offset = 0;
function move() {
  offset = offset + 5;
  document.querySelector(".container").style.left = offset + "px";
  if (offset > 350) {
    return true;
  }
  // document.querySelector(".btn").onclick = move;
  setTimeout(move, 30);
}
move();
// document.querySelector(".btn").onclick = move;
let offsetDrop = 0;
function drop() {
  offsetDrop = offsetDrop + 5;
  document.querySelector(".box").style.top = offsetDrop + "px";
  if (offsetDrop > 210) {
    return true;
  }
  document.querySelector(".helicopter").onclick = drop;
  setTimeout(drop, 10);
}
document.querySelector(".helicopter").onclick = drop;

function showCat() {
  document.querySelector(".box").style.right = "350px";
  document.querySelector(".container").style.height = "660px";
}
document.querySelector(".box").onclick = showCat;
