$(document).ready(function(){
  $('ul.dropdown-menu.mega-dropdown-menu').on('click', function(event){
    event.stopPropagation();
  });
});