jQuery(document).ready(function(){
  $('.menu-button').click(function() {
    $(this).toggleClass('expanded');
    $('[role="navigation"]').slideToggle('fast', function() {});
  });
});
