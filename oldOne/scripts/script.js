


//Smooth Scroll function
var currentPosition = function(){
    if(self.pageYOffset){ //Firefox, Mozilla, Chrome, Safari
      return self.pageYOffset;
    }else if (document.documentElement.scrollTop) { // Internet Explorer 6 - standards mode
      return document.documentElement.scrollTop;
    }else if (document.body.scrollTop) {  // Internet Explorer 6, 7 and 8
       return document.body.scrollTop;
    }else{ // default return 0
      return 0;
    }

}

var elementPosition = function(elementID){
  var element = document.getElementById(elementID);
  var y = element.offsetTop;
  return y;
}

var smoothScroll = function(element){
  var startY = currentPosition();
  var stopY = elementPosition(element);
  var distance = stopY > startY ? stopY - startY : startY - stopY;
  if(distance<100){
      scrollTo(0, stopY);
      return;
  }

  var speed = Math.round(distance/200);
  if(speed > 20 ){speed = 20;}
  var step  = Math.round(distance/400);
  var leapY = stopY > startY ? startY + step : startY - step;



  var timer  = 1;
  if(stopY > startY){
      for( i=startY; i< stopY; i+=step){
        setTimeout(("window.scrollTo(0, " + leapY  + ")"), timer * speed);
        leapY += step;
        if(leapY>stopY){
          leapY = stopY;
          timer++;
        }
      }
  }

  if(stopY < startY){
      for( i=startY; i> stopY; i-=step){
        setTimeout(("window.scrollTo(0, " + leapY  + ")"), timer * speed);
        leapY -= step;
        if(leapY<stopY){
          leapY = stopY;
          timer++;
        }
      }
  }
}



// animation of landing page
function randomPick(array){
  var randomNumber = Math.floor(Math.random()*array.length);
  return randomNumber;
}

function animateScrolls(){
    var goTop = document.getElementById('goTop');
    var animatedElement = document.getElementsByClassName("animated")[0];
    var animateIn = ["fadeIn", "rubberBand", "bounceInDown", "pulse", "swing"];
    var animateOut = ["fadeOut", "flipOutX",  "hinge", "fadeOutDown"];
    var position = animatedElement.offsetTop;
    var bounding = animatedElement.getBoundingClientRect().top;
    var scrollPosition = Math.round((window.innerHeight * 20)/100);

    if( (position - scrollPosition) < window.pageYOffset ){
      //Remove animateIn  class from current element and add animationOut
        goTop.className = "goTop";
        animatedElement.className = "animated";
        animatedElement.classList.add(animateOut[3]);

    }else if ((position - scrollPosition) > window.pageYOffset) {
      //remove all classes

        // animatedElement.className = "animated";
        goTop.className = "hidden";
        animatedElement.classList.remove(animateOut[3]);
      //add class name .animated .fadeIn
        animatedElement.classList.add(animateIn[2]);

    }
}

window.addEventListener("scroll", animateScrolls);


//hamburger menu
$("#hamIcon").on('click', function(){
  $('nav').slideToggle();
});
