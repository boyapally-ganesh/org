$(window).scroll(function() {
    if ($(this).scrollTop() > 1){  
    $('header').addClass("sticky");
}
else{
    $('header').removeClass("sticky");
}
});

function openNav() {
document.getElementById("mySidenav").style.width = "95%";
}
function closeNav() {
document.getElementById("mySidenav").style.width = "0";
}	

function openNav1() {
document.getElementById("mySidenav1").style.width = "300px";
}
function closeNav1() {
document.getElementById("mySidenav1").style.width = "0";
}

// function openNav3() {
//   document.getElementById("mySidenav3").style.width = "300px";
// }
// function closeNav3() {
//   document.getElementById("mySidenav3").style.width = "0";
// }


// tabbed content
// http://www.entheosweb.com/tutorials/css/tabs.asp
//  $(".tab_content").hide();
// $(".tab_content:first").show();

/* if in tab mode */
$(".tabs li").click(function() {
    
  $(".tab_content").hide();
  var activeTab = $(this).attr("rel"); 
  $("#"+activeTab).fadeIn();		
    
  $(".tabs li").removeClass("active");
  $(this).addClass("active");

  $(".tab_drawer_heading").removeClass("d_active");
  $(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");
  
});
/* if in drawer mode */




$(document).ready(function(){
$(".tab_drawer_heading").click(function(){
    if($(this).hasClass('d_active')){
        $(this).removeClass("d_active");
        var div_id 	=	$(this).next(".tab_content").attr('id');
        $('#'+div_id).css("display","none");
    }else{
        $('.tab_drawer_heading').removeClass("d_active");
        $('.tab_content').css("display","none");
        $(this).addClass("d_active");
        var div_id 	=	$(this).next(".tab_content").attr('id');
        $('#'+div_id).css("display","block");
    }
 });   
});



/* Extra class "tab_last" 
   to add border to right side
   of last tab */
$('ul.tabs li').last().addClass("tab_last");
jQuery(document).ready(function() {
    $('.filter_events_slider').owlCarousel({
        loop:true,
        items:1,
        margin:0,
        dots:true,
        nav:false,
        autoplay:true,   
        //smartSpeed: 2000, 
        autoplayTimeout:3500,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
      })
  });

jQuery(document).ready(function() {
$('.contribute_story_slider').owlCarousel({
    loop:false,
    items:5,
    margin:20,
    dots:true,
    nav:false,
    autoplay:false,   
    //smartSpeed: 2000, 
    autoplayTimeout:3500,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:2
        },
        1000:{
            items:5
        }
    }
  })


$('.partner-carousels').owlCarousel({
loop:($('.partner-carousels .partner-carousels').length>6)?true:false,
margin:30,
nav:true,
responsive:{
    0:{
        items:2
    },
    600:{
        items:3
    },
    1000:{
        items:5
    }
}
})

$('.partner-carousels2').owlCarousel({
loop:false,
margin:20,
nav:true,
responsive:{
    0:{
        items:1
    },
    600:{
        items:3
    },
    1000:{
        items:6
    }
}
})


$('.author_slider').owlCarousel({
loop:false,
margin:0,
nav:false,
responsive:{
  0:{
      items:1
  },
  600:{
      items:1
  },
  1000:{
      items:1
  }
}
});

$('.contribute_slider').owlCarousel({
loop:false,
margin:0,
nav:false,
responsive:{
  0:{
      items:1
  },
  600:{
      items:1
  },
  1000:{
      items:1
  }
}
});


$('.editor_slider').owlCarousel({
loop:false,
margin:0,
nav:false,
responsive:{
  0:{
      items:1
  },
  600:{
      items:1
  },
  1000:{
      items:1
  }
}
});

});
jQuery(document).ready(function() {
var sync1 = jQuery("#sync1");
var sync2 = jQuery("#sync2");
var slidesPerPage = 5; //globaly define number of elements per page
var syncedSecondary = true;

sync1
  .owlCarousel({
  items: 1,
  slideSpeed: 3000,
  nav: false,

  //   animateOut: 'fadeOut',
  animateIn: "fadeIn",
  autoplayHoverPause: true,
  autoplaySpeed: 1400, 
  dots: false,
  loop: true,
  responsiveClass: true,
  responsive: {
    0: {
      item: 1,
      autoplay: false
    },
    
    600: {
      items: 1,
      autoplay: true
    }
  },
  responsiveRefreshRate: 200,
  navText: [
    '<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>',
    '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'
  ]
})
  .on("changed.owl.carousel", syncPosition);

sync2
  .on("initialized.owl.carousel", function() {
  sync2
    .find(".owl-item")
    .eq(0)
    .addClass("current");
})
  .owlCarousel({
  items: slidesPerPage,
  dots: true,
    // nav: true,
  smartSpeed: 1000,
  slideSpeed: 1000,
  slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
  responsiveRefreshRate: 100,
  responsive:{
    0:{
      items:1
  },
 700:{
    items:4
},

  }
})
  .on("changed.owl.carousel", syncPosition2);

function syncPosition(el) {
  //if you set loop to false, you have to restore this next line
  //var current = el.item.index;

  //if you disable loop you have to comment this block
  var count = el.item.count - 1;
  var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

  if (current < 0) {
    current = count;
    
  }
  if (current > count) {
    current = 0;
  }

  //end block

  sync2
    .find(".owl-item")
    .removeClass("current")
    .eq(current)
    .addClass("current");
  var onscreen = sync2.find(".owl-item.active").length - 1;
  var start = sync2
  .find(".owl-item.active")
  .first()
  .index();
  var end = sync2
  .find(".owl-item.active")
  .last()
  .index();

  if (current > end) {
    sync2.data("owl.carousel").to(current, 100, true);
  }
  if (current < start) {
    sync2.data("owl.carousel").to(current - onscreen, 100, true);
  }
}

function syncPosition2(el) {
  if (syncedSecondary) {
    var number = el.item.index;
    sync1.data("owl.carousel").to(number, 100, true);
  }
}

sync2.on("click", ".owl-item", function(e) {
  e.preventDefault();
  var number = jQuery(this).index();
  sync1.data("owl.carousel").to(number, 300, true);
});
});


