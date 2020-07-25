function showPic(whichpic) {
  if (!document.getElementById("placeholder")) {
    return false;
  }
  var placeholder = document.getElementById("placeholder");
  var source = whichpic.getAttribute("href");
  placeholder.setAttribute("src", source);
  if (document.getElementById("description")) {
    var text = whichpic.getAttribute("title")
      ? whichpic.getAttribute("title")
      : "";
    var description = document.getElementById("description");
    description.firstChild.nodeValue = text;
  }
  return true;
}
function prepareGallery() {
  if (!document.getElementById || !document.getElementsByTagName) {
    return false;
  }
  if (!document.getElementById("imageGallery")) {
    return false;
  }
  let gallery = document.getElementById("imageGallery");
  let links = document.getElementsByTagName("a");
  for (let i = 0; i < links.length; i++) {
    links[i].onclick = function () {
      return showPic(this) ? false : true;
    };
    // links[i].onkeypress = function () {
    //   return showPic(this) ? false : true;
    // };
  }
}

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
// window.onload = function () {
//   preparelinks();
//   prepareGallery();
// };
function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != "function") {
    window.onload = func;
  } else {
    window.onload = function () {
      oldonload();
      func();
    };
  }
}

addLoadEvent(prepareGallery);
addLoadEvent(preparelinks);
