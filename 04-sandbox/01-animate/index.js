$(function() {
	$("#prev").click(function() {
		$(".block").animate(
			{left: "-=110px"},
			{
				duration: "fast",
				easing: "linear",
			}
		);
	});

	$("#next").click(function() {
		$(".block").animate(
			{left: "+=110px"},
			{
				duration: "fast",
				easing: "linear",
			}
		);
	});
});
