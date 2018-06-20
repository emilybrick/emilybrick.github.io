'use strict';

//////////////// Back To Top Button ////////////////
// Show or hide the sticky footer button
$(window).scroll(function() {
  if ($(this).scrollTop() > 200) {
    $('.back-to-top').fadeIn(200);
  } else {
    $('.back-to-top').fadeOut(200);
  }
});
// Animate the scroll to top
$('.back-to-top').click(function(event) {
  event.preventDefault();
  
  $('html, body').animate({scrollTop: 0}, 300);
});


////////////// Back To Top Link //////////////
$(function(){
  $('.back-to-top-link').on('click', function(e){
    e.preventDefault();
    $('html, body').scrollTop(0);
  });
});


//////////////// Squiggle //////////////// 
var _paper = paper;
var Path = _paper.Path;
var Point = _paper.Point;
var offset = 10;
var segments = 20;
var canvas = document.querySelector('.squig');
paper.setup(canvas);
var view = paper.view;
var path = new Path();
path.strokeColor = '#3D83E1';
path.strokeWidth = 2;
path.strokeCap = 'round';
for (var i = 0; i <= segments; i++) {
    var width = view.size.width - offset * 2;
    path.add(new Point(i / segments * width + offset, view.size.height / 2));
}
path.onFrame = function (e) {
    for (var i = 0; i <= segments; i++) {
        var height = view.size.height / 6;
        var sinus = Math.sin(e.time * 2 + i);
        path.segments[i].point.y = sinus * height + view.size.height / 2;
        path.smooth({ type: 'continuous' });
    }
};
paper.view.draw();