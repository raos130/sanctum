$(document).ready(function() {
  console.log("ready!");

  $(".church").click(function() {
    //images
    $(".church").addClass('clicked-once');
    $(".church").addClass('active');
    $(".church1, .church2, .church3, .church5, .church6, .church7").removeClass('active');
    $('.clicked-once:not(.active)').addClass('hide');

    //text popup
    $(".popup-church").css("display", "block");
    $(".popup-church1, popup-church2, .popup-church3, .popup-church5, .popup-church6, .popup-church7").css("display", "none");
  });

  $(".church1").click(function() {
    //images
    $(".church1").addClass('clicked-once');
    $(".church1").addClass('active');
    $(".church, .church2, .church3, .church5, .church6, .church7").removeClass('active');
    $('.clicked-once:not(.active)').addClass('hide');

    //text popup
    $(".popup-church1").css("display", "block");
    $(".popup-church2, .popup-church3, .popup-church5, .popup-church6, .popup-church, .popup-church7").css("display", "none");
  });

  $(".church2").click(function() {
    //images
    $(".church2").addClass('clicked-once');
    $(".church2").addClass('active');
    $(".church, .church1, .church3, .church5, .church6, .church7").removeClass('active');
    $('.clicked-once:not(.active)').addClass('hide');

    //text popup
    $(".popup-church2").css("display", "block");
    $(".popup-church, .popup-church3, .popup-church1, .popup-church5, .popup-church6, .popup-church7").css("display", "none");
  });

  $(".church3").click(function() {
    //images
    $(".church3").addClass('clicked-once');
    $(".church3").addClass('active');
    $(".church1, .church, .church2, .church5, .church6, .church7").removeClass('active');
    $('.clicked-once:not(.active)').addClass('hide');

    //text popup
    $(".popup-church3").css("display", "block");
    $(".popup-church, .popup-church1, .popup-church2, .popup-church5, .popup-church6, .popup-church7").css("display", "none");
  });

  $(".church5").click(function() {
    //images
    $(".church5").addClass('clicked-once');
    $(".church5").addClass('active');
    $(".church2, .church3, .church, .church1, .church6, .church7").removeClass('active');
    $('.clicked-once:not(.active)').addClass('hide');

    //text popup
    $(".popup-church5").css("display", "block");
    $(".popup-church2, .popup-church1, .popup-church3, .popup-church, .popup-church6, .popup-church7").css("display", "none");
  });

  $(".church6").click(function() {
    //images
    $(".church6").addClass('clicked-once');
    $(".church6").addClass('active');
    $(".church2, .church3, .church, .church5,.church1, .church7").removeClass('active');
    $('.clicked-once:not(.active)').addClass('hide');

    //text popup
    $(".popup-church6").css("display", "block");
    $(".popup-church2, .popup-church3, .popup-church1, .popup-church5, .popup-church7").css("display", "none");
  });

  $(".church7").click(function() {
    //images
    $(".church7").addClass('clicked-once');
    $(".church7").addClass('active');
    $(".church2, .church3, .church1, .church4, .church, .church5, .church6").removeClass('active');
    $('.clicked-once:not(.active)').addClass('hide');

    //text popup
    $(".popup-church7").css("display", "block");
    $(".popup-church2, .popup-church3, .popup-church1, .popup-church, .popup-church5, .popup-church6").css("display", "none");
  });




});
