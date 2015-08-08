$(function() {
	$("#switch-left").click(function() {
		$(".item").animate(
			{left: "-=1000px", right: "+=1000px"},
			{
				duration: "fast",
				easing: "linear",
			}
		);

		var current = parseInt($("#current").val());
		$("#current").val(current + 1);

		if ($("#current").val() == 3) {
			$("#switch-left").prop("disabled", true);
		} else {
			$(".switcher").prop("disabled", false);
		}

	});

	$("#switch-right").click(function() {
		$(".item").animate(
			{left: "+=1000px", right: "-=1000px"},
			{
				duration: "fast",
				easing: "linear",
			}
		);

		var current = parseInt($("#current").val());
		$("#current").val(current - 1);

		if ($("#current").val() == 0) {
			$("#switch-right").prop("disabled", true);
		} else {
			$(".switcher").prop("disabled", false);
		}
	});
});
