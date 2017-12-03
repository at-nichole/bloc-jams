
var points = document.getElementsByClassName('point');

//var animatePoints = function(points) {

var revealPoint = function(){
forEach(points);
};

window.onload = function(){
  if (window.innerHeight > 950) {
    revealPoint();
}
  var sellingPoints = document.getElementsByClassName('selling-points')[0];
  var scrollDistance = sellingPoints.getBoundingClientRect().top - window.innerHeight + 200;
  window.addEventListener("scroll", function(event) {
        if (document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance) {
            revealPoint();
        }
    });
};