/**
* jquery.stickOnScroll.js
* A jQuery plugin for making element fixed on the page.
*
* Created by Paul Tavares on 2012-10-19.
* Copyright 2012 Paul Tavares. All rights reserved.
* Licensed under the terms of the MIT License
*
*/

/* ;(function(factory) {
if (typeof define === 'function' && define.amd) {
  define(['jquery'], factory);
} else {
  factory(jQuery);
}
}(function($){

"use strict";
/*jslint plusplus: true */
/*global $,jQuery */

var
  // Check if we're working in IE. Will control the animation
  // on the fixed elements.
  isIE = ($.support.optSelected === false ? true : false),

  // List of viewports and associated array of bound sticky elements
  viewports = {},

  // Local variable to hold methods
  fn = {};

/**
* Function bound to viewport's scroll event. Loops through
* the list of elements that needs to be sticked for the
* given viewport.
* "this" keyword is assumed to be the viewport.
*
* @param {eventObject} jQuery's event object.
*
* @return {Object} The viewport (this keyword)
*
*/
function processElements(ev) {

  var elements = viewports[$(this).prop("stickOnScroll")],
      i,j;

  // Loop through all elements bound to this viewport.
  for( i=0,j=elements.length; i<j; i++ ){

      // Scope in the variables
      // We call this anonymous funnction with the
      // current array element ( elements[i] )
      (function(o){

          var scrollTop,
              maxTop,
              cssPosition,
              footerTop,
              eleHeight,
              yAxis;

          // get this viewport options
          o = elements[i];

          // FIXME: Should the clean up of reference to removed element store the position in the array and delete it later?

          // If element has no parent, then it must have been removed from DOM...
          // Remove reference to it
          if (o !== null) {

              // jquery contains works on dom object; not jquery selections
              if (!$.contains(document.documentElement, o.ele[0])) {

                  elements[i] = o = null;

              }

          }
          if (o !== null) {

              // Get the scroll top position on the view port
              scrollTop   = o.viewport.scrollTop();

              // set the maxTop before we stick the element
              // to be it's "normal" topPosition minus offset
              maxTop      = o.getEleMaxTop();

              // TODO: What about calculating top values with margin's set?
              // pt.params.footer.css('marginTop').replace(/auto/, 0)

              // If not using the window object, then stop any IE animation
              if (o.isWindow === false && isIE) {
                  o.ele.stop();
              }

              // If the current scrollTop position is greater
              // than our maxTop value, then make element stick on the page.
              if (scrollTop >= maxTop){

                  cssPosition = {
                      position:   "fixed",
                      top:        ( o.topOffset - o.eleTopMargin )
                  };

                  if (o.isWindow === false) {

                      cssPosition = {
                          position:   "absolute",
                          top:        ( ( scrollTop + o.topOffset ) -  o.eleTopMargin )
                      };

                  }

                  o.isStick = true;

                  // ---> HAS FOOTER ELEMENT?
                  // check to see if it we're reaching the footer element,
                  // and if so, scroll the item up with the page
                  if  (o.footerElement.length) {

                      // Calculate the distance from the *bottom* of the fixed
                      // element to the footer element, taking into consideration
                      // the bottomOffset that may have been set by the user.
                      footerTop   = o.getEleTopPosition(o.footerElement);
                      eleHeight   = o.ele.outerHeight();
                      yAxis       = ( cssPosition.top + eleHeight +
                                      o.bottomOffset + o.topOffset );

                      if (o.isWindow === false) {

                          yAxis = (eleHeight + o.bottomOffset + o.topOffset);

                      } else {

                          yAxis = ( cssPosition.top + scrollTop +
                                    eleHeight + o.bottomOffset );

                          footerTop = o.getElementDistanceFromViewport(o.footerElement);

                      }

                      // If the footer element is overstopping the sticky element
                      // position, then adjust it so that we make room for the
                      // fotoer element.
                      if (yAxis > footerTop) {

                          if (o.isWindow === true) {

                              cssPosition.top = (
                                      footerTop - ( scrollTop + eleHeight + o.bottomOffset )
                                  );

                          // Absolute positioned element
                          } else {

                              cssPosition.top = (scrollTop - (yAxis - footerTop));

                          }

                      }

                  }

                  // If o.setParentOnStick is true, then set the
                  // height to this node's parent.
                  if (o.setParentOnStick === true) {

                      o.eleParent.css("height", o.eleParent.height());

                  }

                  // If o.setWidthOnStick is true, then set the width on the
                  // element that is about to be Sticky.
                  if (o.setWidthOnStick === true) {

                      o.ele.css("width", o.ele.css("width"));

                  }

                  // If we have additional stick offset, apply it now
                  if (!o.isViewportOffsetParent) {

                      cssPosition.top = (
                          cssPosition.top - o.getElementDistanceFromViewport(o.eleOffsetParent)
                      );

                  }

                  // Stick the element
                  if (isIE && o.isWindow === false) {

                      o.ele
                          .addClass(o.stickClass)
                          .css("position", cssPosition.position)
                          .animate({top: cssPosition.top}, 150);

                  } else {

                      o.ele
                          .css(cssPosition)
                          .addClass(o.stickClass);

                  }

                  // If making element stick now, then trigger
                  // onStick callback if any
                  if (o.wasStickCalled === false) {

                      o.wasStickCalled = true;

                      setTimeout(function(){

                          if (o.isOnStickSet === true) {

                              o.onStick.call(o.ele, o.ele);

                          }

                          o.ele.trigger("stickOnScroll:onStick", [o.ele]);

                      }, 20);

                  }

              // ELSE, If the scrollTop of the view port is
              // less than the maxTop, then throw the element back into the
              // page normal flow
              } else if (scrollTop <= maxTop) {

                  if (o.isStick) {

                      // reset element
                      o.ele
                          .css({
                              position: "",
                              top: ""
                          })
                          .removeClass(o.stickClass);

                      o.isStick = false;

                      // Reset parent if o.setParentOnStick is true
                      if (o.setParentOnStick === true) {

                          o.eleParent.css("height", "");

                      }

                      // Reset the element's width if o.setWidthOnStick is true
                      if (o.setWidthOnStick === true) {

                          o.ele.css("width", "");

                      }

                      o.wasStickCalled = false;

                      setTimeout(function(){

                          // Execute the onUnStick if defined
                          if (o.isOnUnStickSet) {

                              o.onUnStick.call( o.ele, o.ele );

                          }

                          o.ele.trigger("stickOnScroll:onUnStick", [o.ele]);

                      }, 20);

                  }
              }

              // Recalculate the original top position of the element...
              // this could have changed from when element was initialized
              // - ex. elements were inserted into DOM. We re-calculate only
              // if the we're at the very top of the viewport, so that we can
              // get a good position.
              if (scrollTop === 0) {

                  o.setEleTop();

              }

          }// is element setup null?

      })( elements[i] );

  }//end: for()

  return this;

}//end: processElements()


