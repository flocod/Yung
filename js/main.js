$(document).ready(function() {
    var $round = $('.round'),
        roundRadius = $round.find('circle').attr('r'),
        roundPercent = $round.data('percent'),
        roundCircum = 2 * roundRadius * Math.PI,
        roundDraw = roundPercent * roundCircum / 100
    $round.css('stroke-dasharray', roundDraw  + ' 999');
  });