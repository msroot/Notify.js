Notify = function(text, callback, close_callback, style) {

	var time = '10000';
	var $container = $('#notifications');
	var icon = '<i class="fa fa-info-circle "></i>';
 
	if (typeof style == 'undefined' ) style = 'warning'
  
		var html = $('<div class="alert alert-' + style + '  hide">' + icon +  " " + text + '</div>');
  
	$('<a>',{
		text: '×',
		class: 'button close',
		style: 'padding-left: 10px;',
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

	function remove_notice() {
		NotifyX(html)
	}
	var timer =  setInterval(remove_notice, time);

	$(html).hover(function(){
		clearInterval(timer);
	}, function(){
		timer = setInterval(remove_notice, time);
	});
  
  
}

NotifyX = function(element) {
	if (typeof element !== "undefined" ) {
		element.stop().fadeOut("slow").remove();
	} else {
		var last = $('#notifications').children('.alert').last()
		last.stop().fadeOut("slow").remove();
	}
}