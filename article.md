title: "Interaktivní mapa bytové nouze: Prahu trápí bezdomovectví, Ostravu byty v žalostném stavu"
perex: "Analytici Platformy pro sociální bydlení strávili půlrok shromažďováním dat z ubytoven a azylových domů, údajů o počtu lidí na ulici nebo v zahradních chatkách, ale i skrytějších formách bytové nouze, jako je bydlení v přelidněných bytech. Unikátní data, která dosud v Česku nikdo neshromáždil, si můžete prohlédnout v interaktivní mapě."
coverimg: https://www.irozhlas.cz/sites/default/files/styles/zpravy_snowfall/public/uploader/vlastimil_02_180926-082621_mda.jpg?itok=FXyrfZ4N
coverimg_note: "Ubytovna v Ústí nad Labem. Foto Michaela Danelová, iROZHLAS.cz"
styles: ['https://api.tiles.mapbox.com/mapbox-gl-js/v0.53.1/mapbox-gl.css']
libraries: ['https://api.tiles.mapbox.com/mapbox-gl-js/v0.53.1/mapbox-gl.js', jquery, highcharts, datatables, "https://cdn.datatables.net/plug-ins/1.10.19/sorting/diacritics-sort.js"]
options: []
---

Kde v Česku žije nejvíc rodin v ubytovnách? Do kterých měst se stahují lidé bez domova? Kde na mizerné bydlení nejčastěji doplácí děti?

