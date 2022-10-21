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