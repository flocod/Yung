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

function laoding_work(elt,cb) {
  $(".work_load_container").load(elt,cb);
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




  // script qui charge le code html du carousel
  // dans le page work.html
  $("body").on("click", "#video_gal",function () {

    laoding_work("assets/video_work.html",function(){

      var video_container = $(".video_container");

      video_container.owlCarousel({
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


      $('body').on('click','#video_container_left',function () {
        video_container.trigger("prev.owl.carousel");
      });
      $('body').on('click','#video_container_right',function () {
        video_container.trigger("next.owl.carousel");
      });


    }); 

  });

  $("body").on("click", "#link_gal",function () {

    laoding_work("assets/link_work.html",function(){

      var owl_task_container = $(".owl_task_container");

      owl_task_container.owlCarousel({
        items:1,
        loop: true,
        margin: 10,
        nav: false,
        center:true,
       
      });


      $('body').on('click','#task_btn_left',function () {
        owl_task_container.trigger("prev.owl.carousel");
      });
      $('body').on('click','#task_btn_right',function () {
        owl_task_container.trigger("next.owl.carousel");
      });


    }); 

  });



  });





