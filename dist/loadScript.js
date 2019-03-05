function loadScript(url) {
  var head = document.getElementsByTagName("head")[0];
  var script = document.createElement("script");
  script.type = "text/javascript";
  //   script.onload = script.onreadystatechange = function() {
  //     if (!this.readyState || this.readyState === "loaded" || this.readyState === "complete") {
  //       script.onload = script.onreadystatechange = null;
  //     }
  //   };
  script.src = url;
  head.appendChild(script);
}

let localHref = location.href;

if (localHref.indexOf("localhost") > 0) {
  loadScript("http://localhost:3001/main.bundle.js");
  loadScript("http://localhost:3001/vendor.bundle.js");
}else{
  
}
