function mobileMenu () {
	$('.hambarger').on('touchstart click', function(e) {
		e.preventDefault();
		
		var body = $('body'),
				head = $('header'),
				transitionEnd = 'transitionend webkitTransitionEnd otransitionend MSTransitionEnd';

		body.addClass('animating');

		if( body.hasClass('nav-visible') ) {
				body.addClass('right');
		}else{
			body.addClass('left');
		}

		head.on(transitionEnd, function(){
			body
				.removeClass('animating left right')
				.toggleClass('nav-visible');
			head.off(transitionEnd);
		});
	});
};

function counter () {
	var birDate = new Date('May, 7, 1991'),
			curDate = new Date(),
			msCurDate = curDate.getTime(),
			msBirDate = birDate.getTime(),
			totDays = parseInt((msCurDate-msBirDate)/(24*3600*1000));

	$('span.days').html(totDays);
};