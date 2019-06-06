title: "XXX"
perex: "XXX"
coverimg: https://www.irozhlas.cz/sites/default/files/styles/zpravy_snowfall/public/uploader/vlastimil_02_180926-082621_mda.jpg?itok=FXyrfZ4N
coverimg_note: "Ubytovna v Ústí nad Labem. Foto Michaela Danelová, iROZHLAS.cz"
styles: ['https://api.tiles.mapbox.com/mapbox-gl-js/v0.53.1/mapbox-gl.css']
libraries: ['https://api.tiles.mapbox.com/mapbox-gl-js/v0.53.1/mapbox-gl.js', jquery, datatables, "https://cdn.datatables.net/plug-ins/1.10.19/sorting/diacritics-sort.js"]
options: []
---

Nějaký písmena.

<wide>
<select id="topic_select">
	<option value="Rodiny v bytové nouzi">Rodiny v bytové nouzi</option>
	<option value="Rodiny na ubytovnách">Rodiny na ubytovnách</option>
	<option value="Rodiny v azylových domech">Rodiny v azylových domech</option>
	<option value="Osoby bez přístřeší">Osoby bez přístřeší</option>
</select>
<form action="?" id='frm-geocode'>
	<div class="inputs">
	<input type="text" id="inp-geocode" placeholder="Zadejte obec či adresu...">
	<input type="submit" id="inp-btn" value="Najít">
	</div>
</form>
<div id="map"></div>
<div id="legend"><b>Vyberte oblast v mapě..</b></div>
</wide>

Další písmena po mapě.

<wide>
<div id="byty">
	<table id="tabulkaPref" style="width:100%; margin-bottom: 25px"></table>
</div>
</wide>
