// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Google Maps Scripts
// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 15,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(55.739262, 37.548516), // Москва, Киевская, 18

        // Disables the default Google Maps UI components
        disableDefaultUI: true,
        scrollwheel: false,
        draggable: false,
        zoomControl: true,

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{"featureType":"administrative.neighborhood","elementType":"all","stylers":[{"visibility":"simplified"}
                                                                                            ]}
                 ,{"featureType":"administrative.land_parcel","elementType":"all","stylers":[{"saturation":"-11"}
                                                                                            ]}
                 ,{"featureType":"landscape","elementType":"all","stylers":[{"saturation":"-100"}
                                                                            ,{"lightness":"0"}
                                                                           ]}
                 ,{"featureType":"landscape.natural.landcover","elementType":"geometry.fill","stylers":[{"saturation":"19"}
                                                                                                       ]}
                 ,{"featureType":"landscape.natural.terrain","elementType":"geometry.fill","stylers":[{"saturation":"-13"}
                                                                                                     ]}
                 ,{"featureType":"poi.attraction","elementType":"all","stylers":[{"visibility":"off"}
                                                                                ]}
                 ,{"featureType":"poi.government","elementType":"all","stylers":[{"visibility":"off"}
                                                                                ]}
                 ,{"featureType":"poi.medical","elementType":"all","stylers":[{"visibility":"off"}
                                                                             ]}
                 ,{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"saturation":"-29"}
                                                                                     ,{"lightness":"40"}
                                                                                    ]}
                 ,{"featureType":"poi.place_of_worship","elementType":"all","stylers":[{"visibility":"off"}
                                                                                      ]}
                 ,{"featureType":"poi.school","elementType":"all","stylers":[{"visibility":"off"}
                                                                            ]}
                 ,{"featureType":"poi.sports_complex","elementType":"all","stylers":[{"visibility":"off"}
                                                                                    ]}
                 ,{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"saturation":"-100"}
                                                                                         ,{"lightness":"43"}
                                                                                        ]}
                 ,{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"saturation":"-100"}
                                                                                           ,{"lightness":"73"}
                                                                                          ]}
                 ,{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"lightness":"100"}
                                                                                         ]}
                 ,{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"lightness":"100"}
                                                                                      ]}
                 ,{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#009FE3"}
                                                                                 ]}
                ]
    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using out element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Custom Map Marker Icon - Customize the map-marker.png file to customize your icon
    var image = '/img/map-marker.png';
   var myLatLng = new google.maps.LatLng(55.739262, 37.548516);
    var beachMarker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: image
    });
}

/* Dot nav */

$(document).ready(function(){
    $('.awesome-tooltip').tooltip({
        placement: 'left'
    });   

    $(window).bind('scroll',function(e){
      dotnavigation();
    });
    
    function dotnavigation(){
             
        var numSections = $('section').length;
        
        $('#dot-nav li a').removeClass('active').parent('li').removeClass('active');     
        $('section').each(function(i,item){
          var ele = $(item), nextTop;
          
          console.log(ele.next().html());
          
          if (typeof ele.next().offset() != "undefined") {
            nextTop = ele.next().offset().top;
          }
          else {
            nextTop = $(document).height();
          }
          
          if (ele.offset() !== null) {
            thisTop = ele.offset().top - ((nextTop - ele.offset().top) / numSections);
          }
          else {
            thisTop = 0;
          }
          
          var docTop = $(document).scrollTop();
          
          if(docTop >= thisTop && (docTop < nextTop)){
            $('#dot-nav li').eq(i).addClass('active');
          }
        });   
    }

    /* get clicks working */
    $('#dot-nav li').click(function(){
      
        var id = $(this).find('a').attr("href"),
          posi,
          ele,
          padding = 0;
      
        ele = $(id);
        posi = ($(ele).offset()||0).top - padding;
      
        $('html, body').animate({scrollTop:posi}, 'slow');
      
        return false;
    });

/* end dot nav */
});