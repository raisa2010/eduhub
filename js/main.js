AOS.init({once: true});

// Add smooth scrolling to all links in navbar
$(".nav-item, .nav-link").on('click', function(event) {

  var hash = this.hash;
  if (hash) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 1500, function() {
      window.location.hash = hash;
    });
  }
});

// Search Animation
$(".dropdown-item").click(function() {
  event.preventDefault()
  $("#dropdownMenuLink").html(this.text)
})

$(".search-input").focus(function() {
  $(".expanding-search-form").css("width", "70%")
}).blur(function() {
  if ($.trim(this.value).length == 0) {
    $(".expanding-search-form").css("width", "55%")
  }
});

  $(window).on('scroll', function() {
    window.requestAnimationFrame(function() {

      //Sticky Nav Bar on Scroll
      var navbar = $(".navbar")
      var scrolled = $(window).scrollTop()
      var window_height = $(window).height()
      if (scrolled >= 0.03 * window_height) {
        $(".img-responsive").css("transform", "scale(0.8)")
        navbar.addClass("sticky-navbar")
      } else {
        navbar.removeClass("sticky-navbar")
        $(".img-responsive").css("transform", "scale(1)")
      }

      $("#featured").css("height",
      $("#featured-list").outerHeight() + $("#featured-bg-text").outerHeight())
      $(".parallax-container").css("height", $("#featured-list").outerHeight())

      if (scrolled + 0.3 * $(window).height() > $(".featured-heading").offset().top) {
        $(".line").css("height", "180px")
      }
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
