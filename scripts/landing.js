var animatePoints = function() {
    var revealPoint = function() {
        $(this).css({
          opacity: 1,
          transform: 'scaleX(1) translateY(0)'
          });
        };

    $.each($('.point'), revealPoint);
};

 $(window).load(function() {
    if ($(window).height() > 950) {
          animatePoints();
    };
  });

    var scrollDistance = $('.selling-points').offset().top - $(window).height() + 200;

    $(window).scroll(function(event) {
      if ($(window).scrollTop() >= scrollDistance) {
         animatePoints();
        }
    });



/* VANILLA JS

var pointsArray = document.getElementsByClassName('point');

var animatePoints = function(points) {
                var revealPoint = function( ) {
                    for(var i = 0; i < 3; i++){
                        points[i].style.opacity = 1;
                        points[i].style.transform = "scaleX(1) translateY(0)";
                        points[i].style.msTransform = "scaleX(1) translateY(0)";
                        points[i].style.WebkitTransform = "scaleX(1) translateY(0)";
                    };
                };

                revealPoint();
};

window.onload = function() {

    //Automatically animate the points on load when scrolling won't trigger animation
    if(window.innerHeight > 950) {
        animatePoints(pointsArray);
    }

    var sellingPoints = document.getElementsByClassName('selling-points')[0];
    var scrollDistance = sellingPoints.getBoundingClientRect().top - window.innerHeight + 200;

    window.addEventListener('scroll', function(event) {
        if(document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance) {
            animatePoints(pointsArray);
        }
    });
}

*/
