$(document).ready(function () {
  var stopAutohide;

  function showWindow() {
    $("#main").show();
    //stop scroll
    $("html body").css("overflow", "hidden");
  }
  //showWindow();

  function hideWindow() {
    $("#main").hide();
    //on scroll
    $("html body").css("overflow", "scroll");
  }
  //hideWindow();

  setTimeout(showWindow, 150); //show window after 1.5s

  //close window on click
  $("#close-btn").click(function () {
    hideWindow();
  });
});
