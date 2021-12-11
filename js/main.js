$(document).ready(function() {
    var $round = $('.round'),
        roundRadius = $round.find('circle').attr('r'),
        roundPercent = $round.data('percent'),
        roundCircum = 2 * roundRadius * Math.PI,
        roundDraw = roundPercent * roundCircum / 100
    $round.css('stroke-dasharray', roundDraw  + ' 999');
  });


  function selected(element){
    $(element).bind('click',function(){
      $(element).removeClass('active');
      $(this).addClass('active');
    });
  }

  
  $(document).ready(function () {
      selected("#nav_menu .item");
      selected(".year_item");
  });



  function laoding_princ(elt) {
    $("#Load_container").load(elt);
    console.log(elt);
  }



  // navigation systeme

  $(document).ready(function () {

    $('#btn_home').on( "click", function() {
      laoding_princ('assets/home.html');
    });
    $('#btn_skill').on( "click", function() {
      laoding_princ('assets/experience.html');
    });
    $('#btn_work').on( "click", function() {
      laoding_princ('assets/work.html');
    });
    $('#btn_school').on( "click", function() {
      laoding_princ('assets/education.html');
    });
    $('#btn_contact').on( "click", function() {
      laoding_princ('assets/contact.html');
    });


  });
  