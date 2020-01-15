chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
    if(request.cmd == "read_file") {
        $.ajax({
            url: chrome.extension.getURL("topbar.html"),
            dataType: "html",
            success: sendResponse
        });
    }
});
var audioElement = document.createElement('audio');
audioElement.setAttribute("preload", "auto");
audioElement.autobuffer = true;

var source1 = document.createElement('source');
source1.type= 'audio/mpeg';
source1.src= 'https://drive.google.com/uc?id=1XGwcb2nOVtgy8dUnXc5aHUfskPD0Ljeo';
audioElement.appendChild(source1);

chrome.extension.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.action == "play"){
            audioElement.load;
            audioElement.play();
        }
    });
