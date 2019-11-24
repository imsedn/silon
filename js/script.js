$(function() {
    // Owl Carousel
    var owl = $("#most-popular-slider");
    owl.owlCarousel({
      items: 4,
      itemsDesktop : [1199,2],
      margin: 30,
      loop: true,
      dots: true,
      responsive:{ 
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
    });
  });