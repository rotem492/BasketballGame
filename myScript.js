$(document).ready(function () {
    $(".about").click(function () {
        $("#aboutDiv").toggle();
        console.log("hi")
        document.getElementById("gameIframe").contentWindow.timeStop = true;
    });

    $(".howToPlay").click(function () {
        $("#howToPlayDiv").toggle();
        document.getElementById("gameIframe").contentWindow.timeStop = true;
    });

    $(".closeAbout").click(function () {
        $("#aboutDiv").hide();
        $("#gameIframe")[0].contentWindow.focus();
        document.getElementById("gameIframe").contentWindow.timeStop = false;
    });

    $(".closeHowToPlay").click(function () {
        $("#howToPlayDiv").hide();
        $("#gameIframe")[0].contentWindow.focus();
        document.getElementById("gameIframe").contentWindow.timeStop = false;
    });
});