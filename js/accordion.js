// FOR FAQS
jQuery(document).ready(function($){
    
    var panels = $(".faq-ans").hide();

    panels.first().show();
    
     $(".faq-que").click(function(){

         var $this = $(this);

         panels.slideUp();
         $this.next().slideDown();
         
    });

});

// FOR ORDER LIST
jQuery(document).ready(function($){
    
    var panels = $(".orderlist-body").hide();

    panels.first().show();
    
     $(".orderlist-head").click(function(){

         var $this = $(this);

         panels.slideUp();
         $this.next().slideDown();
         
    });

});


   jQuery(document).ready(function($) {
      $(".owl-carousel").owlCarousel({
         slideSpeed: 600,
         paginationSpeed: 500,
         autoplay: true,
         autoplayTimeout: 3000,
         autoplayHoverPause: true,
         responsive: {
            0: {
               items: 2 
            },
            768: {
               items: 3
            },
            992: {
               items: 5
            }
         }
      });
   });


   jQuery(document).ready(function($) {
        $(".owl-carousel1").owlCarousel({
            slideSpeed: 600,
            paginationSpeed: 500,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 3
                },
                768: {
                    items: 3
                },
                992: {
                    items: 7
                }
            }
        });
    });


// product details page gallery image 
document.addEventListener("DOMContentLoaded", function() {
    // Get all thumbnail images
    var thumbnails = document.getElementsByClassName("thumbnail");

    // Loop through each thumbnail and add click event listener
    for (var i = 0; i < thumbnails.length; i++) {
        thumbnails[i].addEventListener("click", function() {
            // Get the src attribute of the clicked thumbnail
            var newImageSrc = this.src;

            // Update the main image src attribute
            document.getElementById("mainImage").src = newImageSrc;
        });
    }
});
