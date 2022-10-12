$(document).ready(function(){
  // changes the arrow text from expand to collapse of safety info collapsible
  $('.safety-info button').click(function(){
    if($('#toggle-text').text() == 'Expand'){
      $('#toggle-text').text('Collapse');
    }else{
      $('#toggle-text').text('Expand');
    }
  });

  $('.navbar-toggler').click(function(){
    $('body').toggleClass('page-scroll-disable');
  });
});