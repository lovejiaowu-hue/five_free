/* Headless browser-only probe. Not linked by the public website. */
window.addEventListener("load", function () {
  window.setTimeout(function () {
    function rect(selector) {
      var element = document.querySelector(selector);
      if (!element) return null;
      var r = element.getBoundingClientRect(), style = getComputedStyle(element);
      return {x:r.x,y:r.y,right:r.right,bottom:r.bottom,
        width:r.width,height:r.height,display:style.display,position:style.position};
    }
    var data = {
      viewport:innerWidth,fullWidth:document.documentElement.scrollWidth,
      overlay:rect(".mobile-scrim"),sidebar:rect(".sidebar"),main:rect("#main"),
      rail:rect(".right-rail"),article:rect(".article"),
      reader:rect(".reading-toolbar"),card:rect(".wc-flipcard"),
      studio:rect(".wc-studio-layout"),mode:location.hash
    };
    var pre = document.createElement("pre");
    pre.id = "layout-metrics";
    pre.textContent = JSON.stringify(data);
    document.body.appendChild(pre);
  }, 500);
});