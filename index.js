var webSocketUrl = "ws:\/\/" + window.location.hostname + "/ws";
var websocket;

function initWebSocket() 
{
  websocket = new WebSocket(webSocketUrl);
  websocket.onopen    = function(event){};
  websocket.onclose   = function(event){setTimeout(initWebSocket, 2000);};
  websocket.onmessage = function(event){};
}

function onTouchStartAndEnd(value) 
{
  websocket.send(value);
}
    
window.onload = initWebSocket;
document.getElementById("mainTable").addEventListener("touchend", function(event){
  event.preventDefault()
}); 