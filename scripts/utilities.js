var forEach = function (input){
  for (var i = 0; i < input.length; i++){
    input[i].style.opacity = 1
    input[i].style.transform = "scaleX(1) translateY(0)";
    input[i].style.transform = "scaleX(1) translateY(0)";
    if (i === 1) {
        input[i].style.webkitTransitionDelay = "0.8s";
        } else if (i === 2) {
          input[i].style.webkitTransitionDelay = "1.1s";
        } else {
       input[i].style.webkitTransitionDelay = "0";
          }
        }
      };
