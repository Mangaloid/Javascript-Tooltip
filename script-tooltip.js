$(document).ready(function()
{
  $('.tooltip-pos').each(function(){

    var $this = $(this);
    var id = $this.attr('rel');

    $this.qtip({
      content:{
        text: '<img class="" src="https://mangaloid.id/wp-content/themes/Mangaloid/images/loader.gif" alt="Loading..." />',
        ajax:{
          url: 'https://mangaloid.id/wp-content/themes/Mangaloid/tooltip.php',
          type: 'POST', 
          loading: false,
          data: 'id=' + id
        }
      },
      show: 'mouseover',
      hide: {
        delay: 200,
        fixed: true
      },
      position: {
	target: 'mouse',
        viewport: $(window)
      }
    });
  });
});
