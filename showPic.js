function showPic(whichpic) {
  var source = whichpic.getAttribute("href");
  var placeholder = document.getElementById("placeholder");
  var text = whichpic.getAttribute("title");
  var description = document.getElementById("description");
  placeholder.setAttribute("src", source);
  description.firstChild.nodeValue = text;
}
function countBodyChildren() {
  var body_elements = document.getElementsByTagName("body")[0];
}
window.onload = countBodyChildren;

//popUp functions
function popUp(winURL) {
  window.open(winURL, "popup", "width=800,height=600");
}

function preparelinks() {
  var links = document.getElementsByTagName("a");
  for (let i = 0; i < links.length; i++) {
    if (links[i].getAttribute("class") == "popup") {
      links[i].onclick = function () {
        popUp(this.getAttribute("href"));
        return false;
      };
    }
  }
}
window.onload = preparelinks;
