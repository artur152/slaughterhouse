"use strict";

document.addEventListener("DOMContentLoaded", function() {

  /** Mutation Event, Methods */
  /*
    DOMAttrModified
    DOMAttributeNameChanged
    DOMCharacterDataModified
    DOMElementNameChanged
    DOMNodeInserted
    DOMNodeInsertedIntoDocument
    DOMNodeRemoved
    DOMNodeRemovedFromDocument
    DOMSubtreeModified
  */
  function DOMNodeInserted() {
    var target = document.getElementsByTagName("main")[0];
    target.addEventListener('DOMCharacterDataModified',  function () {

    }, false);
  }
  DOMNodeInserted();


  /** Main Menu */
  function showDropDown() {
    var main_menu = document.querySelector('.main-menu');
    var menu_el = main_menu.querySelectorAll('.menu .has_dropdown');
    var dropdown = document.querySelectorAll('.dropdown-menu');

    for (var i = menu_el.length - 1; i >= 0; --i) {
      menu_el[i].onmouseover = function () {
        this.classList.add('open');
      };
      menu_el[i].onmouseout = function () {
        this.classList.remove('open');
      }
    }
  }
  showDropDown();


  /** Scroll Events */
  function scrolling() {
    const page = document.getElementsByClassName('page')[0];
    const header = document.getElementsByTagName('header')[0];
    const toTop = document.getElementsByClassName('scroll-top-js')[0];

    /* scroll_Page */
    function scrollPage() {
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        page.classList.add('scrolled_js');
        header.classList.add('fixed_js');
        toTop.classList.add('show_js');
      }
      else if (document.body.scrollTop < 200 || document.documentElement.scrollTop < 200) {
        page.classList.remove('scrolled_js');
        header.classList.remove('fixed_js');
        toTop.classList.remove('show_js');
      }
    }
    window.onscroll = function() { scrollPage() };

    /* Scroll_Top */
    function scrollTo() {
      var scrollToTop = window.setInterval(function() {
        var pos = window.pageYOffset;
        if ( pos > 0 ) {
          window.scrollTo( 0, pos - 20 );
        } else {
          window.clearInterval( scrollToTop );
        }
      }, 20);
    }

    toTop.onclick = function () {
      scrollTo(document.documentElement, 0, 100); // FireFox
      scrollTo(document.body, 0, 100); // Chrome
      console.log(`${window.pageYOffset}px`);
    };
  }
  scrolling();


  /** Detect Keydown event */
  document.onkeypress = function(event) {
    var keys = event.which || event.keyCode;
    console.log(`onkeypress
    KeyName: ${String.fromCharCode(keys)}
    keyCode: ${keys}`);
  };

  document.onkeydown = function(event) {
    var keys = event.which || event.keyCode;
    console.log(`onkeydown
    KeyName: ${String.fromCharCode(keys)}
    keyCode: ${keys}`);
  };


  /** Page width */
  /*
   $('.page-wrap').once(function() {
   $('.page-wrap').prepend('<div class="window"></div>');
   });

   var width;
   function screenWidth() {
   width = $('html').width();
   $('.window').text(width);
   //console.log(width + ' on load');

   $(window).on('resize', function() {
   width = $('html').width();
   $('.window').text(width);

   //console.clear();
   //console.info(width);
   });
   } screenWidth();
   */


  /** Get Local json Callback */
  /*
  function getJSON(callback) {
    var xhr;
    var myData;
    xhr = new XMLHttpRequest();

    xhr.onreadystatechange  = function () {
      if (xhr.readyState < 4) {
        console.log("Load");
      }
      else if (xhr.readyState === 4 && xhr.status == 200) {
        callback(xhr.responseText);
      }
    }

    xhr.open('GET', 'js/my-js-test/houses.json');
    xhr.send(null);
  }

  getJSON(function(response) {
    myData = JSON.parse(response);
    console.log((myData.housings[0].address));
    return myData;
  });
  */

  //console.log('-------------------------');
    //console.log((myData.housings[0].address));


  /** Get Local json */
  function loadJSON(callback) {
    var xhr;
    var mydata;
    xhr = new XMLHttpRequest();

    xhr.onload = function () {
      if (xhr.readyState < 4) {
        //console.log("Loading...");
      }
      else if (xhr.readyState === 4 && xhr.status == 200) {
        mydata = JSON.parse(xhr.responseText);
        //console.log((mydata.housings[0].address));
      }
    }

    xhr.open('GET', 'js/my-js-test/houses.json');
    xhr.send(null);
    return mydata;
  }

  loadJSON(function(response) {
    var obj = JSON.parse(response);
    console.log((obj.housings[1].address));
  });

});
