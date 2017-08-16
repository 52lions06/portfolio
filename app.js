'use strict';
//jQuery is required to run this code
$(document).ready(function () {

scaleVideoContainer();

initBannerVideoSize('.video-container .poster img');
initBannerVideoSize('.video-container .filter');
initBannerVideoSize('.video-container video');

$(window).on('resize', function () {
  scaleVideoContainer();
  scaleBannerVideoSize('.video-container .poster img');
  scaleBannerVideoSize('.video-container .filter');
  scaleBannerVideoSize('.video-container video');
});

// });

function scaleVideoContainer() {

  var height = $(window).height() + 5;
  var unitHeight = parseInt(height) + 'px';
  $('.homepage-hero-module').css('height', unitHeight);

}