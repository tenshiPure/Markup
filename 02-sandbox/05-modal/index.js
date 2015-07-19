$(function(){
	$("#modal-open").click(
		function() {
			$(this).blur();

			$("body").append('<div id="modal-overlay"></div>');
			$("#modal-overlay").fadeIn("slow");

			$("#modal-content").fadeIn("slow");

			centering();

			$("#modal-overlay,#modal-close").unbind().click(
				function() {
					$("#modal-content,#modal-overlay").fadeOut("slow", function() {
						$("#modal-overlay").remove();
					});
				}
			);
		}
	);

});

$(window).resize(centering);

function centering() {
	var w = $(window).width();
	var h = $(window).height();

	var cw = $("#modal-content").outerWidth({margin: true});
	var ch = $("#modal-content").outerHeight({margin: true});

	var pxL = ((w - cw) / 2);
	var pxT = ((h - ch) / 2);

	$("#modal-content").css({"left": pxL + "px"});
	$("#modal-content").css({"top": pxT + "px"});
}