/**
* Make the selected items stick to the top of the viewport
* upon reaching a scrolling offset.
* This method manipulates the following css properties on
* the element that is to be sticky: top, position.
* Elements also receive a css class named 'hasStickOnScroll'.
*
* @param {Object} options
* @param {Integer} [options.topOffset=150]
* @param {Integer} [options.bottomOffset=5]
* @param {Object|HTMLElement|jQuery} [options.footerElement=null]
* @param {Object|HTMLElement|jQuery} [options.viewport=window]
* @param {String} [options.stickClass="stickOnScroll-on"]
* @param {Boolean} [options.setParentOnStick=false]
* @param {Boolean} [options.setWidthOnStick=false]
* @param {Function} [options.onStick=null]
* @param {Function} [options.onUnStick=null]
*
* @return {jQuery} this
*
*/
$.fn.stickOnScroll = function(options) {
  return this.each(function(){

      // If element already has stickonscroll, exit.
      if ($(this).hasClass("hasStickOnScroll")) {
          return this;
      }

      // Setup options for tis instance
      var o   = $.extend({}, {
                      topOffset:          150,
                      bottomOffset:       5,
                      footerElement:      null,
                      viewport:           window,
                      stickClass:         'stickOnScroll-on',
                      setParentOnStick:   false,
                      setWidthOnStick:    true,
                      onStick:            null,
                      onUnStick:          null
                  }, options),
          viewportKey,
          setIntID,
          setIntTries = 1800; 

      o.isStick                   = false;
      o.ele                       = $(this).addClass("hasStickOnScroll");
      o.eleParent                 = o.ele.parent();
      o.eleOffsetParent           = o.ele.offsetParent();
      o.viewport                  = $(o.viewport);
      o.eleTop                    = 0;
      o.eleTopMargin              = parseFloat(
                                      (o.ele.css("margin-top") || 0)
                                  ) || 0;
      o.footerElement             = $(o.footerElement);
      o.isWindow                  = true;
      o.isOnStickSet              = $.isFunction(o.onStick);
      o.isOnUnStickSet            = $.isFunction(o.onUnStick);
      o.wasStickCalled            = false;
      o.isViewportOffsetParent    = true;

      /**
       * Retrieves the element's top position based on the type of viewport
       * and sets on the options object for the instance. This Top position
       * is the element top position relative to the the viewport.
       *
       * @return {Integer}
       */
      o.setEleTop = function(){

          if (o.isStick === false) {

              if (o.isWindow) {

                  o.eleTop = o.ele.offset().top;

              } else {

                  o.eleTop = ( o.ele.offset().top - o.viewport.offset().top );

              }

          }

      }; 

      /**
       * REturns an elements top position in relation
       * to the viewport's Top Position.
       *
       * @param {jQuery} $ele
       *          This element must be inside the viewport
       *
       * @return {Integer}
       *
       */
      o.getEleTopPosition = function($ele) {

          var pos = 0;

          if (o.isWindow) {

              pos = $ele.offset().top;

          } else {

              pos = ( $ele.offset().top - o.viewport.offset().top );

          }

          return pos;

      }; /* o.getEleTopPosition() */

      /**
       * Get's the MAX top position for the element before it
       * is made sticky. In some cases the max could be less
       * than the original position of the element, which means
       * the element would always be sticky... in these instances
       * the max top will be set to the element's top position.
       *
       * @return {Integer}
       */
      o.getEleMaxTop = function() {

          var max = ( ( o.eleTop - o.topOffset ));

          if (!o.isWindow) {

              max = (max + o.eleTopMargin);

              // If ele parent is not the viewport, then adjust the max top


          }

          return max;

      }; 
    })};
    
    //end: o.getEleMaxTop()

      /**
       * Gets the distance between the top of the element and the
       * top of the viewport. Basically the offset from the top of
       * the "page" inside the viewport. This distance is alwasy the
       * same even if the viewport is scrolled. The only time it
       * changes is when elements are inserted or removed above the
       * the Element or item above it are hidden/displayed.
       * Methods uses the Position() values until it reaches the
       * viewport
       */
     // o.getElementDistanceFromViewport = function($ele) {

        //  var distance    = $ele.position().top,
             // $parent     = $ele.offsetParent();
          //if ($parent.is("body") || $parent.is("html")) {

              //return distance;

          //}

          
         // if ($parent[0] !== o.viewport[0] ) {

             // distance = (
                //  distance +
                //  o.getElementDistanceFromViewport( $parent )
              //);

        
         // } else {

          //    distance = (distance + o.viewport.scrollTop());

          //}

         // return distance;

   //   }; /* end: .getElementDistanceFromViewport() */

     
     // if (o.setParentOnStick === true && o.eleParent.is("body")){

     //     o.setParentOnStick = false;

     // }

     // if (!$.isWindow(o.viewport[0])) {

         // o.isWindow  = false;

      //}

      /**
       * Adds this sticky element to the list of element for the viewport.
       *
       */
     // function addThisEleToViewportList() {

         // o.setEleTop();

          //viewportKey = o.viewport.prop("stickOnScroll");

         
         // if (!o.isWindow) {

            //  o.isViewportOffsetParent    = ( o.eleOffsetParent[0] === o.viewport[0] );

          //}

        
        //  if (!viewportKey) {

           //   viewportKey = "stickOnScroll" + String(Math.random()).replace(/\D/g,"");
            //  o.viewport.prop("stickOnScroll", viewportKey);
             // viewports[viewportKey] = [];
           //   o.viewport.on("scroll", processElements);

         // }

        //  viewports[viewportKey].push(o);

         // o.viewport.trigger("scroll");

     // } 

     //if (o.ele.is(":visible")) {

       //   addThisEleToViewportList();

    //  } else {

         // setIntID = setInterval(function(){

           //   if (o.ele.is(":visible") || !setIntTries) {

           //       clearInterval(setIntID);
           //       addThisEleToViewportList();

           //   }

            //  --setIntTries;

   //       }, 100);

    //  }

 //     return this;

