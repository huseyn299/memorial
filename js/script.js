$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
    //   autoWidth:true,
    autoPlay:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:3
          }
      }
  })
  $("#owl-demo").owlCarousel({
   
    autoPlay: 3000, //Set AutoPlay to 3 seconds
  
    items : 4,
    itemsDesktop : [1199,3],
    itemsDesktopSmall : [979,3]
  
  });
  });

  function openNav() {
	  document.getElementById("myNav").style.height = "100%";
	}
	
	function closeNav() {
	  document.getElementById("myNav").style.height = "0%";
	}