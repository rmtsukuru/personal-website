const button = document.getElementById("clickBtn");
const homeImage = document.getElementById("photo-swap");

if (button) {
  button.onclick = function() {
    alert("You clicked the button!");
  };
}

if (homeImage) {
  homeImage.onclick = function() {
    let oldSrc = homeImage.getAttribute("src");
    homeImage.setAttribute("src", homeImage.getAttribute("data-src"));
    homeImage.setAttribute("data-src", oldSrc);
  };
}