//    });//end: each()

// };//end: $.fn.stickOnScroll()

//}));

// Begin custom js
$(".intro_filter").stickOnScroll();
var path = window.location.href;
$('.top_nav_main a').each(function(){   
if($(this).attr('href') == path){
    $(this).addClass('active');
}
});



$(function() {
$('.share_toggle').on('click', function() {
 $(this).siblings().removeClass('active').end().toggleClass('active');
});
});


$(function() {
$('.toogle_click').on('click', function() {
 $('.sidenav').siblings().removeClass('active').end().toggleClass('active');
});

$('.closebtn').on('click', function() {

$(".sidenav").removeClass("active");
});
});


$('.mobile-header h2').on('click', function() {

$(".menuCollapse").toggleClass("active");
$(".mobile-header h2").toggleClass("active2");

});




$(document).ready(function(){
$(".mega_menu_new").hide()
$(".dropbtn_new").click(function(){
$(".mega_menu_new").toggle();
});

});

$(document).ready(function(){

$(".toggle").click(function(){
$(".closebtn").toggle();
$(".closebtn").css("display", "block");
$(".sidenav").css("display", "block");
   $(".sidenav").css("width", "95%");
  
});
$(".closebtn").click(function(){

 $(".sidenav").css("width", "0%");

  
});

});

