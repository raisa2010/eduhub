AOS.init({once: true});

var parallaxElements = $('#featured-list'),
  parallaxQuantity = parallaxElements.length

  $(window).on('scroll', function() {
    window.requestAnimationFrame(function() {

      //Sticky Nav Bar on Scroll
      var navbar = $(".navbar")
      var nav_links = $(".nav-link")
      var header_info_container = $(".header-info-container")
      var scrolled_initial = scrolled;
      var scrolled = $(window).scrollTop()
      var window_height = $(window).height()
      if (scrolled >= 0.03 * window_height) {
        $(".img-responsive").css("transform", "scale(0.8)")
        // navbar.addClass("fixed-top")
        navbar.addClass("sticky-navbar")
        // header_info_container.addClass("header-below-nav")
      } else {
        // navbar.removeClass("fixed-top")
        navbar.removeClass("sticky-navbar")
        // header_info_container.removeClass("header-below-nav")
        $(".img-responsive").css("transform", "scale(1)")
      }

      $(".featured").css("height",
      $("#featured-list").outerHeight() + $("#featured-bg-text").outerHeight())
      $(".parallax-container").css("height", $("#featured-list").outerHeight())

      // Search Animation
      $(".dropdown-item").click(function() {
        event.preventDefault()
        $("#dropdownMenuLink").html(this.text)
      })

      $(".search-input").focus(function() {
        $(".expanding-search-form").css("width", "70%")
      }).blur(function() {
        $(".expanding-search-form").css("width", "55%")
      });

      // Grid
      // console.log($(""))

      // Contact Bg Movement
      // var contact_bg = $('#contact-bg')
      // if ((scrolled + window_height) >= (contact_bg.offset().top + contact_bg.outerHeight())
      //   && scrolled + $(".navbar").outerHeight() <= $("#map").offset().top) {
      //   contact_bg.css({
      //       'transform' : 'translateX('
      //       + (contact_bg.offset().top
      //       + contact_bg.outerHeight()
      //       - scrolled
      //       - window_height
      //       )
      //       + 'px)'
      //   });
      // }
      //
      // // $("#whyEduhub").css("top", 0.3 * $("#featured-list").outerHeight())

      // Parallax Scrolling for Featured
      // var bottom_of_bg = $(".parallax-container").offset().top
      // var bottom_of_list = $("#featured-list").offset().top
      // + $("#featured-list").outerHeight()
      // - 0.78 * $(window).height()
      // var scrolled = $(window).scrollTop()
      // var bg_txt = $("#featured-bg-text")
      //
      // if (scrolled >= bottom_of_bg && scrolled <= bottom_of_list) {
      //   bg_txt.addClass("parallax-scroll")
      // } else {
      //   bg_txt.attr("data-aos", "fade-up")
      //   bg_txt.removeClass("parallax-scroll")
      // }

    })
  })

  // Map Animation
  var mymap = L.map('map').setView([23.790488, 90.403741], 15);
  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoicmFpc2EyMDEwIiwiYSI6ImNqeWpzejFpbjA3N2ozbm43bGx3MnJ0eXEifQ.kSE-XfgHSOxAIzD1GiALEQ', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoicmFpc2EyMDEwIiwiYSI6ImNqeWpzejFpbjA3N2ozbm43bGx3MnJ0eXEifQ.kSE-XfgHSOxAIzD1GiALEQ'
  }).addTo(mymap);
  var marker = L.marker([23.790488, 90.403741], {
  icon: L.icon({
    iconUrl: 'http://cdn.leafletjs.com/leaflet-0.6.4/images/marker-icon.png',
    iconAnchor: [13, 0],
    className: 'blinking'
    })
  }).addTo(mymap);
  L.DomUtil.addClass(marker._icon, "blinking");
  marker.bindPopup("<b>DNS Group</b><br>32nd Floor, House#6<br>Road#8&9, Block-F<br>Banani, Dhaka-1213<br>Bangladesh").openPopup();
