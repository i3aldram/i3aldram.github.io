$(document).ready(function () {



	var fixFullHeight = function(){
		var playerWidth = $('iframe').width();
		$('#players iframe').height(playerWidth / 16*9);
		$('#right_sidebar').height($(window).height());
	};
	fixFullHeight();



	$.ajax({
		type: "GET",
		url: "https://goodgame.ru/api/getchannelstatus?id=148836",
		dataType: "xml",
		success: function (xml) {
			$xml = $(xml);
			var streamTitle = $xml.find("title").text();
			var streamGame = $xml.find("games").text();
			var streamViewers = $xml.find("viewers").text()*1+1;
			var streamUsersinchat = $xml.find("usersinchat").text();
			$('#title').text('- ' + streamTitle);
			$('#game').text('Игра: ' + streamGame);
			$('#viewers').text('Зрителей: ' + streamViewers);
		}
	});



	$(window).scroll(function() {
		if($(window).scrollTop() + $(window).height() == $(document).height()){
			$('body').css('background-position', 'center 100%');
		} else {
			$('body').css('background-position', 'center 150%');
		}
	});



	$('.button_changePlayer').click(function() {
		var player = $(this).data('player');

		$('#players iframe').hide();
		$('#player_'+player).show();

		$('#player_goodgame').attr('src', '');
		$('#player_mixer').attr('src', '');
		$('#player_youtube').attr('src', '');

		if(player === 'goodgame'){
			$('#player_goodgame').attr('src', 'https://goodgame.ru/player?148836');
		} else if(player === 'mixer') {
			$('#player_mixer').attr('src', 'https://mixer.com/embed/player/i3aldram');
		} else if(player === 'youtube') {
			$('#player_youtube').attr('src', 'https://youtube.com/embed/live_stream?channel=UCLDNOUXbiutEIGSWy3d1UiQ');
		}
		// fixFullHeight();
	});



	$('.button_changeChat').click(function() {
		var chat = $(this).data('chat');
		$('#right_sidebar iframe').hide();
		$('#chat_'+chat).show();
		// fixFullHeight();
	});
	window.onload = function () {
		setTimeout(function(){
			$('#player_mixer').attr('src', 'https://mixer.com/embed/player/i3aldram');
			$('#player_youtube').attr('src', 'https://youtube.com/embed/live_stream?channel=UCLDNOUXbiutEIGSWy3d1UiQ');

			$('#chat_goodgame').attr('src', 'https://goodgame.ru/chat/148836');
			$('#chat_mixer').attr('src', 'https://mixer.com/embed/chat/i3aldram');
			$('#chat_youtube').attr('src', 'https://youtube.com/live_chat?is_popout=1&v=-1O2IaTCzqA&embed_domain=baldram.ru');
		}, 1);
	}



});










