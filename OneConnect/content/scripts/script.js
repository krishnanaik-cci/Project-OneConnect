$(document).ready(function(){
  $('.safety-info button').click(function(){
    if($('#toggle-text').text() == 'Expand'){
      $('#toggle-text').text('Collapse');
    }else{
      $('#toggle-text').text('Expand');
    }
  })
});