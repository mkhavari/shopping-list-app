$(document).ready(function(){
	$("input").keydown(function(e) {
		if (e.which === 13) {
			var txt2 = $("input:text").val();
			var txt = "<li><span id='check'>&#10004</span> <span id='item'>" + txt2 + "</span> <button id='remove'>X</button></li>";
			$(".list-items").append(txt);
			$("input").val('');
		};
	});
	$("#clear").click(function() {
		$(".list-items").empty();
	});
	$("ul").on('click', '#remove', function(event) {
		$(this).parent().remove();
	});
	$("ul").on('click', '#check', function(event) {
		$(this).siblings("#item").css("text-decoration", "line-through");
		$(this).remove();
	});
});	