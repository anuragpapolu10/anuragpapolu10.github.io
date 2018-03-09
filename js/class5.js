$(document).ready(function () {
	/*function used in several places to show slide info in photo1*/
	var showInfo = function () {
		$('.circle').addClass('hide_btn'); /*.circle so it closes all circles.*/
		$('#X1-close').addClass('btn_close_show');
		$('#slide').addClass('info_slides_show');
	}

	/*nots info*/
	$('#circle_rednots').click(function () {
		showInfo();
		$('#popIn').text("Notification icons are everywhere, and they're always bright red, because research shows that our eyes are drawn to bright red things." ).addClass('popIn-info');
	});


	/*apps info*/
	$('#circle_redapps').click(function () {
		showInfo();
		$('#popIn').text("It's not just notifications. The colors of app icons are also chosen to stimulate our brains, according to design ethicist Tristan Harris.").addClass('popIn-info');
	});

	/*close info window*/

	$('#X1-close').click(function () {
		$('#X1-close').removeClass('btn_close_show'); /* hide close X*/
		$('#slide').removeClass('info_slides_show'); /*remove info window*/
		/*dont' seem to need to remove popIn-info*/
		$('.circle').removeClass('hide_btn'); /*show circles*/

	}); /*closes function for photo 1*/





	/*Start functions for photo2*/

	var showInfo2 = function () {
		$('.circle').addClass('hide_btn'); /*.circle so it closes all circles.*/
		$('#X2-close').addClass('btn_close_show');
		$('#slide2').addClass('info_slides_show');
	}

	/*human info*/
	$('#circle_human').click(function () {
		showInfo2();
		$('#popIn2').text("Anticipating a reward is shown to stimulate the brain more than actually getting one, says psychologist Susan Weinschenk, and that's the idea behind push notifications.").addClass('popIn-info');
	});


	/*comp info*/
	$('#circle_comp').click(function () {
		showInfo2();
		$('#popIn2').text("Apps of all kinds are trying to sound human, to induce the feeling that a real person is speaking to you. There is no human on the other side.").addClass('popIn-info');
	});

	/*close info window*/

	$('#X2-close').click(function () {
		$('#X2-close').removeClass('btn_close_show'); /* hide close X*/
		$('#slide2').removeClass('info_slides_show'); /*remove info window*/
		/*dont' seem to need to remove popIn-info*/
		$('.circle').removeClass('hide_btn'); /*show circles*/

	});

	/*closes functions for photo2*/





	/*Start functions for photo3*/

	var showInfo3 = function () {
		$('.circle').addClass('hide_btn'); /*.circle so it closes all circles.*/
		$('#X3-close').addClass('btn_close_show');
		$('#slide3').addClass('info_slides_show');
	}

	/*autopplay info*/
	$('#circle_autoplay').click(function () {
		showInfo3();
		$('#popIn3').text('“You get a show or a movie you’re really dying to watch, and you end up staying up late at night, so we actually compete with sleep." —Netflix CEO Reed Hastings.').addClass('popIn-info');
	});


	/*recommended info*/
	$('#circle_recommended').click(function () {
		showInfo3();
		$('#popIn3').text('The Youtube video recommendation algorithm is called "the funnel."').addClass('popIn-info');
	});

	/*close info window*/

	$('#X3-close').click(function () {
		$('#X3-close').removeClass('btn_close_show'); /* hide close X*/
		$('#slide3').removeClass('info_slides_show'); /*remove info window*/
		/*dont' seem to need to remove popIn-info*/
		$('.circle').removeClass('hide_btn'); /*show circles*/

	});

	/*closes functions for photo3*/




		/*Start functions for photo4*/

	var showInfo4 = function () {
		$('.circle').addClass('hide_btn'); /*.circle so it closes all circles.*/
		$('#X4-close').addClass('btn_close_show');
		$('#slide4').addClass('info_slides_show');
	}

	/*autopplay info*/
	$('#circle_device').click(function () {
		showInfo4();
		$('#popIn4').text("As we surround ourselves with technology, whether for work or for fun, we engage with a variable ratio schedule.").addClass('popIn-info');
	});


	/*recommended info*/
	$('#circle_society').click(function () {
		showInfo4();
		$('#popIn4').text("The variable ratio schedule in social media manifests in the form of on screen notifications, message tones, likes and comments.").addClass('popIn-info');
	});

	/*close info window*/

	$('#X4-close').click(function () {
		$('#X4-close').removeClass('btn_close_show'); /* hide close X*/
		$('#slide4').removeClass('info_slides_show'); /*remove info window*/
		/*dont' seem to need to remove popIn-info*/
		$('.circle').removeClass('hide_btn'); /*show circles*/

	});

	/*closes functions for photo4*/

});
