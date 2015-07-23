$(function() {
	$('#layout-tab li').click(function() {
		var index = $('#layout-tab li').index(this);

		$('#layout-content > .layout-tabbed').css('display', 'none');
		$('#layout-content > .layout-tabbed').eq(index).css('display', 'block');

		$('#layout-tab li').removeClass('select');
		$(this).addClass('select');
	});
});
