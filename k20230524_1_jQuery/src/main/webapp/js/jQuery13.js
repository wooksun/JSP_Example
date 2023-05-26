$(() => {
	$('.delete').click(function () {
		$(this).parent().slideUp('slow');
	});
	
	$('#view').click(function () {
		$('.pana').slideDown('slow');
	});
});