title: "XXX"
perex: "XXX"
coverimg: https://www.irozhlas.cz/sites/default/files/styles/zpravy_snowfall/public/uploader/vlastimil_02_180926-082621_mda.jpg?itok=FXyrfZ4N
coverimg_note: "Ubytovna v Ústí nad Labem. Foto Michaela Danelová, iROZHLAS.cz"
styles: ['https://api.tiles.mapbox.com/mapbox-gl-js/v0.53.1/mapbox-gl.css']
libraries: ['https://api.tiles.mapbox.com/mapbox-gl-js/v0.53.1/mapbox-gl.js', jquery, datatables, "https://cdn.datatables.net/plug-ins/1.10.19/sorting/diacritics-sort.js"]
options: []
---

Kde v Česku žije nejvíc rodin v ubytovnách? Do kterých měst se stahují bezdomovci? Kde na mizerné bydlení nejčastěji doplácí děti?

Odpovědi naznačuje mapa, vytvořená na základě dat [Platformy pro sociální bydlení](https://socialnibydleni.org/) a [sdružení Lumos](https://www.wearelumos.org/czechrepublic/).

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
<div id="legend"><b>Vyberte oblast v mapě</b></div>
</wide>

<br>

<div class="b-inline">
<div class="b-inline__wrap">
<div class="b-inline__content">
<div class="text-sm">
<h4>Poznámky k mapě</h4>
<p><b>Rodiny v bytové nouzi</b> zahrnují rodiny v ubytovnách, azylových domech, v nevyhovujících bytech se zásadními nedostatky (nefunkční voda, elektřina, hygienická zařízení, zdraví škodlivé byty), v přelidněných bytech u příbuzných a známých, v improvizovaném bydlení (zahradní domku, stanu, sklepě, garáži, a podobně) nebo bez domova.</p>
<p>Základem datové vrstvy jsou informace úřadů práce o tom, kolik rozdělily dávek v hmotné nouzi: příspěvků na živobytí a doplatků na bydlení. Pro zpřesnění výzkumníci využili jednak anonymizovaná data o klientech největších poskytovatelů sociálních služeb – Armády spásy, Člověka v tísni, Naděje a Slezské diakonie –, jednak data ze sčítání domácností bez domova v Brně a Liberci. Podrobně se sběru dat a metodologii věnují <a href="https://www.ditearodina.cz/images/Zpr%C3%A1va-o-vylou%C4%8Den%C3%AD-z-bydlen%C3%AD-za-rok-2018.pdf">přílohy analýzy</a>.</p>
</ul>
</div></div></div></div>

„Celkem se v závažné bytové nouzi nachází 83 tisíc osob žijících v 54 tisících domácnostech,“ shrnuje čísla [Zpráva o vyloučení z bydlení za rok 2018](https://www.ditearodina.cz/images/Zpr%C3%A1va-o-vylou%C4%8Den%C3%AD-z-bydlen%C3%AD-za-rok-2018.pdf). Analýza je podle jejích autorů první dokument za posledních třicet let, který nabízí takto detailní data o bytové nouzi v Česku.

<right>
<h4>Bytová nouze v číslech</h4>
<ul style="font-size: 13px !important">
	<li>v závažné bytové nouzi se nachází 83 tisíc osob v 54 tisících domácnostech</li>
	<li>z toho je přibližně 20 500 nezletilých dětí</li>
	<li>17 900 domácností žije na ubytovnách, 3 200 v azylových domech, 16 600 bez střechy nad hlavou</li>
	<li>téměř polovina osob bez domova – 8 164 – žije v Praze</li>
	<li>každoročně se do bytové nouze dostane téměř 12 tisíc domácností, některé opakovaně</li>
</ul>
</right>

„Čísla na první pohled můžou vypadat nízká,“ komentuje závěry zprávy ředitel Platformy pro sociální bydlení Vít Lesák. „Je to tím, že nesledujeme ledajakou, ale jen skutečně závažnou bytovou nouzi: rodiny rozstrkané po ubytovnách, azylových domech, v bytech bez základního vybavení nebo bez střechy nad hlavou. Můžu s jistotou říct, že každá domácnost v mapě je v těžké situaci a neobejde se bez pomoci zvnějšku.“

„Někdy se za závažnou bytovou nouzi považuje i to, že za bydlení vydáte víc než 40 procent příjmů. Kdybychom tam přidali i tyhle rodiny, bude to kolem půl milionu lidí,“ dodává Lesák.

Mapa podle Lesáka prozrazuje, že bytová nouze – obvykle spojovaná s chudými regiony – se koncentruje ve městech napříč celou republikou.

„Polovina českých domácností v bytové nouzi žije v pouhých 14 ze dvou stovek obcí s rozšířenou působností,“ upozorňuje. „Jsou to samozřejmě velká města v čele s Prahou, Brnem a Ostravou. Nečekaně vysoko jsou mezi nimi ale také menší centra, třeba Příbram nebo Přerov. U Prahy jsme sbírali data po městských částech, takže víme, že zdaleka nejvíc rodin v nouzi je na Praze 10.“

<h3>Města s nejvíce rodinami v bytové nouzi</h3>

<wide>
<div id="mestaid">
	<table id="mesta" class="display" style="width:100%; margin-bottom: 25px"></table>
</div>
</wide>

Naopak na Vysočině, ve východních Čechách nebo na jihu Moravy je rodin bez domova podstatně méně. Mapa bytové nouze se do jisté míry překrývá s interaktivní [mapou kvality života](https://www.irozhlas.cz/zpravy-domov/mapa-kvality-zivota-median-prokop-kscm-spd_1811220600_jab), kterou iROZHLAS.cz publikoval loni v listopadu.

„Rodiny v nouzi jsou častěji ve městech, protože...,“ říká sociolog XXX

## Města o chudých rodinách nemají přehled

„Další důležitá zpráva – i když tu z mapy nevyčtete – je ta, že města o rodinách v bytové nouzi obvykle moc neví,“ doplňuje ke zprávě Vít Lesák z Platformy pro sociální bydlení. „Většinou neplatí, že místní samospráva zná situaci ve svých obcích nejlépe.“

„Je to důležité proto, že právě znalost lokálních podmínek se většinou udává jako hlavní důvod, proč by bytovou nouzi měla řešit obec, ta je problému nejblíž. U většiny měst ale tenhle předpoklad neplatí. Samozřejmě jsou výjimky, kde mají bytovou nouzi slušně zmapovanou: kromě Brna taky Liberec, Hradec Králové nebo Přerov,“ doplňuje Lesák.

Největší část ze šestiměsíčního shromažďování dat výzkumníci věnovali právě získávání informací od jednotlivých obcí. Oslovili 25 měst, ve kterých žije nejvíce rodin s dětmi v bytové nouzi. Zajímala je velikost bytového fondu, počet rodin v různých formách bytové nouze a počet bytů, které jim byly přiděleny. Tedy možnosti jednotlivých obcí poskytnout rodinám v nouzi přijatelné bydlení.

<h3>Bytový fond</h3>

<wide>
<div id="bytyid">
	<table id="byty" class="display" style="width:100%; margin-bottom: 25px"></table>
</div>
</wide>

<a id="note1"></a>
<a id="note2"></a>

<small>Zdroj dat: Platforma pro sociální bydlení, Lumos</small>

_<sup>1</sup> V závorce údaje za bytový fond ve správě magistrátu, bez bytů svěřených do správy městským částem._

_<sup>2</sup> Číslo před lomítkem je odhad Platformy pro sociální bydlení, za lomítkem oficiální údaje města._

Poslední dva sloupce ilustrují právě to, že řada obcí nemá o svých klientech příliš dobrý přehled. Číslo před lomítkem v obou sloupcích mluví o odhadu výzkumníků, číslo za ním je oficiální údaj obce. V řadě případů je místo druhého čísla pomlčka – tedy informace, že úřad taková data neeviduje.

Podle publikace Zpráva o vyloučení z bydlení za rok 2018 se rodiny v závažné bytové nouzi k městským bytům dostanou jen vzácně: pokud obec sociální byty vůbec nabízí, jen asi 15 procent z nich získají rodiny v závažné bytové nouzi.

## Bezdoplatkové zóny už zavedlo padesát měst

Mapa prozrazuje také to, že ubytovny a azylové domy se příliš nepřekrývají s regiony, které bytová nouze trápí nejvíc.

„Azylové domy jsou sociální služba, provozují je charity, mají lidem pomáhat. Není to sice plnohodnotné bydlení, ale aspoň něco,“ říká Vít Lesák. „Naproti tomu ubytovny pro rodiny, které tam bydlí, žádnou pomocí nejsou, je s nimi spojené spíš riziko a problémy.“

Ubytovny jsou úzce propojeny s doplatky na bydlení, které vyplácí úřady práce rodinám s nejnižšími příjmy. Ty často peníze vůbec nespatří – dávky nezřídka putují rovnou k majiteli ubytovny.

„Platím 12k za 15m2,“ říká paní z brněnské ubytovny XXX.

Obce proti ubytovnám bojují takzvanými bezdoplatkovými zónami, kde doplatek na bydlení neproplácejí. Analýza Platformy pro sociální bydlení ovšem upozorňuje, že takový krok více problémů vyvolá, než řeší.

„K listopadu 2018 mělo bezdoplatkové zóny na svém území již 52 obcí. Bezdoplatkové zóny však nevedou ke snížení bytové nouze, ale podle indicií z lokalit pravděpodobně přispívají k nucené migraci těchto osob a ke ztrátě sociálního zázemí. Hrozí také, že se k nejohroženějším nedostanou potřebné dávky na bydlení,“ tvrdí autoři publikace.

„V posledních letech významně klesá počet vyplacených doplatků na bydlení,“ pokračují výzkumníci. „Řada lidí to interpretuje tak, že se dávky konečně dostanou jen k těm potřebným, a zároveň dochází ke snižování počtu domácností v bytové nouzi. Tak to ale není. Naše šetření ukázalo, že doplatek na bydlení pobírá jen přibližně 60 procent rodin a 40 procent bezdětných domácností žijících na ubytovnách – tedy domácností nacházejících se v závažné bytové nouzi.“

<graf suma doplatků na bydlení>

## XXX

Tady napojím brněnskou linku, XXX