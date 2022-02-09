// SVG CIRCLE PERCENTAGE FUNCTION...

function circleSvg() {
  var $round = $(".round");
  $round.each(function () {
    (roundRadius = $(this).find("circle").attr("r")),
      (roundPercent = $(this).data("percent")),
      (roundCircum = 2 * roundRadius * Math.PI),
      (roundDraw = (roundPercent * roundCircum) / 100);
    $(this).css("stroke-dasharray", roundDraw + " 999");
  });
}

// function select_work_date(indication){

//     item=$('.experience');
//     item.each(function () {

//       datation= $(this).attr('datation');

//       if(datation==indication || indication=='All'){
//         $(this).removeClass('off_experience');
//       }else{
//         $(this).addClass('off_experience');
//       }

//      });
// }

function select_work_date(indication, cb) {
  chemin = indication + "/index.html";
  $("#work_experience_container").load(chemin, cb);
}

$(document).ready(function () {
  $("body").on("click", ".year_item", function () {
    temp_indication = $(this).find(".text").text();
    select_work_date(temp_indication);
  });
});

$(document).ready(function () {
  circleSvg();
});

function selected(element, cb) {
  $("body").on("click", element, function () {
    $(element).removeClass("active");
    $(this).addClass("active");
  });
}

$(document).ready(function () {
  selected("#nav_menu .item");

  selected(".year_item", function () {});

  selected(".work_menu .menu_item_contain .menu_item");
});

function laoding_princ(elt, cb) {
  $("#Load_container").load(elt, cb);
  console.log(elt);
}

function laoding_work(elt, cb) {
  $(".work_load_container").load(elt, cb);
  console.log(elt);
}

// Main navigation systeme

$(document).ready(function () {
  $("#btn_home").on("click", function () {
    laoding_princ("assets/home.html", function () {
      circleSvg();
    });
  });

  $("#btn_skill").on("click", function () {
    laoding_princ("assets/experience.html", function () {
      circleSvg();
    });
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
  $("body").on("click", "#img_gal", function () {
    laoding_work("assets/image_work.html");
  });

  // script qui charge le code html du carousel
  // dans le page work.html
  $("body").on("click", "#video_gal", function () {
    laoding_work("assets/video_work.html", function () {
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

      $("body").on("click", "#video_container_left", function () {
        video_container.trigger("prev.owl.carousel");
      });
      $("body").on("click", "#video_container_right", function () {
        video_container.trigger("next.owl.carousel");
      });


      video_container.on(
        "initialize.owl.carousel initialized.owl.carousel " +
          "initialize.owl.carousel initialize.owl.carousel " +
          "resize.owl.carousel resized.owl.carousel " +
          "refresh.owl.carousel refreshed.owl.carousel " +
          "update.owl.carousel updated.owl.carousel " +
          "drag.owl.carousel dragged.owl.carousel " +
          "translate.owl.carousel translated.owl.carousel " +
          "to.owl.carousel changed.owl.carousel",
        function (e) {
          i = 0;
          $(".video_container .owl-stage .active").each(function () {
            i++;
            if (i == 2) {
              $(".video_item").removeClass("video_item_Active");
              $(this).find(".video_item").addClass("video_item_Active");
            }
          });
        }
      );

      video_container.trigger("next.owl.carousel");
    });
  });

  $("body").on("click", "#link_gal", function () {
    laoding_work("assets/link_work.html", function () {
      var owl_task_container = $(".owl_task_container");

      owl_task_container.owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        nav: false,
        center: true,
      });

      $("body").on("click", "#task_btn_left", function () {
        owl_task_container.trigger("prev.owl.carousel");
      });
      $("body").on("click", "#task_btn_right", function () {
        owl_task_container.trigger("next.owl.carousel");
      });


      // for mobo img
      $('body').on('click','.task_container', function(event){

        temp_img=$(this).find('.active .img_to_view').attr('src');
        source='full_'+temp_img;
        $('.view_gal_container').toggleClass('view_gal_container_Active');
        $('#display_image').attr('src',source);
    
      });



    });
  });
});

console.log(window.innerHeight);
console.log(window.innerWidth);


$(document).ready(function () {
  
  $('body').on('click','.img_to_view',function(){
    $('.view_gal_container').toggleClass('view_gal_container_Active');
       $('#display_image').attr('src',$(this).attr('src'));
  });

  $('body').on('click','.view_gal_container',function(){
    $(this).toggleClass('view_gal_container_Active')
  });


  


});