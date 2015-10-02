$('button').on('click', function(e){

	var button = $('button').hasClass('on');
 
 	if ( button == true) {

 		$('button').removeClass('on');
 		$('button').addClass('off');
 		$('body').addClass('dark');
		$('.status').text("Hey, who turned off the light?");
 	}

 	else if ( button == false) {

 		$('button').removeClass('off');
 		$('button').addClass('on');
 		$('body').removeClass('dark');
 		$('body').addClass('light');
 		$('.status').text("It's so bright in here!");
 	}



 });

 
