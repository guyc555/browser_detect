//Global variables.
var browser = "";
var version = "";
var us_agent = navigator.userAgent;

function checkBrowser() {
  //Check the userAgent string for clues.
  var is_chrome = us_agent.indexOf("Chrome");
  var is_edge = us_agent.indexOf("Edg");
  var is_trident = us_agent.indexOf("Trident"); //The engine that runs IE
  var is_msie = us_agent.indexOf("MSIE");
  var is_firefox = us_agent.indexOf("Firefox");
  var is_safari = us_agent.indexOf("Safari");
  var is_brave = navigator.brave;

  //Start the guessing game.
  var index = 0;
  //Detect Chrome
  if(is_chrome > -1 && is_edge === -1 && typeof is_brave !== "object") {
    index = is_chrome;
    while(us_agent.charAt(index) !== "/") index++;
    index++;
    while(us_agent.charAt(index) !== ".") {
      version += us_agent.charAt(index);
      index++;
    }
    version = parseInt(version);
    browser = "Chrome";
  }
  //Detect Chromium Edge
  if(is_chrome > -1 && is_edge > -1) {
    index = is_edge;
    while(us_agent.charAt(index) !== "/") index++;
    index++;
    while(us_agent.charAt(index) !== ".") {
      version += us_agent.charAt(index);
      index++;
    }
    version = parseInt(version);
    browser = "Edge";
  }
  //Detect IE 10 and under
  if(is_msie > -1) {
    index = is_msie;
    while(us_agent.charAt(index) !== " ") index++;
    index++;
    while(us_agent.charAt(index) !== ".") {
      version += us_agent.charAt(index);
      index++;
    }
    version = parseInt(version);
    browser = "IE";
  }
  //Detect IE 11 and up
  if(is_msie === -1 && is_trident > -1) {
    index = us_agent.indexOf("rv");
    while(us_agent.charAt(index) !== ":") index++;
    index++;
    while(us_agent.charAt(index) !== ".") {
      version += us_agent.charAt(index);
      index++;
    }
    version = parseInt(version);
    browser = "IE";
  }
  //Detect Firefox
  if(is_firefox > -1) {
    index = is_firefox;
    while(us_agent.charAt(index) !== "/") index++;
    index++;
    while(us_agent.charAt(index) !== ".") {
      version += us_agent.charAt(index);
      index++;
    }
    version = parseInt(version);
    browser = "Firefox";
  }
  //Detect Safari
  if(is_safari > -1 && is_chrome === -1 && is_edge === -1) {
    index = us_agent.indexOf("Version");
    while(us_agent.charAt(index) !== "/") index++;
    index++;
    while(us_agent.charAt(index) !== ".") {
      version += us_agent.charAt(index);
      index++;
    }
    version = parseInt(version);
    browser = "Safari";
  }
  if(is_chrome > -1 && typeof is_brave == "object") {
    index = is_chrome;
    while(us_agent.charAt(index) !== "/") index++;
    index++;
    while(us_agent.charAt(index) !== ".") {
      version += us_agent.charAt(index);
      index++;
    }
    version = parseInt(version);
    browser = "Brave";
  }
  document.getElementById("text_out").innerHTML = "You are using: " + browser + " " + version;
}
