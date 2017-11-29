
var revealPoint = function(index){

  var points = document.getElementsByClassName('point');
  for (var i = 0; i< points.length; i++) {
      points[i].style.opacity = 1;
      points[i].style.transform = "scaleX(1) translateY(0)";
      points[i].style.msTransform = "scaleX(1) translateY(0)";

      if (i === 1) {
        points[i].style.webkitTransitionDelay = "0.8s";
      } else if (i === 2) {
        points[i].style.webkitTransitionDelay = "1.1s";
      } else {
        points[i].style.webkitTransitionDelay = "0";
      }
    }

  };
