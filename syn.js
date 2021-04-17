$(document).ready(function() {
  console.log("ready!");

  $(".syn1").click(function() {
    //images
    $(".syn1").addClass('clicked-once');
    $(".syn1").addClass('active');
    $(".syn2, .syn3, .syn4, .syn5, .syn6, .syn7").removeClass('active');
    $('.clicked-once:not(.active)').addClass('hide');

    //text popup
    $(".popup-syn1").css("display", "block");
    $(".popup-syn2, .popup-syn3, .popup-syn4, .popup-syn5, .popup-syn6, .popup-syn7").css("display", "none");
  });

  $(".syn2").click(function() {
    //images
    $(".syn2").addClass('clicked-once');
    $(".syn2").addClass('active');
    $(".syn1, .syn3, .syn4, .syn5, .syn6, .syn7").removeClass('active');
    $('.clicked-once:not(.active)').addClass('hide');

    //text popup
    $(".popup-syn2").css("display", "block");
    $(".popup-syn1, .popup-syn3, .popup-syn4, .popup-syn5, .popup-syn6, .popup-syn7").css("display", "none");
  });

  $(".syn3").click(function() {
    //images
    $(".syn3").addClass('clicked-once');
    $(".syn3").addClass('active');
    $(".syn1, .syn2, .syn4, .syn5, .syn6, .syn7").removeClass('active');
    $('.clicked-once:not(.active)').addClass('hide');

    //text popup
    $(".popup-syn3").css("display", "block");
    $(".popup-syn1, .popup-syn2, .popup-syn4, .popup-syn5, .popup-syn6, .popup-syn7").css("display", "none");
  });

  $(".syn4").click(function() {
    //images
    $(".syn4").addClass('clicked-once');
    $(".syn4").addClass('active');
    $(".syn1, .syn2, .syn3, .syn5, .syn6, .syn7").removeClass('active');
    $('.clicked-once:not(.active)').addClass('hide');

    //text popup
    $(".popup-syn4").css("display", "block");
    $(".popup-syn1, .popup-syn2, .popup-syn3, .popup-syn5, .popup-syn6, .popup-syn7").css("display", "none");
  });

  $(".syn5").click(function() {
    //images
    $(".syn5").addClass('clicked-once');
    $(".syn5").addClass('active');
    $(".syn1, .syn2, .syn3, .syn4, .syn6, .syn7").removeClass('active');
    $('.clicked-once:not(.active)').addClass('hide');

    //text popup
    $(".popup-syn5").css("display", "block");
    $(".popup-syn1, .popup-syn2, .popup-syn3, .popup-syn4, .popup-syn6, .popup-syn7").css("display", "none");
  });

  $(".syn6").click(function() {
    //images
    $(".syn6").addClass('clicked-once');
    $(".syn6").addClass('active');
    $(".syn1, .syn2, .syn3, .syn5, .syn4, .syn7").removeClass('active');
    $('.clicked-once:not(.active)').addClass('hide');

    //text popup
    $(".popup-syn6").css("display", "block");
    $(".popup-syn1, .popup-syn2, .popup-syn3, .popup-syn5, .popup-syn4, .popup-syn7").css("display", "none");
  });

  $(".syn7").click(function() {
    //images
    $(".syn7").addClass('clicked-once');
    $(".syn7").addClass('active');
    $(".syn1, .syn2, .syn3, .syn5, .syn4, .syn6").removeClass('active');
    $('.clicked-once:not(.active)').addClass('hide');

    //text popup
    $(".popup-syn7").css("display", "block");
    $(".popup-syn1, .popup-syn2, .popup-syn3, .popup-syn5, .popup-syn4, .popup-syn6").css("display", "none");
  });



});
