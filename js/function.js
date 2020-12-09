/*--------------------------------------
		CUSTOM FUNCTION WRITE HERE		
--------------------------------------*/
"use strict";
jQuery(document).on("ready", function () {
  /* -------------------------------------
			SCROLL TO TOP
	-------------------------------------- */
  var _tg_btnscrolltop = jQuery(".tg-btnscrolltop");
  _tg_btnscrolltop.on("click", function () {
    var _scrollUp = jQuery("html, body");
    _scrollUp.animate({ scrollTop: 0 }, "slow");
  });
  /* -------------------------------------
			STICKY NAV BAR
	-------------------------------------- */
  // When the user scrolls the page, execute myFunction
  window.onscroll = function () {
    myFunction();
  };

  // Get the navbar
  var navbar = document.getElementById("tg-header");

  // Get the offset position of the navbar
  var sticky = navbar.offsetTop;

  // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }
  /* -------------------------------------
			SIDE NAVIGATION ZOOMIN
	-------------------------------------- */
  $(document).ready(function () {
    $("a[href*=#]").bind("click", function (e) {
      e.preventDefault(); // prevent hard jump, the default behavior

      var target = $(this).attr("href"); // Set the target as variable

      // perform animated scrolling by getting top-position of target-element and set it as scroll target
      $("html, body")
        .stop()
        .animate(
          {
            scrollTop: $(target).offset().top,
          },
          600,
          function () {
            location.hash = target; //attach the hash (#jumptarget) to the pageurl
          }
        );

      return false;
    });
  });

  $(window)
    .scroll(function () {
      var scrollDistance = $(window).scrollTop() + 100;

      // Show/hide menu on scroll
      if (scrollDistance >= 600) {
        $(".navigation").fadeIn("fast");
      } else {
        $(".navigation").fadeOut("fast");
      }

      // Assign active class to nav links while scolling
      $(".page-section").each(function (i) {
        if ($(this).position().top <= scrollDistance) {
          $(".navigation a.active").removeClass("active");
          $(".navigation a").eq(i).addClass("active");
        }
      });
    })
    .scroll();
  /*--------------------------------------
			DARK/LIGHT MODE CHANGE				
	--------------------------------------*/
  if (jQuery("#tg-homeslidervone").length > 0) {
    var $slider = $("#tg-homeslidervone");
    $slider
      .on("init", function () {
        mouseWheel($slider);
      })
      .slick({
        dots: true,
        vertical: true,
        infinite: true,
      });
    function mouseWheel($slider) {
      $(window).on("wheel", { $slider: $slider }, mouseWheelHandler);
    }
    function mouseWheelHandler(event) {
      event.preventDefault();
      var $currentSlides = jQuery(".slick-active").index();
      jQuery("#tg-currentslidenumber").html("0" + $currentSlides);
      var $totalSlides = jQuery(".slick-slide:not(.slick-cloned)").length;
      jQuery("#tg-totalslides").html("0" + $totalSlides);
      var $slider = event.data.$slider;
      var delta = event.originalEvent.deltaY;
      if (delta > 0) {
        $slider.slick("slickNext");
        jQuery("#tg-currentslidenumber").html("0" + $currentSlides++);
      } else {
        $slider.slick("slickPrev");
        jQuery("#tg-currentslidenumber").html("0" + $currentSlides--);
      }
    }
  }

  // jQuery(".tg-navigation ul li .tg-radio input").click(function () {
  //   if (jQuery("input:not(:checked)")) {
  //     jQuery("body").removeClass("tg-themechange");
  //   }
  //   if (jQuery("input").is(":checked")) {
  //     jQuery("body").addClass("tg-themechange");
  //   }
  // });

  const toggleSwitch = document.querySelector('input[type="checkbox"]');
  function darkMode() {
    jQuery("body").addClass("tg-themechange");
  }

  function lightMode() {
    jQuery("body").removeClass("tg-themechange");
  }

  function switchTheme(event) {
    if (event.target.checked) {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      darkMode();
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
      lightMode();
    }
  }

  toggleSwitch.addEventListener("change", switchTheme);

  const currentTheme = localStorage.getItem("theme");
  if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);

    if (currentTheme === "dark") {
      toggleSwitch.checked = true;
      darkMode();
    }
  }

  /*--------------------------------------
			Testimonial Slider
	--------------------------------------*/
  if (jQuery("#tg-clientfeedbackslider").length > 0) {
    jQuery("#tg-clientfeedbackslider").owlCarousel({
      items: 1,
      loop: true,
      nav: false,
      autoplay: true,
    });
  }
  /*--------------------------------------
			Scroll For Add Class
	--------------------------------------*/
  jQuery(window).scroll(function () {
    var scroll = jQuery(window).scrollTop();
    if (scroll >= 100) {
      jQuery("body").addClass("tg-bgopcity");
    } else {
      jQuery("body").removeClass("tg-bgopcity");
    }
  });
  /*--------------------------------------
			Project Slider
	--------------------------------------*/
  if (jQuery("#tg-projectimgslider").length > 0) {
    jQuery("#tg-projectimgslider").owlCarousel({
      items: 1,
      nav: false,
      loop: false,
      margin: 80,
      autoplay: true,
    });
  }
  /* -------------------------------------
			TEAMS SLIDER
	-------------------------------------- */
  if (jQuery("#tg-teamsslider").length > 0) {
    jQuery("#tg-teamsslider").owlCarousel({
      loop: true,
      margin: 70,
      nav: false,
      dots: false,
      autoplay: true,
      responsiveClass: true,
      responsive: {
        0: { items: 1 },
        600: { items: 3 },
        1000: { items: 4 },
      },
    });
  }
  /* -------------------------------------
			POPUP HIDE SHOW
	-------------------------------------- */
  jQuery(".tg-btnshowfilterspopup").on("click", function (event) {
    event.preventDefault();
    jQuery(".tg-filterpopup").toggleClass("tg-showfilterpopup");
  });
  jQuery(".tg-btnshowsharepopup").on("click", function (event) {
    event.preventDefault();
    jQuery(".tg-sharepopup").toggleClass("tg-showsharepopup");
  });
  jQuery(".tg-btnclosepopup").on("click", function (event) {
    event.preventDefault();
    jQuery(".tg-themepopup").removeClass("tg-showfilterpopup");
    jQuery(".tg-themepopup").removeClass("tg-showsharepopup");
  });
  /* -------------------------------------
			IMAGE HOVER
	-------------------------------------- */
  function isVisible(elem) {
    if (!(elem instanceof Element))
      throw Error("DomUtil: elem is not an element.");
    const style = getComputedStyle(elem);
    if (style.display === "none") {
      return false;
    }
    if (style.visibility !== "visible") {
      return false;
    }
    if (style.opacity < 0.1) {
      return false;
    }
    if (
      elem.offsetWidth +
        elem.offsetHeight +
        elem.getBoundingClientRect().height +
        elem.getBoundingClientRect().width ===
      0
    ) {
      return false;
    }
    const elemCenter = {
      x: elem.getBoundingClientRect().left,
      y: elem.getBoundingClientRect().top,
    };
    if (elemCenter.x < 0) {
      return false;
    }
    if (
      elemCenter.x > (document.documentElement.clientWidth || window.innerWidth)
    ) {
      return false;
    }
    if (elemCenter.y < 0) {
      return false;
    }
    if (
      elemCenter.y >
      (document.documentElement.clientHeight || window.innerHeight)
    ) {
      return false;
    }
    let pointContainer = document.elementFromPoint(elemCenter.x, elemCenter.y);
    do {
      if (pointContainer === elem) {
        return true;
      }
    } while ((pointContainer = pointContainer.parentNode));
    return false;
  }
  function initAnimations() {
    var elements = document.querySelectorAll(".grid-item, .tg-simpleimghover");
    for (var ele of elements) {
      if (isVisible(ele)) {
        if (ele.classList.contains("nsg-animation")) return true;
        ele.classList.add("nsg-animation");
        anime({
          width: "100%",
          duration: 1000,
          direction: "alternate",
          easing: "easeInOutSine",
          targets: ele.querySelector(":scope > a > div > span"),
        });
        anime({
          opacity: 1,
          delay: 950,
          targets: ele.querySelector(":scope > a > div > img"),
        });
        anime({
          opacity: 1,
          delay: 950,
          targets: ele.querySelector(":scope > a + figcaption"),
        });

        anime({
          width: "100%",
          duration: 1000,
          direction: "alternate",
          easing: "easeInOutSine",
          targets: ele.querySelector(":scope > div > span"),
        });
        anime({
          opacity: 1,
          delay: 950,
          targets: ele.querySelector(":scope > div > img"),
        });
      }
    }
  }
  function initAnimations2() {
    var elements2 = document.querySelectorAll(
      ".grid-item, .tg-simpleimghover2"
    );
    for (var ele of elements2) {
      if (isVisible(ele)) {
        if (ele.classList.contains("nsg-animation")) return true;
        ele.classList.add("nsg-animation");
        anime({
          width: "100%",
          duration: 600,
          direction: "alternate",
          targets: ele.querySelector(":scope > a > span"),
        });
        anime({
          opacity: 1,
          delay: 550,
          targets: ele.querySelector(":scope > a > img"),
        });
        anime({
          opacity: 1,
          // delay: 650,
          targets: ele.querySelector(":scope > a + figcaption"),
        });

        anime({
          opacity: 1,
          // delay: 550,
          targets: ele.querySelector(":scope > div > img"),
        });
      }
    }
  }
  window.addEventListener("scroll", initAnimations);
  window.addEventListener("scroll", initAnimations2);
  var tooltips = document.querySelectorAll(".tg-themeimghover h2");
  window.onmousemove = function (e) {
    var x = e.clientX + 20 + "px",
      y = e.clientY + 20 + "px";
    for (var i = 0; i < tooltips.length; i++) {
      tooltips[i].style.top = y;
      tooltips[i].style.left = x;
    }
  };
  var modal = document.getElementById("myModal");

  // Get the image and insert it inside the modal - use its "alt" text as a caption

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  };
  /* -------------------------------------
			LOAD MORE PROJECTS
	-------------------------------------- */
  if (jQuery("#tg-masnorygallery").length > 0) {
    jQuery("#tg-masnorygallery .grid-item").slice(0, 8).show();
    jQuery("#tg-btnviewmore").on("click", function (e) {
      e.preventDefault();
      jQuery("#tg-masnorygallery .grid-item:hidden").slice(0, 3).slideDown();
      jQuery("html,body").animate(
        {
          scrollTop: $(this).offset().top,
        },
        1500
      );
    });
  }
  if (jQuery("#tg-portfolioholder").length > 0) {
    jQuery("#tg-portfolioholder .tg-contentbox").slice(0, 6).show();
    jQuery("#tg-btnviewmore").on("click", function (e) {
      e.preventDefault();
      jQuery("#tg-portfolioholder .tg-contentbox:hidden")
        .slice(0, 1)
        .slideDown();
      jQuery("html,body").animate(
        {
          scrollTop: $(this).offset().top,
        },
        1500
      );
    });
  }
  /*--------------------------------------
			COUNTER
	--------------------------------------*/
  if (jQuery("#tg-counters").length > 0) {
    var _tg_counters = jQuery("#tg-counters");
    _tg_counters.appear(function () {
      jQuery(".tg-counter").countTo();
    });
  }
});
