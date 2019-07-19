$(document).ready(function () {


	var fixFullHeight = function(){
		var playerWidth = $('iframe').width();
		$('#players iframe').height(playerWidth / 16*9);
		$('#right_sidebar').height($(window).height());
	}();



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



	$('#enable_pleyer_goodgame').click(function() {
		$('#players iframe').hide();
		$('#player_goodgame').show();

		$('#player_goodgame').attr('src', 'https://goodgame.ru/player?148836');
		$('#player_mixer').attr('src', '');
		$('#player_youtube').attr('src', '');

		fixFullHeight();
	});
	$('#enable_pleyer_mixer').click(function() {
		$('#players iframe').hide();
		$('#player_mixer').show();

		$('#player_mixer').attr('src', 'https://mixer.com/embed/player/i3aldram');
		$('#player_goodgame').attr('src', '');
		$('#player_youtube').attr('src', '');

		fixFullHeight();
	});
	$('#enable_pleyer_youtube').click(function() {
		$('#players iframe').hide();
		$('#player_youtube').show();


		$('#player_youtube').attr('src', 'https://youtube.com/embed/live_stream?channel=UCLDNOUXbiutEIGSWy3d1UiQ');
		$('#player_goodgame').attr('src', '');
		$('#player_mixer').attr('src', '');

		fixFullHeight();
	});





	$('#enable_chat_twitch').click(function() {
		$('#right_sidebar iframe').hide();
		$('#chat_twitch').show();

		fixFullHeight();
	});
	$('#enable_chat_goodgame').click(function() {
		$('#right_sidebar iframe').hide();
		$('#chat_goodgame').attr('src', 'https://goodgame.ru/chat/148836');
		$('#chat_goodgame').show();

		fixFullHeight();
	});
	$('#enable_chat_mixer').click(function() {
		$('#right_sidebar iframe').hide();
		$('#chat_mixer').attr('src', 'https://mixer.com/embed/chat/i3aldram');
		$('#chat_mixer').show();

		fixFullHeight();
	});
	$('#enable_chat_youtube').click(function() {
		$('#right_sidebar iframe').hide();
		$('#chat_youtube').attr('src', 'https://youtube.com/live_chat?is_popout=1&v=-1O2IaTCzqA&embed_domain=i3aldram.github.io');
		$('#chat_youtube').show();

		fixFullHeight();
	});


});