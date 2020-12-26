let margerithaImg = document.querySelector(".margeritha");
let italianImg = document.querySelector(".italian");
let pepperoniImg = document.querySelector(".pepperoni");
let showingImg = document.getElementById("showing");

function changeImg(url) {
  showingImg.src = url;
}

//Add Event Listeners

italianImg.addEventListener("click", function () {
  changeImg("italian.png");
});
margerithaImg.addEventListener("click", function () {
  changeImg("margeritha.png");
});

pepperoniImg.addEventListener("click", function () {
  changeImg("pepperoni.png");
});

italianImg.addEventListener("click", function (event) {
  event.preventDefault();
});
margerithaImg.addEventListener("click", function (event) {
  event.preventDefault();
});
pepperoniImg.addEventListener("click", function (event) {
  event.preventDefault();
});
