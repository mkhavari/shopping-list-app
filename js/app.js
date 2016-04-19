$(document).ready(function(){
	$("input").keydown(function(e) {
		if (e.which === 13) {
			var txt = "<li><span>&#10004</span>	<button id='remove'>X</button></li>";
			var txt2 = $("input:text").val();
			$(".list-items").append(txt, txt2);
			$("input").val('');
		};
	})
	});
	$("#clear").click(function() {
		$(".list-items").empty();
	});
	$("ul").on('click', '#remove', function(event) {
		$("#remove").parent().remove();
	});
;	