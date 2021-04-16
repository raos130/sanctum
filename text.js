//image resize ImageMap

window.onload = function () {
    var ImageMap = function (map) {
            var n,
                areas = map.getElementsByTagName('area'),
                len = areas.length,
                coords = [],
                previousWidth = 2560;
            for (n = 0; n < len; n++) {
                coords[n] = areas[n].coords.split(',');
            }
            this.resize = function () {
                var n, m, clen,
                    x = document.body.clientWidth / previousWidth;
                for (n = 0; n < len; n++) {
                    clen = coords[n].length;
                    for (m = 0; m < clen; m++) {
                        coords[n][m] *= x;
                    }
                    areas[n].coords = coords[n].join(',');
                }
                previousWidth = document.body.clientWidth;
                return true;
            };
            window.onresize = this.resize;
        },
        imageMap = new ImageMap(document.getElementById('map_ID'));
    imageMap.resize();
}





// $( "li" ).hover(
//   function() {
//     $( this ).append( $( "<span> ***</span>" ) );
//   }, function() {
//     $( this ).find( "span" ).last().remove();
//   }
// );
//
// $( "li.fade" ).hover(function() {
//   $( this ).fadeOut( 100 );
//   $( this ).fadeIn( 500 );
// });

      $('#idol').hover(
    function() {
        $('#ID_triangle').css({'visibility' : 'visible'});
    },
    function() {
        $('#ID_triangle').css({'visibility' : 'hidden'});
    }
)



function toggle() {

       var ele = document.getElementById("toggleText");
       var text = document.getElementById("displayText");

       if (ele.style.display == "block") {

           ele.style.display = "none";
           text.innerHTML = "show";
       }
       else {

           ele.style.display = "block";
           text.innerHTML = "hide";
       }
   }

// $(document).ready(function(){
//   $("#idol").hover(function(){
//     $(this).attr("src", "images/hindu/hindu1.1.1.png");
//     }, function(){
//     $(this).fadeOut( 100 );
//   });
// });


// var sourceSwap = function () {
//         var $this = $(this);
//         var newSource = $this.data('alt-src');
//         $this.data('alt-src', $this.attr('src'));
//         $this.attr('src', newSource);
//     }
//
//     $(function () {
//         $('img.og').hover(sourceSwap, sourceSwap);
//     });



// $(document).ready(function(){
//     $("#idol").on('hover', 'li', function(){
//         // Change src attribute of image
//         $('#idol').attr("src", "images/hindu/hindu1.1.1.png");
//     });
// });

//
// $(".current").click(function(){
//  $(this).toggleClass("change")  ;
// })
