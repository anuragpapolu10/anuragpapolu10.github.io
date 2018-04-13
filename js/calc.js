$(document).ready(function () {
	$("input").on("keyup keydown keypress change", function (e) {
		var this_input = $(this),
			this_row = this_input.closest(".item"),
			vhours = parseFloat(this_row.find(".hours").val()),
			vweek = parseFloat(this_row.data("week")),
			vmonth = parseFloat(this_row.data("month")),
			vyear = parseFloat(this_row.data("year")),
			vdecade = parseFloat(this_row.data("decade")),
			// vothertotal = parseFloat(this_row.find(".otherweektotal").val()),
			

		// calculating hours into time spent per week, month, year and decade //
			hrsweek = (vhours * vweek),
			hrsmonth = (vhours * vmonth),
			hrsyear = (vhours * vyear),
			hrsdecade = (vhours * vdecade),
			hrslife = (vhours * vweek);


		// console.log("Quantity", quantity);
		// showing calculations //

		this_row.find(".aweek").find("span").text(hrsweek);
		this_row.find(".amonth").find("span").text(hrsmonth);
		this_row.find(".ayear").find("span").text(hrsyear);
		this_row.find(".adecade").find("span").text(hrsdecade);
		


		var 
			week_total = 0,
			life_total = 0;



		$(".smweektotal").each(function () {
			//do stuff
			var this_week_total = parseFloat($(this).find("span").text());
			week_total = week_total+this_week_total;
		});

		
		$(".otherweektotal").each(function () {
            //do stuff
            var this_life_total = parseFloat($(this).find("span").text());
            life_total = life_total + this_life_total;
        });

		$("#pre_total").find("span").text(week_total);
		$("#post_total").find("span").text(life_total);

	});
});