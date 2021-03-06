var OneSignal = window.OneSignal || [];
OneSignal.push(function() {
	OneSignal.init({
		appId: "29944979-08db-4df8-b866-c5e65200fac9",
	});
});

function weather(){
	!function(d,s,id){
			var js,fjs=d.getElementsByTagName(s)[0];
			if(!d.getElementById(id)){js=d.createElement(s);
			js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';
			fjs.parentNode.insertBefore(js,fjs);
		}
	}(document,'script','weatherwidget-io-js');
}

function wroc(){
	const glowna =
	
	'<img src="img/logo.png" /><br />'+
	'<button onclick="aktualnosci();">AKTUALNOŚCI</button>'+
	'<button onclick="mapa();">MAPA</button><br />'+
	'<button onclick="pogoda();">POGODA</button>'+
	'<button onclick="plan();">PLAN</button></a><br />'+
	'<button onclick="info();">INFORMACJE</button>'+
	'<button onclick="niezbednik();">NIEZBĘDNIK</button><br />'+
	'<button onclick="window.open(\'https://docs.google.com/forms/d/e/1FAIpQLSfi1N2KSe0lZbEHP3KUIFZUCkJa9aHrxd8_RBTGWTpY8N1hcg/viewform\');" style="width: 70%; background: #72ad46;">ZAPISZ SIĘ NA GM</button><br />'+
	
	'<img class="logo_bot" src="img/logo_bot.png" alt="GOLGOTA MŁODYCH - błąd logo"/>'+
	
	'<br /><a onclick="window.open(\'http://www.golgotamlodych.pl/\');"><img class="comm" src="img/www.png" /></a>'+
	'<a onclick="window.open(\'https://www.facebook.com/golgotamlodychpl/\');"><img class="comm" src="img/facebook.png" /></a>'+
	'<a onclick="window.open(\'https://www.instagram.com/golgota_mlodych/\');"><img class="comm" src="img/instagram.png" /></a>'+
	'<a onclick="window.open(\'https://www.youtube.com/user/GolgotaMlodych/\');"><img class="comm" src="img/youtube.png" /></a>';
	
	document.getElementById('main').innerHTML = glowna;
}

function info(){
	const info =
	
	'<div id="tlo">'+
		'<span class="title1">KIEDY I GDZIE?</span><br />'+
		'Tegoroczna Golgota Młodych odbywa się w dniach <span class="textGreen">23-27 sierpnia 2018 roku.</span>  '+
		'Hasłem przewodnim będzie <span class="textGreen">„ŹRÓDŁO"</span>, tradycyjnie w Serpelicach nad Bugiem. '+
		'Źródło to początek, przyczyna. '+
		'Na GM będziemy szukać prawdy o naszym sercu i decydować z jakiego zródła czerpiemy. '+
	'</div>'+
	
	'<div id="tlo2">'+
		'<span class="title1">ZRÓDŁO?</span><br />'+
		'<span class="textGreen">Eucharystia jest streszczeniem i podsumowaniem całej naszej wiary. </span>'+
		'Źródło, które chcemy odkrywać na tegorocznej Golgocie Młodych, wypływa ku życiu wiecznemu. '+
		'Tym Źródłem jest Eucharystia, którą Chrystus pozostawił Kościołowi jako największą Tajemnicę Jego Miłości. '+
		'<span class="textGreen">Woda. Słowo. Ciało i Krew. Duch. Jezus Chrystus, który objawia się w Liturgii. </span>'+
	'</div>'+
	
	'<div id="tlo">'+
		'<span class="title1">DLA KOGO?</span><br />'+
		'Na Golgotę Młodych <span class="textGreen">zapraszamy każdego, kto chce podjąć konkretne duchowe zmaganie o swoje życie wieczne.</span> '+
		'Dolna granica wieku na GM to ukończone gimnazjum. Średnia wieku uczestników to ponad 20 lat. '+
		'Górnej granicy wieku nie ma – jeśli dobrze się czujesz wśród młodych ludzi i nie przeszkadzają ci pielgrzymkowe warunki, zapraszamy!'+
	'</div>'+
	
	'<button class="but2" onclick="wroc();">WRÓĆ</button>';
	
	document.getElementById('main').innerHTML = info;
}

