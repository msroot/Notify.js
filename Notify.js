Notify = function(text, callback, close_callback, style) {

  var time = '5000';
  var $container = $('#notifications');
  var icon = '<i class="fa fa-info-circle "></i>';
 
  if (typeof style == "undefined" ) style = 'warning'
  
  var html = $('<div class="alert alert-' + style + '  hide">' + icon +  " " + text + '</div>');
  
  $('<a>',{
	  text: '×',
	  class: 'button close',
	  href: '#',
	  click: function(e){
		  e.preventDefault()
		  close_callback && close_callback()
		  NotifyX(html)
	  }
  }).prependTo(html)

  $container.prepend(html)
  html.removeClass('hide').hide().fadeIn('slow')
  
  html.on('click', function () {
	callback && callback()
  	NotifyX(html)
  });

  setTimeout(function () {
    NotifyX($container.children('.alert').first());
  }, time);
}

NotifyX = function(element) {
  if (typeof element !== "undefined" ) {
    element.remove();
  } else {
	  $('#notifications .alert').stop().fadeOut("slow").remove();
  }
}



// Notify("Can't Touch This");
// Notify("Stop! Hammer time", null, null, 'danger');
//
// Notify(
// 	"I told you homeboy (You can't touch this)",
// 	function () { alert("clicked notification")},
// 	function () { alert("clicked x")},
// 	'info'
// );
//
//
// Notify(
// 	"I told you homeboy (You can't touch this)",
// 	function () { alert("clicked notification")},
// 	function () { alert("clicked x")},
// 	'success'
// );