Odpovědi naznačuje mapa, vytvořená na základě dat [Platformy pro sociální bydlení](https://socialnibydleni.org/) a organizace [Lumos](https://www.wearelumos.org/czechrepublic/).

<wide>
<select id="topic_select">
	<option value="Rodiny v bytové nouzi">Rodiny v bytové nouzi</option>
	<option value="Rodiny v ubytovnách">Rodiny v ubytovnách</option>
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
<div id="scale">
<div id="clr_max">2.25 %</div>
<div id="clr"></div>
<div id="clr_min">0.3 %</div>
</div>
<div id="legend"><b>Vyberte oblast v mapě</b></div>
</wide>

<br>

<div class="b-inline">
<div class="b-inline__wrap">
<div class="b-inline__content">
<div class="text-sm">
<h4>Poznámky k mapě</h4>
<p><b>Rodiny v bytové nouzi</b> zahrnují rodiny v ubytovnách, azylových domech, v nevyhovujících bytech se zásadními nedostatky (nefunkční voda, elektřina, hygienická zařízení, zdraví škodlivé byty), v přelidněných bytech u příbuzných a známých, v improvizovaném bydlení (zahradní domku, stanu, sklepě, garáži, a podobně) nebo bez domova.</p>
<p>Základem datové vrstvy jsou informace úřadů práce o tom, kolik rozdělily dávek v hmotné nouzi: příspěvků na živobytí a doplatků na bydlení. Pro zpřesnění výzkumníci využili jednak anonymizovaná data o klientech největších poskytovatelů sociálních služeb – Armády spásy, Člověka v tísni, Naděje a Slezské diakonie –, jednak data ze sčítání domácností bez domova v Brně a Liberci.</p>
<p>Data jsou kvalifikovaný odhad, přesnější jsou u vyšších hodnot. Podrobně se sběru dat a metodologii věnují <a href="https://www.ditearodina.cz/images/Zpr%C3%A1va-o-vylou%C4%8Den%C3%AD-z-bydlen%C3%AD-za-rok-2018.pdf">přílohy analýzy</a>.</p>
</div></div></div></div>

„Celkem se v závažné bytové nouzi nachází 83 tisíc osob žijících v 54 tisících domácnostech,“ shrnuje čísla [Zpráva o vyloučení z bydlení za rok 2018](https://socialnibydleni.org/wp-content/uploads/2019/04/Zpr%C3%A1va-o-vylou%C4%8Den%C3%AD-z-bydlen%C3%AD-za-rok-2018.pdf). Analýza je podle jejích autorů první dokument, který nabízí takto detailní data o bytové nouzi v Česku.

<right>
<h4>Bytová nouze v číslech</h4>
<ul style="font-size: 13px !important">
	<li>v závažné bytové nouzi se nachází 83 tisíc osob v 54 tisících domácnostech</li>
	<li>z toho je přibližně 20 500 nezletilých dětí</li>
	<li>17 900 domácností žije v ubytovnách, 3 200 v azylových domech, 16 600 bez střechy nad hlavou</li>
	<li>téměř polovina osob bez přístřeší – téměř 8 200 lidí – žije v Praze</li>
	<li>každoročně se do bytové nouze dostane téměř 12 tisíc domácností, některé opakovaně</li>
</ul>
</right>

„Čísla na první pohled můžou vypadat nízká,“ komentuje závěry zprávy ředitel Platformy pro sociální bydlení Vít Lesák. „Je to tím, že nesledujeme ledajakou, ale jen skutečně závažnou bytovou nouzi: rodiny živořící po ubytovnách, azylových domech, v bytech bez základního vybavení nebo bez střechy nad hlavou. Můžu s jistotou říct, že každá domácnost v mapě je v těžké situaci a neobejde se bez pomoci zvnějšku.“

„Někdy se za závažnou bytovou nouzi považuje i to, že za bydlení vydáte víc než 40 procent příjmů a zároveň vám zbude méně než 1,6násobek životního minima. Kdybychom tam přidali i tyhle domácnosti, bude to přes 600 tisíc lidí,“ dodává Lesák.

Mapa podle Lesáka prozrazuje, že bytová nouze – obvykle spojovaná s chudými regiony – se koncentruje ve městech napříč celou republikou.

„Polovina českých domácností v bytové nouzi žije v pouhých 14 ze dvou stovek obcí s rozšířenou působností,“ upozorňuje. „Jsou to samozřejmě velká města v čele s Prahou, Brnem a Ostravou. Nečekaně vysoko jsou mezi nimi ale také menší centra, třeba Příbram nebo Přerov.“

<h3>Města s nejvíce rodinami v bytové nouzi</h3>

<wide>
<div id="mestaid">
	<table id="mesta" class="display" style="width:100%; margin-bottom: 25px"></table>
</div>
</wide>

Naopak na Vysočině, ve východních Čechách nebo na jihu Moravy je rodin bez domova podstatně méně. Mapa bytové nouze se do jisté míry překrývá s interaktivní [mapou kvality života](https://www.irozhlas.cz/zpravy-domov/mapa-kvality-zivota-median-prokop-kscm-spd_1811220600_jab), kterou iROZHLAS.cz publikoval loni v listopadu.

Výzkumníci připouštějí, že v závislosti na metodě výpočtu jsou některá data méně spolehlivá. Například údaj o počtu osob bez přístřeší, který zobrazuje mapa, ve studii označují jako poměrně spolehlivý. Nicméně v Brně, které osoby bez domova [loni zmapovalo](https://www.brno.cz/fileadmin/user_upload/sprava_mesta/magistrat_mesta_brna/KPMB/032018/180328_zprava_bezdomovectvi.pdf), se liší o polovinu: studie Platformy pro sociální bydlení mluví o 245 osobách, čísla brněnské radnice ve stejné kategorii o 509 osobách.

## Brno prošlapalo cestu, teď váhá

Prvním českým městem, které zmapovalo rodiny bez střechy nad hlavou a části z nich nabídlo dlouhodobé bydlení, bylo Brno. Před třemi lety spustilo program [Rapid Re-housing](https://hf.socialnibydleni.org/rapid-re-housing-brno), založeného na v zahraničí etablovaném přístupu [Housing first](https://hf.socialnibydleni.org/z%C3%A1kladn%C3%AD-principy) (česky _Bydlení především_). Mezi zářím 2016 a květnem 2017 Brno pronajalo byty padesáti z 417 rodin bez domova v katastru města. O tom, které to budou, rozhodl los.

Český rozhlas před rokem [zmapoval radosti i problémy nových nájemníků](https://radiozurnal.rozhlas.cz/novy-zacatek-7295630), stejně jako kritiku opozice.

<div class="audiobox">

<!-- audio -->
<div class="b-inline">
  <div class="b-inline__wrap">
    <div class="b-audio-player js-audio">
      <div class="js-out">
        <audio controls="">
          <source src="https://www.irozhlas.cz/sites/default/files/uploader_unmanaged/bytnouze_brno_olga2_190610-135248_cib.mp3" type="audio/mpeg">
          Váš prohlížeč nepodporuje přehrávání audia.
        </audio>
      </div>
      <div class="b-audio-player__controls">
        <a href="#" class="b-audio-player__play play-btn">
          Přehrát
          <span class="icon-svg icon-svg--play ">
    <svg class="icon-svg__svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <use xlink:href="/sites/all/themes/custom/irozhlas/img/bg/icons-svg.svg#icon-play" x="0" y="0" width="100%" height="100%"></use></svg>
  </span>          <span class="icon-svg icon-svg--pause ">
    <svg class="icon-svg__svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <use xlink:href="/sites/all/themes/custom/irozhlas/img/bg/icons-svg.svg#icon-pause" x="0" y="0" width="100%" height="100%"></use></svg>
  </span>        </a>
        <p class="b-audio-player__time">00:00 / 00:00</p>
        <p class="b-audio-player__sound">
          <span class="b-audio-player__mute">
            <span class="icon-svg icon-svg--mute ">
    <svg class="icon-svg__svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <use xlink:href="/sites/all/themes/custom/irozhlas/img/bg/icons-svg.svg#icon-mute" x="0" y="0" width="100%" height="100%"></use></svg>
  </span>          </span>
          <span class="b-audio-player__sound-bar">
            <span class="icon-svg icon-svg--audio-player-dots ">
    <svg class="icon-svg__svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <use xlink:href="/sites/all/themes/custom/irozhlas/img/bg/icons-svg.svg#icon-audio-player-dots" x="0" y="0" width="100%" height="100%"></use></svg>
  </span>            <span class="b-audio-player__sound-progress" style="width: 100%;">
              <span class="icon-svg icon-svg--audio-player-dots ">
    <svg class="icon-svg__svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <use xlink:href="/sites/all/themes/custom/irozhlas/img/bg/icons-svg.svg#icon-audio-player-dots" x="0" y="0" width="100%" height="100%"></use></svg>
  </span>            </span>
          </span>
        </p>
        <div class="b-audio-player__bar">
          <div class="b-audio-player__progress"></div>
        </div>
      </div>
      <p class="b-audio-player__title">
        Na život mezi čtyřmi stěnami si lidé bez domova nezvyknou hned. K ruce mají i sociální pracovnice</p>
    </div>
  </div>
</div>

<!-- audio -->
<div class="b-inline">
  <div class="b-inline__wrap">
    <div class="b-audio-player js-audio">
      <div class="js-out">
        <audio controls="">
          <source src="https://www.irozhlas.cz/sites/default/files/uploader_unmanaged/bytnouze_brno_kerndl_190610-135248_cib.mp3" type="audio/mpeg">
          Váš prohlížeč nepodporuje přehrávání audia.
        </audio>
      </div>
      <div class="b-audio-player__controls">
        <a href="#" class="b-audio-player__play play-btn">
          Přehrát
          <span class="icon-svg icon-svg--play ">
    <svg class="icon-svg__svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <use xlink:href="/sites/all/themes/custom/irozhlas/img/bg/icons-svg.svg#icon-play" x="0" y="0" width="100%" height="100%"></use></svg>
  </span>          <span class="icon-svg icon-svg--pause ">
    <svg class="icon-svg__svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <use xlink:href="/sites/all/themes/custom/irozhlas/img/bg/icons-svg.svg#icon-pause" x="0" y="0" width="100%" height="100%"></use></svg>
  </span>        </a>
        <p class="b-audio-player__time">00:00 / 00:00</p>
        <p class="b-audio-player__sound">
          <span class="b-audio-player__mute">
            <span class="icon-svg icon-svg--mute ">
    <svg class="icon-svg__svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <use xlink:href="/sites/all/themes/custom/irozhlas/img/bg/icons-svg.svg#icon-mute" x="0" y="0" width="100%" height="100%"></use></svg>
  </span>          </span>
          <span class="b-audio-player__sound-bar">
            <span class="icon-svg icon-svg--audio-player-dots ">
    <svg class="icon-svg__svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <use xlink:href="/sites/all/themes/custom/irozhlas/img/bg/icons-svg.svg#icon-audio-player-dots" x="0" y="0" width="100%" height="100%"></use></svg>
  </span>            <span class="b-audio-player__sound-progress" style="width: 100%;">
              <span class="icon-svg icon-svg--audio-player-dots ">
    <svg class="icon-svg__svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <use xlink:href="/sites/all/themes/custom/irozhlas/img/bg/icons-svg.svg#icon-audio-player-dots" x="0" y="0" width="100%" height="100%"></use></svg>
  </span>            </span>
          </span>
        </p>
        <div class="b-audio-player__bar">
          <div class="b-audio-player__progress"></div>
        </div>
      </div>
      <p class="b-audio-player__title">
        Brno chce vymýtit bezdomovectví. Naráží na výtky opozice i obyvatel
      </p>
    </div>
  </div>
</div>

</div>

Brněnská iniciativa získala [ocenění Evropské komise](https://twitter.com/EUinmyRegion/status/917817250266181638) a nejstarší evropskou cenu za sociální inovace [SozialMarie](https://www.sozialmarie.org/assets/media/about-the-award-ceremony-2018-press.pdf). Pro její přijetí v Česku ale byla klíčová [závěrečná zpráva](https://drive.google.com/file/d/1B8WJuQ1PG5k7J6V_EAuU8SQgQhFDY2t5/view) výzkumníků Ostravské univerzity, sepsaná rok po zabydlení padesáti rodin.

Ta program zhodnotila jako jednoznačný úspěch – například původní cíl programu, aby si alespoň 80 procent rodin udrželo bydlení, se podle zprávy podařilo splnit s rezervou. Po dvanácti měsících od nastěhování přišly o byt pouze dvě rodiny. Oproti kontrolní skupině – brněnských rodin bez domova – měli účastníci programu Rapid Re-housing 2× vyšší jistotu bydlení, 4,5× nižší riziko vážného duševního onemocnění matky nebo 3× nižší riziko hospitalizace některého člena rodiny.

Brněnský program inspiroval také Ministerstvo práce a sociálních věcí. Na úspěch zareagovalo titulem Podpora programu Housing first, ve kterém [rozděluje 150 milionů korun](https://www.esfcr.cz/vyzva-108-opz) z evropských dotací. Peníze jsou určené na platy sociálních pracovníků, kteří chudé lidi podporují v zabydlení, udržení bydlení a řešení dalších problémů chudých rodin. O příspěvek můžou žádat radnice nebo pomáhající organizace. Český rozhlas natáčel v pěti městech, které o peníze na sociální bydlení mají zájem.

_(Text pokračuje pod audiem.)_

<div class="audiobox">

<!-- audio -->
<div class="b-inline"><h3>Hodonín</h3>
  <div class="b-inline__wrap">
    <div class="b-audio-player js-audio">
      <div class="js-out">
        <audio controls="">
          <source src="https://www.irozhlas.cz/sites/default/files/uploader_unmanaged/bytnouze_hodonin_190610-171611_cib.mp3" type="audio/mpeg">
          Váš prohlížeč nepodporuje přehrávání audia.
        </audio>
      </div>
      <div class="b-audio-player__controls">
        <a href="#" class="b-audio-player__play play-btn">
          Přehrát
          <span class="icon-svg icon-svg--play ">
    <svg class="icon-svg__svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <use xlink:href="/sites/all/themes/custom/irozhlas/img/bg/icons-svg.svg#icon-play" x="0" y="0" width="100%" height="100%"></use></svg>
  </span>          <span class="icon-svg icon-svg--pause ">
    <svg class="icon-svg__svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <use xlink:href="/sites/all/themes/custom/irozhlas/img/bg/icons-svg.svg#icon-pause" x="0" y="0" width="100%" height="100%"></use></svg>
  </span>        </a>
        <p class="b-audio-player__time">00:00 / 00:00</p>
        <p class="b-audio-player__sound">
          <span class="b-audio-player__mute">
            <span class="icon-svg icon-svg--mute ">
    <svg class="icon-svg__svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <use xlink:href="/sites/all/themes/custom/irozhlas/img/bg/icons-svg.svg#icon-mute" x="0" y="0" width="100%" height="100%"></use></svg>
  </span>          </span>
          <span class="b-audio-player__sound-bar">
            <span class="icon-svg icon-svg--audio-player-dots ">
    <svg class="icon-svg__svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <use xlink:href="/sites/all/themes/custom/irozhlas/img/bg/icons-svg.svg#icon-audio-player-dots" x="0" y="0" width="100%" height="100%"></use></svg>
  </span>            <span class="b-audio-player__sound-progress" style="width: 100%;">
              <span class="icon-svg icon-svg--audio-player-dots ">
    <svg class="icon-svg__svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <use xlink:href="/sites/all/themes/custom/irozhlas/img/bg/icons-svg.svg#icon-audio-player-dots" x="0" y="0" width="100%" height="100%"></use></svg>
  </span>            </span>
          </span>
        </p>
        <div class="b-audio-player__bar">
          <div class="b-audio-player__progress"></div>
        </div>
      </div>
      <p class="b-audio-player__title">
        <strong>Mluví: </strong>Ladislav Ambrozek (KDU-ČSL, místostarosta Hodonína), Alžběta Vrbíčková (terénní sociální pracovnice Hodonína), pan Skupina (nájemník sociálních bytů Hodonína, kterému by pomohlo Housing First). <strong>Natáčela: </strong>Karolína Peřestá.
      </p>
    </div>
  </div>
</div>

<!-- audio -->
<div class="b-inline"><h3>Jihlava</h3>
  <div class="b-inline__wrap">
    <div class="b-audio-player js-audio">
      <div class="js-out">
        <audio controls="">
          <source src="https://www.irozhlas.cz/sites/default/files/uploader_unmanaged/bytnouze_jihlava_190610-135248_cib.mp3" type="audio/mpeg">
          Váš prohlížeč nepodporuje přehrávání audia.
        </audio>
      </div>
      <div class="b-audio-player__controls">
        <a href="#" class="b-audio-player__play play-btn">
          Přehrát
          <span class="icon-svg icon-svg--play ">
    <svg class="icon-svg__svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <use xlink:href="/sites/all/themes/custom/irozhlas/img/bg/icons-svg.svg#icon-play" x="0" y="0" width="100%" height="100%"></use></svg>
  </span>          <span class="icon-svg icon-svg--pause ">
    <svg class="icon-svg__svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <use xlink:href="/sites/all/themes/custom/irozhlas/img/bg/icons-svg.svg#icon-pause" x="0" y="0" width="100%" height="100%"></use></svg>
  </span>        </a>
        <p class="b-audio-player__time">00:00 / 00:00</p>
        <p class="b-audio-player__sound">
          <span class="b-audio-player__mute">
            <span class="icon-svg icon-svg--mute ">
    <svg class="icon-svg__svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <use xlink:href="/sites/all/themes/custom/irozhlas/img/bg/icons-svg.svg#icon-mute" x="0" y="0" width="100%" height="100%"></use></svg>
  </span>          </span>
          <span class="b-audio-player__sound-bar">
            <span class="icon-svg icon-svg--audio-player-dots ">
    <svg class="icon-svg__svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <use xlink:href="/sites/all/themes/custom/irozhlas/img/bg/icons-svg.svg#icon-audio-player-dots" x="0" y="0" width="100%" height="100%"></use></svg>
  </span>            <span class="b-audio-player__sound-progress" style="width: 100%;">
              <span class="icon-svg icon-svg--audio-player-dots ">
    <svg class="icon-svg__svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <use xlink:href="/sites/all/themes/custom/irozhlas/img/bg/icons-svg.svg#icon-audio-player-dots" x="0" y="0" width="100%" height="100%"></use></svg>
  </span>            </span>
          </span>
        </p>
        <div class="b-audio-player__bar">
          <div class="b-audio-player__progress"></div>
        </div>
      </div>
      <p class="b-audio-player__title">
        <strong>Mluví: </strong>Daniel Škarka, radní z uskupení FORUM Jihlava. <strong>Natáčel: </strong>Daniel Zach.
      </p>
    </div>
  </div>
</div>

<!-- audio -->
<div class="b-inline"><h3>Olomouc</h3>
  <div class="b-inline__wrap">
    <div class="b-audio-player js-audio">
      <div class="js-out">
        <audio controls="">
          <source src="https://www.irozhlas.cz/sites/default/files/uploader_unmanaged/bytnouze_olomouc_190610-135248_cib.mp3" type="audio/mpeg">
          Váš prohlížeč nepodporuje přehrávání audia.
        </audio>
      </div>
      <div class="b-audio-player__controls">
        <a href="#" class="b-audio-player__play play-btn">
          Přehrát
          <span class="icon-svg icon-svg--play ">
    <svg class="icon-svg__svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <use xlink:href="/sites/all/themes/custom/irozhlas/img/bg/icons-svg.svg#icon-play" x="0" y="0" width="100%" height="100%"></use></svg>
  </span>          <span class="icon-svg icon-svg--pause ">
    <svg class="icon-svg__svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <use xlink:href="/sites/all/themes/custom/irozhlas/img/bg/icons-svg.svg#icon-pause" x="0" y="0" width="100%" height="100%"></use></svg>
  </span>        </a>
        <p class="b-audio-player__time">00:00 / 00:00</p>
        <p class="b-audio-player__sound">
          <span class="b-audio-player__mute">
            <span class="icon-svg icon-svg--mute ">
    <svg class="icon-svg__svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <use xlink:href="/sites/all/themes/custom/irozhlas/img/bg/icons-svg.svg#icon-mute" x="0" y="0" width="100%" height="100%"></use></svg>
  </span>          </span>
          <span class="b-audio-player__sound-bar">
            <span class="icon-svg icon-svg--audio-player-dots ">
    <svg class="icon-svg__svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <use xlink:href="/sites/all/themes/custom/irozhlas/img/bg/icons-svg.svg#icon-audio-player-dots" x="0" y="0" width="100%" height="100%"></use></svg>
  </span>            <span class="b-audio-player__sound-progress" style="width: 100%;">
              <span class="icon-svg icon-svg--audio-player-dots ">
    <svg class="icon-svg__svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <use xlink:href="/sites/all/themes/custom/irozhlas/img/bg/icons-svg.svg#icon-audio-player-dots" x="0" y="0" width="100%" height="100%"></use></svg>
  </span>            </span>
          </span>
        </p>
        <div class="b-audio-player__bar">
          <div class="b-audio-player__progress"></div>
        </div>
      </div>
      <p class="b-audio-player__title">
        XXX
      </p>
    </div>
  </div>
</div>

<!-- audio -->
<div class="b-inline"><h3>Plzeň</h3>
  <div class="b-inline__wrap">
    <div class="b-audio-player js-audio">
      <div class="js-out">
        <audio controls="">
          <source src="https://www.irozhlas.cz/sites/default/files/uploader_unmanaged/bytnouze_plzen_190610-135248_cib.mp3" type="audio/mpeg">
          Váš prohlížeč nepodporuje přehrávání audia.
        </audio>
      </div>
      <div class="b-audio-player__controls">
        <a href="#" class="b-audio-player__play play-btn">
          Přehrát
          <span class="icon-svg icon-svg--play ">
    <svg class="icon-svg__svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <use xlink:href="/sites/all/themes/custom/irozhlas/img/bg/icons-svg.svg#icon-play" x="0" y="0" width="100%" height="100%"></use></svg>
  </span>          <span class="icon-svg icon-svg--pause ">
    <svg class="icon-svg__svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <use xlink:href="/sites/all/themes/custom/irozhlas/img/bg/icons-svg.svg#icon-pause" x="0" y="0" width="100%" height="100%"></use></svg>
  </span>        </a>
        <p class="b-audio-player__time">00:00 / 00:00</p>
        <p class="b-audio-player__sound">
          <span class="b-audio-player__mute">
            <span class="icon-svg icon-svg--mute ">
    <svg class="icon-svg__svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <use xlink:href="/sites/all/themes/custom/irozhlas/img/bg/icons-svg.svg#icon-mute" x="0" y="0" width="100%" height="100%"></use></svg>
  </span>          </span>
          <span class="b-audio-player__sound-bar">
            <span class="icon-svg icon-svg--audio-player-dots ">
    <svg class="icon-svg__svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <use xlink:href="/sites/all/themes/custom/irozhlas/img/bg/icons-svg.svg#icon-audio-player-dots" x="0" y="0" width="100%" height="100%"></use></svg>
  </span>            <span class="b-audio-player__sound-progress" style="width: 100%;">
              <span class="icon-svg icon-svg--audio-player-dots ">
    <svg class="icon-svg__svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <use xlink:href="/sites/all/themes/custom/irozhlas/img/bg/icons-svg.svg#icon-audio-player-dots" x="0" y="0" width="100%" height="100%"></use></svg>
  </span>            </span>
          </span>
        </p>
        <div class="b-audio-player__bar">
          <div class="b-audio-player__progress"></div>
        </div>
      </div>
      <p class="b-audio-player__title">
        <strong>Mluví: </strong>Martin Keleš (klient azylového domu Naděje), Daniel Svoboda (oblastní ředitel Naděje), Petr Moravec (manažer Ledovce), David Šlouf (ODS, radní Plzně). <strong>Natáčel: </strong>Lukáš Milota.
      </p>
    </div>
  </div>
</div>

<!-- audio -->
<div class="b-inline"><h3>Trutnov</h3>
  <div class="b-inline__wrap">
    <div class="b-audio-player js-audio">
      <div class="js-out">
        <audio controls="">
          <source src="https://www.irozhlas.cz/sites/default/files/uploader_unmanaged/bytnouze_trutnov_190610-135248_cib.mp3" type="audio/mpeg">
          Váš prohlížeč nepodporuje přehrávání audia.
        </audio>
      </div>
      <div class="b-audio-player__controls">
        <a href="#" class="b-audio-player__play play-btn">
          Přehrát
          <span class="icon-svg icon-svg--play ">
    <svg class="icon-svg__svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <use xlink:href="/sites/all/themes/custom/irozhlas/img/bg/icons-svg.svg#icon-play" x="0" y="0" width="100%" height="100%"></use></svg>
  </span>          <span class="icon-svg icon-svg--pause ">
    <svg class="icon-svg__svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <use xlink:href="/sites/all/themes/custom/irozhlas/img/bg/icons-svg.svg#icon-pause" x="0" y="0" width="100%" height="100%"></use></svg>
  </span>        </a>
        <p class="b-audio-player__time">00:00 / 00:00</p>
        <p class="b-audio-player__sound">
          <span class="b-audio-player__mute">
            <span class="icon-svg icon-svg--mute ">
    <svg class="icon-svg__svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <use xlink:href="/sites/all/themes/custom/irozhlas/img/bg/icons-svg.svg#icon-mute" x="0" y="0" width="100%" height="100%"></use></svg>
  </span>          </span>
          <span class="b-audio-player__sound-bar">
            <span class="icon-svg icon-svg--audio-player-dots ">
    <svg class="icon-svg__svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <use xlink:href="/sites/all/themes/custom/irozhlas/img/bg/icons-svg.svg#icon-audio-player-dots" x="0" y="0" width="100%" height="100%"></use></svg>
  </span>            <span class="b-audio-player__sound-progress" style="width: 100%;">
              <span class="icon-svg icon-svg--audio-player-dots ">
    <svg class="icon-svg__svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <use xlink:href="/sites/all/themes/custom/irozhlas/img/bg/icons-svg.svg#icon-audio-player-dots" x="0" y="0" width="100%" height="100%"></use></svg>
  </span>            </span>
          </span>
        </p>
        <div class="b-audio-player__bar">
          <div class="b-audio-player__progress"></div>
        </div>
      </div>
      <p class="b-audio-player__title">
        <strong>Mluví: </strong>Jiří Špelda, ředitel Oblastní charity Trutnov. <strong>Natáčel: </strong>Tomáš Lörincz.
      </p>
    </div>
  </div>
</div>

</div>

V Brně se mezitím rozhořel spor o to, jestli a jak peníze nabízené ministerstvem využít pro pokračování programu. Program Rapid Re-housing byl dítětem hnutí Žít Brno, které ovšem v loňských komunálních volbách propadlo. Nová koalice, vedená ODS, s pozitivním vyzněním zprávy Ostravské univerzity nesouhlasí. Doplnila ji detailním rozpisem nákladů města [(příloha č. 3)](https://www.brno.cz/fileadmin/user_upload/sprava_mesta/magistrat_mesta_brna/ORGO/materialy-zmb/ZMB_Z8-05/MMB2019000000312.pdf), ve které uvádí téměř půlmilionový dluh rodin na nájemném, čtvrtmilionový dluh na platbách za komunální odpad, ale také ušlý zisk radnice oproti běžnému nájemnému. Dohromady vyčísluje náklady města na téměř tři a půl milionu korun.

Po dvou letech od nastěhování rodin se také podstatně zhoršila bilance zachování bydlení. Z původních padesáti dnes zůstává v bytech 46 rodin a šesti dalším kvůli dluhům vystěhování hrozí.

Současné vedení Brna se přesto do výzvy ministerstva přihlásilo. Podle Martina Freunda, bývalého zastupitele za hnutí Žít Brno, zodpovědného za program Rapid Re-housing, je ale žádost radnice o peníze na dvacítku bytů málo ambiciózní.

„Minimum by mělo být osmdesát bytů na dva roky,“ kritizuje radnici. „Myslím si, že i to je relativně kompromis. Město má 29 tisíc bytů. Kdyby prosadilo alespoň těch osmdesát, byl by to signifikantní počet. Teď je to jenom trapné.“

Definitivně má o zapojení do programu rozhodnout brněnské zastupitelstvo v polovině června. Podrobně situaci ve městě, včetně důsledků pro další adepty na účast v ministerském programu Housing first, mapuje pořad Zaostřeno.

<!--[[ZPRAVY_PHOTOGALLERY_PLACEHOLDER:2]]-->

## Města o chudých rodinách nemají přehled

Brněnský příběh je v mnohém výjimečný. Jak vysvětlují autoři celorepublikové analýzy z Platformy pro sociální bydlení, většina ostatních měst takový přehled o svých rodinách v nouzi nemá.

„Další důležitá zpráva – i když tu z mapy nevyčtete – je ta, že města o rodinách v bytové nouzi obvykle moc neví,“ analytik Platformy pro sociální bydlení Jan Snopek. „Většinou neplatí, že místní samospráva zná situaci ve své obci nejlépe.“

„Je to důležité proto, že právě znalost lokálních podmínek se většinou udává jako hlavní důvod, proč by bytovou nouzi měla řešit obec, ta je problému nejblíž. U většiny měst ale tenhle předpoklad neplatí. Samozřejmě jsou výjimky, kde mají bytovou nouzi slušně zmapovanou: kromě Brna taky Liberec, Hradec Králové nebo Přerov,“ doplňuje Snopek.

Největší část ze šestiměsíčního shromažďování dat výzkumníci věnovali právě získávání informací od jednotlivých obcí. Oslovili 25 měst, ve kterých žije nejvíce rodin s dětmi v bytové nouzi. Zajímala je velikost bytového fondu, počet rodin v různých formách bytové nouze a počet bytů, které jim byly přiděleny. Tedy možnosti jednotlivých obcí poskytnout rodinám v nouzi přijatelné bydlení.

<h3>Bytový fond</h3>

<wide>
<div id="bytyid">
	<table id="byty" class="display" style="width:100%; margin-bottom: 25px"></table>
</div>
</wide>

<a id="note"></a>

<small>Zdroj dat: Platforma pro sociální bydlení, Lumos</small>

_<sup>*</sup> Data jsou za byty svěřené do správy městským částem. Magistrát disponuje dalšími 8 130 byty, v roce 2017 přidělil rodinám s dětmi v ubytovnách/azylových domech 10 bytů._

Poslední sloupce ilustrují právě to, že řada obcí nemá o svých klientech příliš dobrý přehled. V řadě případů je místo čísla prázdný prostor – tedy informace, že úřad taková data neeviduje.

Podle publikace Zpráva o vyloučení z bydlení za rok 2018 se rodiny v závažné bytové nouzi k městským bytům dostanou jen vzácně: pokud obec sociální byty vůbec nabízí, jen asi 15 procent z nich získají rodiny v závažné bytové nouzi.

## Bezdoplatkové zóny už zavedlo padesát měst

Mapa prozrazuje také to, že ubytovny a azylové domy se příliš nepřekrývají s regiony, které bytová nouze trápí nejvíc.

„Azylové domy jsou sociální služba, provozují je nejčastěji charity nebo přímo obce, mají lidem pomáhat. Není to sice plnohodnotné bydlení, ale může pomoci v krizové situaci,“ říká Vít Lesák. „Naproti tomu ubytovny pro rodiny, které tam bydlí, žádnou pomocí nejsou, jsou s nimi spojené spíš riziko a problémy.“

Ubytovny jsou úzce propojeny s doplatky na bydlení, které vyplácí úřady práce rodinám s nejnižšími příjmy. Ty často peníze vůbec nespatří – dávky nezřídka putují rovnou k majiteli ubytovny.

„Platíme 12 tisíc za 16 metrů čtverečních,“ říká například jedna z nájemnic ubytovny v Brně na Olomoucké ulici.

Obce proti ubytovnám bojují takzvanými bezdoplatkovými zónami, kde doplatek na bydlení neproplácejí. Analýza Platformy pro sociální bydlení ovšem upozorňuje, že takový krok více problémů vyvolá, než řeší.

„K listopadu 2018 mělo bezdoplatkové zóny na svém území již 52 obcí. Bezdoplatkové zóny však nevedou ke snížení bytové nouze, ale podle indicií z lokalit pravděpodobně přispívají k nucené migraci těchto osob a ke ztrátě sociálního zázemí. Hrozí také, že se k nejohroženějším nedostanou potřebné dávky na bydlení,“ tvrdí autoři publikace.

<wide><div id="doplatky" style="width: 100%; height: 500px"></div></wide>

„Určitě se to dá vysvětlit současným růstem ekonomiky,“ vysvětluje Českému rozhlasu klesající čísla Petr Beck z oddělení nepojistných dávek MPSV. „Je větší nabídka práce a poptávka po ní. Takže lidé tu práci mají. Mají i příjmy. Takže už potom nemusí být tolik závislí na dávkách.“

„Tak to není,“ nesouhlasí výzkumníci. „Řada lidí pokles interpretuje tak, že se dávky konečně dostanou jen k těm potřebným, a zároveň dochází ke snižování počtu domácností v bytové nouzi. Naše šetření ale ukázalo, že doplatek na bydlení pobírá jen přibližně 60 procent rodin a 40 procent bezdětných domácností žijících v ubytovnách – tedy domácností nacházejících se v závažné bytové nouzi.“