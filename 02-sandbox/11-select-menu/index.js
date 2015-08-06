$(function(){
	$('div.selectbox').each(function(){
		var self = $(this);
		var select = $('a.select',self);
		var pulldown = $('div.pulldown',self);
		var data = $('input:hidden',self);

		var select_value = $('span',select);

		pulldown.hide().children(':last-child').addClass('last-child');

		select.click(function(e){
			$('div.pulldown').hide();
			pulldown.show();

			$(this).addClass('select_focus');

			e.stopPropagation();
			return false;
		});

		$('a',pulldown).click(function(){
			var value = $(this).attr('href').replace('#','');
			var text = $(this).text();

			select_value.text(text);
			data.val(value);

			$('a.selected',pulldown).removeClass('selected');
			$('a.select_focus').removeClass('select_focus');
			$(this).addClass('selected');
			pulldown.hide();

			return false;
		});

		$('body').click(function(){
			$('a.select_focus').removeClass('select_focus');
			$('div.pulldown').hide();
		});
	});
});
