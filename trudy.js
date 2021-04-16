$(document).ready(function() {
  console.log("ready!");

  $(".hindu1").click(function() {
    //images
    $(".hindu1").addClass('clicked-once');
    $(".hindu1").addClass('active');
    $(".hindu4, .hindu2, .hindu5, .hindu6, .hindu7, .hindu8, .hindu9, .hindu10, .hindu11").removeClass('active');
    $('.clicked-once:not(.active)').addClass('hide');

    //text popup
    $(".popup-hindu1").css("display", "block");
    $(".popup-hindu2, .popup-hindu4, .popup-hindu5, .popup-hindu6, .popup-hindu7, .popup-hindu8, .popup-hindu9, .popup-hindu10, .popup-hindu11").css("display", "none");
  });

  $(".hindu2").click(function() {
    //images
    $(".hindu2").addClass('clicked-once');
    $(".hindu2").addClass('active');
    $(".hindu1, .hindu4, .hindu5, .hindu6, .hindu7, .hindu8, .hindu9, .hindu10, .hindu11").removeClass('active');
    $('.clicked-once:not(.active)').addClass('hide');

    //text popup
    $(".popup-hindu2").css("display", "block");
    $(".popup-hindu1, .popup-hindu4, .popup-hindu5, .popup-hindu6, .popup-hindu7, .popup-hindu8, .popup-hindu9, .popup-hindu10, .popup-hindu11").css("display", "none");
  });

  $(".hindu4").click(function() {
    $(".hindu4").addClass('clicked-once');
    $(".hindu4").addClass('active');
    $(".hindu1, .hindu2, .hindu5, .hindu6, .hindu7, .hindu8, .hindu9, .hindu10, .hindu11").removeClass('active');
    $('.clicked-once:not(.active)').addClass('hide');

    $(".popup-hindu4").css("display", "block");
    $(".popup-hindu2, .popup-hindu1, .popup-hindu5, .popup-hindu6, .popup-hindu7, .popup-hindu8, .popup-hindu9, .popup-hindu10, .popup-hindu11").css("display", "none");
  });

  $(".hindu5").click(function() {
    $(".hindu5").addClass('clicked-once');
    $(".hindu5").addClass('active');
    $(".hindu1, .hindu2, .hindu4, .hindu6, .hindu7, .hindu8, .hindu9, .hindu10, .hindu11").removeClass('active');
    $('.clicked-once:not(.active)').addClass('hide');

    $(".popup-hindu5").css("display", "block");
    $(".popup-hindu2, .popup-hindu1, .popup-hindu4, .popup-hindu6, .popup-hindu7, .popup-hindu8, .popup-hindu9, .popup-hindu10, .popup-hindu11").css("display", "none");

  });

  $(".hindu6").click(function() {
    $(".hindu6").addClass('clicked-once');
    $(".hindu6").addClass('active');
    $(".hindu1, .hindu2, .hindu4, .hindu5, .hindu7, .hindu8, .hindu9, .hindu10, .hindu11").removeClass('active');
    $('.clicked-once:not(.active)').addClass('hide');

    $(".popup-hindu6").css("display", "block");
    $(".popup-hindu2, .popup-hindu1, .popup-hindu4, .popup-hindu5, .popup-hindu7, .popup-hindu8, .popup-hindu9, .popup-hindu10, .popup-hindu11").css("display", "none");

  });

  $(".hindu7").click(function() {
    $(".hindu7").addClass('clicked-once');
    $(".hindu7").addClass('active');
    $(".hindu1, .hindu2, .hindu4, .hindu5, .hindu6, .hindu8, .hindu9, .hindu10, .hindu11").removeClass('active');
    $('.clicked-once:not(.active)').addClass('hide');

    $(".popup-hindu7").css("display", "block");
    $(".popup-hindu2, .popup-hindu1, .popup-hindu4, .popup-hindu5, .popup-hindu6, .popup-hindu8, .popup-hindu9, .popup-hindu10, .popup-hindu11").css("display", "none");

  });


  $(".hindu8").click(function() {
    $(".hindu8").addClass('clicked-once');
    $(".hindu8").addClass('active');
    $(".hindu1, .hindu2, .hindu4, .hindu5, .hindu6, .hindu7, .hindu9, .hindu10, .hindu11").removeClass('active');
    $('.clicked-once:not(.active)').addClass('hide');

    $(".popup-hindu8").css("display", "block");
    $(".popup-hindu2, .popup-hindu1, .popup-hindu4, .popup-hindu5, .popup-hindu6, .popup-hindu7, .popup-hindu9, .popup-hindu10, .popup-hindu11").css("display", "none");
  });

  $(".hindu9").click(function() {
    $(".hindu9").addClass('clicked-once');
    $(".hindu9").addClass('active');
    $(".hindu1, .hindu2, .hindu4, .hindu5, .hindu6, .hindu7, .hindu8, .hindu10, .hindu11").removeClass('active');
    $('.clicked-once:not(.active)').addClass('hide');

    $(".popup-hindu9").css("display", "block");
    $(".popup-hindu2, .popup-hindu1, .popup-hindu4, .popup-hindu5, .popup-hindu6, .popup-hindu7, .popup-hindu8, .popup-hindu10, .popup-hindu11").css("display", "none");
  });

  $(".hindu10").click(function() {
    $(".hindu10").addClass('clicked-once');
    $(".hindu10").addClass('active');
    $(".hindu1, .hindu2, .hindu4, .hindu5, .hindu6, .hindu7, .hindu8, .hindu9, .hindu11").removeClass('active');
    $('.clicked-once:not(.active)').addClass('hide');

    $(".popup-hindu10").css("display", "block");
    $(".popup-hindu2, .popup-hindu1, .popup-hindu4, .popup-hindu5, .popup-hindu6, .popup-hindu7, .popup-hindu8, .popup-hindu9, .popup-hindu11").css("display", "none");
  });

  $(".hindu11").click(function() {
    $(".hindu11").addClass('clicked-once');
    $(".hindu11").addClass('active');
    $(".hindu1, .hindu2, .hindu4, .hindu5, .hindu6, .hindu7, .hindu8, .hindu9, .hindu10").removeClass('active');
    $('.clicked-once:not(.active)').addClass('hide');

    $(".popup-hindu11").css("display", "block");
    $(".popup-hindu2, .popup-hindu1, .popup-hindu4, .popup-hindu5, .popup-hindu6, .popup-hindu7, .popup-hindu8, .popup-hindu9, .popup-hindu10").css("display", "none");
  });

});
