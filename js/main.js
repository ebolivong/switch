$('button').on('click', function(e){

	var button = $('button').hasClass('on');
 
 	if ( button == true) {

 		$('button').removeClass('on');

 		$('button').addClass('off');

 		$('body').addClass('dark');
 	}

 	else if ( button == false) {

 		$('button').removeClass('off');
 		$('button').addClass('on');
 		$('body').removeClass('dark');
 		$('body').addclass('light');
 	}

 });

 
