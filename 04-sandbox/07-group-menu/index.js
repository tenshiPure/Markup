$(function() {
	$('.group__item:first-child').click(function() {
		if (isClosed()) {
			console.log('here');
			open();
		} else {
			close();
		}
	});
});

function isClosed() {
	return $('.group__item:hidden').size() !== 0;
}

function open() {
	$('.group__item').show();
	$('#group__mark').html('▲');
}

function close() {
	$('.group__item:not(:first-child)').hide();
	$('#group__mark').html('▼');
}