function plan(){
	const plan =
	'<div id="tlo">'+
	
		'<ul>'+
			'<li class="title1">23.08 | ZWOŁANIE'+
				'<ul>'+
					'<li>20:00 – Nabożeństwo Rozpoczęcia</li>'+
					
					'<li>21:00 – Przywitanie uczestników i gości ze sceny</li>'+
					
					'<li>22:00 – Zakończenie dnia</li>'+
				'</ul>'+
			'</li>'+

			'<br /><li class="title1">24.08 | SŁOWO'+
				'<ul>'+
					'<li>7:30 – Pobudka i śniadanie</li>'+
					
					'<li>8:30 – Spotkanie na dzień dobry</li>'+
				
					'<li>9:00 – Jutrznia</li>'+
					
					'<li>9:30 – Konferencja</li>'+
					
					'<li>11:00 – Przygotowanie do Eucharystii</li>'+

					'<li>11:30 – Eucharystia</li>'+
					
					'<li>13:00 – Obiad</li>'+

					'<li>15:00 – Droga Krzyżowa</li>'+
					
					'<li>17:30 – Spotkanie w grupach</li>'+
					
					'<li>18:30 – Kolacja</li>'+

					'<li>20:30 – Nabożeństwo Pokutne</li>'+
				'</ul>'+
			'</li>'+

		'<br /><li class="title1">25.08 | OFIARA'+
			'<ul>'+
				'<li>7:30 – Pobudka i śniadanie</li>'+
				
				'<li>8:30 – Spotkanie na dzień dobry</li>'+
				
				'<li>9:00 – Jutrznia</li>'+
				
				'<li>9:30 – Konferencja </li>'+

				'<li>11:00 – Spotkanie </li>'+
				
				'<li>12:00 – Obiad</li>'+
				
				'<li>14:00 – Świadectwo</li>'+
				
				'<li>15:30 – Spotkanie w grupach</li>'+
				
				'<li>17:30 – Kolacja</li>'+
				
				'<li>19:00 – Wprowadzenie do Eucharystii</li>'+

				'<li>20:00 – Eucharystia</li>'+
			'</ul>'+
		'</li>'+

		'<br /><li class="title1">26.08 | UCZTA'+
			'<ul>'+
				'<li>7:30 – Pobudka i śniadanie</li>'+
				
				'<li>8:30 – Spotkanie na dzień dobry</li>'+
				
				'<li>9:00 – Jutrznia</li>'+
				
				'<li>9:30 – Konferencja </li>'+
				
				'<li>10:30 – Przygotowanie do Eucharystii</li>'+

				'<li>11:00 – Eucharystia</li>'+
				
				'<li>12:30 – Obiad</li>'+
				
				'<li>15:00 – Konferencja</li>'+
				
				'<li>16:30 – Spotkanie w grupach</li>'+
				
				'<li>18:00 – Kolacja</li>'+
				
				'<li>20:00 – Nabożeństwo i uwielbienie</li>'+
			'</ul>'+
		'</li>'+

		 '<br /><li class="title1">27.08 – ROZESŁANIE'+
			'<ul>'+
				'<li>8:30 – Pobudka i śniadanie</li>'+
				
				'<li>9:30 – Spotkanie na dzień dobry</li>'+
				
				'<li>10:00 – Eucharystia z Jutrznią</li>'+
			'</ul>'+
		'</li>'+
	'</ul>'+
	
	'</div>'+
	
	'<button class="but2" onclick="wroc();">WRÓĆ</button>';
	
	document.getElementById('main').innerHTML = plan;
}

function pogoda(){
	weather();
	var pogoda =
	'<div class="tlo">'+
	
		'<a class="weatherwidget-io" href="https://forecast7.com/pl/52d2823d05/serpelice/" data-label_1="SERPELICE" data-label_2="Golgota Młodych" data-theme="pure" >SERPELICE Golgota Młodych</a>'+
		
	'</div>'+
	
	'<button class="but2" onclick="wroc();">WRÓĆ</button>';
	
	document.getElementById('main').innerHTML = pogoda;

	__weatherwidget_init();
}

function niezbednik(){
	const niezbednik =
	'<div id="tlo">'+
	'<img class="niezbednik" src="img/niezbednik.jpg" alt="NIEZBĘDNIK - błąd wczytywania obrazu" />'+
	'</div>'+
	'<button class="but2" onclick="wroc();">WRÓĆ</button>';
	
	document.getElementById('main').innerHTML = niezbednik;		
}

function mapa(){
	const mapa =
	'<div id="tlo_mapa">'+
	'<div class="dropdown">'+
	'	<button onclick="myFunction()" class="dropbtn">LEGENDA</button>'+
	'	<div id="myDropdown" class="dropdown-content">'+
	'		<span>'+
	'			1. Kuchnia<br />'+
	'			2. Służby Techniczne<br />'+
	'			3. Medialni<br />'+
	'			4. Służby Liturgiczne<br />'+
	'			5. Punkt Medyczny<br />'+
	'			6. Informacja<br />'+
	'			7. Spowiedź / Adoracja<br />'+
	'			8. GM Cafe<br />'+
	'			9. Misyjne Safari<br />'+
	'			10. Myjki / Prysznice<br />'+
	'			11. Toalety<br />'+
	'			12. Ładowanie Telefonów<br />'+
	'			13. Aniołowie Straże<br />'+
	'			14. GM Shop<br />'+
	'			15. Radio<br />'+
	'			16. Sklep<br />'+
	'			17. Pole Namiotowe<br />'+
	'			18. Parking'+
	'		</span>'+
	'	</div>'+
	'</div>'+
	'<img class="mapa" src="img/mapa.png" alt="MAPA - błąd wczytywania obrazu" />'+
	'</div>'+
	'<button class="but2" onclick="wroc();">WRÓĆ</button>';
	
	document.getElementById('main').innerHTML = mapa;		
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

	var dropdowns = document.getElementsByClassName("dropdown-content");
	var i;
	for (i = 0; i < dropdowns.length; i++) {
	  var openDropdown = dropdowns[i];
	  if (openDropdown.classList.contains('show')) {
		openDropdown.classList.remove('show');
	  }
	}
  }
}