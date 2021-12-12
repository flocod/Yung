$(document).ready(function () {
  var $round = $(".round"),
    roundRadius = $round.find("circle").attr("r"),
    roundPercent = $round.data("percent"),
    roundCircum = 2 * roundRadius * Math.PI,
    roundDraw = (roundPercent * roundCircum) / 100;
  $round.css("stroke-dasharray", roundDraw + " 999");
});

function selected(element) {
  $("body").on("click", element, function () {
    $(element).removeClass("active");
    $(this).addClass("active");
  });
}

$(document).ready(function () {
  selected("#nav_menu .item");
  selected(".year_item");
  selected(".work_menu .menu_item_contain .menu_item");
});

function laoding_princ(elt) {
  $("#Load_container").load(elt);
  console.log(elt);
}

function laoding_work(elt) {
  $(".work_load_container").load(elt);
  console.log(elt);
}

// Main navigation systeme

$(document).ready(function () {
  $("#btn_home").on("click", function () {
    laoding_princ("assets/home.html");
  });
  $("#btn_skill").on("click", function () {
    laoding_princ("assets/experience.html");
  });
  $("#btn_work").on("click", function () {
    laoding_princ("assets/work.html");
  });
  $("#btn_school").on("click", function () {
    laoding_princ("assets/education.html");
  });
  $("#btn_contact").on("click", function () {
    laoding_princ("assets/contact.html");
  });
});

// Work page navigation systeme

$(document).ready(function () {
  $("body").on("click", "#img_gal",function () {
    laoding_work("assets/image_work.html");
  });




  $("body").on("click", "#video_gal",function () {
    laoding_work("assets/video_work.html");

    var video_container = $(".video_container");
    video_container.trigger("refresh.owl.carousel");
    $owl.owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 3,
        },
      },
    });


  });



  });





