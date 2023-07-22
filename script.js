const modelViewer = document.querySelector("model-viewer");
     
window.switchSrc = (element, name) => {
    const base = "/" + name;
    modelViewer.src = base + '.glb';
    modelViewer.poster = base + '.webp';
    const slides = document.querySelectorAll(".slide");
    slides.forEach((element) => {
        element.classList.remove("selected");
    });
    element.classList.add("selected");
}

document.querySelector(".slider").addEventListener('beforexrselect', (ev) => {
    ev.preventDefault();
});


function launchIOSQuickLookAR(usdzSrc) {
  const anchor = document.createElement("a");
  anchor.setAttribute("rel", "ar");
  anchor.appendChild(document.createElement("img"));
  anchor.setAttribute("href", usdzSrc);
  anchor.click();
}

function detectiOSARQuickLook() {
  const testAnchor = document.createElement("a");
  return testAnchor.relList.supports("ar");
}

