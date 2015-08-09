$(function() {
	$('.media:first-child').click(function() {
		if (isClosed()) {
			open();
		} else {
			close();
		}
	});
});

function isClosed() {
	return $('.media:hidden').size() !== 0;
}

function open() {
	$('.media').show();
	$('#group__mark').html('▲');
}

function close() {
	$('.media:not(:first-child)').hide();
	$('#group__mark').html('▼');
}
