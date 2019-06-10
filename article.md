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

<small>Zdroj dat: Platforma pro sociální bydlení, Lumos</small>

<small>Data za obce s rozšířenou působností Aš, Říčany, Sedlčany, Tachov a Vizovice v mapě chybí. Důvodem je XXX.</small>

<small>_Rodiny v bytové nouzi_ zahrnují rodiny v ubytovnách, azylových domech, v nevyhovujících bytech se zásadními nedostatky (nefunkční voda, elektřina, hygienická zařízení, zdraví škodlivé byty), v přelidněných bytech u příbuzných a známých, v improvizovaném bydlení (zahradní domku, stanu, sklepě, garáži, a podobně) nebo bez domova.</small>

<small>Základem datové vrstvy jsou informace úřadů práce o tom, kolik rozdělily dávek v hmotné nouzi: příspěvků na živobytí a doplatků na bydlení. Pro zpřesnění výzkumníci využili jednak anonymizovaná data o klientech největších poskytovatelů sociálních služeb – Armády spásy, Člověka v tísni, Naděje a Slezské diakonie –, jednak data ze sčítání domácností bez domova v Brně a Liberci. Podrobně se sběru dat a metodologii věnují <a href="https://www.ditearodina.cz/images/Zpr%C3%A1va-o-vylou%C4%8Den%C3%AD-z-bydlen%C3%AD-za-rok-2018.pdf">přílohy analýzy</a>.</small>

„Celkem se v závažné bytové nouzi nachází 83 tisíc osob žijících v 54 tisících domácnostech,“ shrnuje čísla [Zpráva o vyloučení z bydlení za rok 2018](https://www.ditearodina.cz/images/Zpr%C3%A1va-o-vylou%C4%8Den%C3%AD-z-bydlen%C3%AD-za-rok-2018.pdf). Analýza je podle jejích autorů první dokument za posledních třicet let, který nabízí takto detailní data o bytové nouzi v Česku.

„Čísla na první pohled můžou vypadat nízká,“ komentuje závěry zprávy ředitel Platformy pro sociální bydlení Vít Lesák. „Je to tím, že nesledujeme ledajakou, ale jen skutečně závažnou bytovou nouzi: rodiny rozstrkané po ubytovnách, azylových domech, v bytech bez základního vybavení nebo bez střechy nad hlavou. Můžu s jistotou říct, že každá domácnost v mapě je v těžké situaci a neobejde se bez pomoci zvnějšku.“

„Někdy se za závažnou bytovou nouzi považuje i to, že za bydlení vydáte víc než 40 procent příjmů. Kdybychom tam přidali i tyhle rodiny, bude to kolem půl milionu lidí,“ dodává Lesák.

Mapa podle Lesáka prozrazuje, že bytová nouze – obvykle spojovaná s chudými regiony – se koncentruje ve městech napříč celou republikou.

„Polovina českých domácností v bytové nouzi žije v pouhých 14 ze dvou stovek obcí s rozšířenou působností,“ upozorňuje. „Jsou to samozřejmě velká města v čele s Prahou, Brnem a Ostravou. Nečekaně vysoko jsou mezi nimi ale také menší centra, třeba Příbram nebo Přerov. U Prahy jsme sbírali data po městských částech, takže víme, že zdaleka nejvíc rodin v nouzi je na Praze 10.“

<h3>Města s nejvíce rodinami v bytové nouzi</h3>

<wide>
<div id="mestaid">
	<table id="mesta" style="width:100%; margin-bottom: 25px"></table>
</div>
</wide>

Naopak na Vysočině, ve východních Čechách nebo na jihu Moravy je rodin bez domova podstatně méně. Mapa bytové nouze se do jisté míry překrývá s interaktivní [mapou kvality života](https://www.irozhlas.cz/zpravy-domov/mapa-kvality-zivota-median-prokop-kscm-spd_1811220600_jab), kterou iROZHLAS.cz publikoval loni v listopadu.

„Rodiny v nouzi jsou častěji ve městech, protože...,“ říká sociolog XXX

## XXX

„Další důležitá zpráva – i když tu z mapy nevyčtete – je ta, že města o rodinách v bytové nouzi obvykle moc neví,“ doplňuje ke zprávě Vít Lesák z Platformy pro sociální bydlení. „Většinou neplatí, že místní samospráva zná situaci ve svých obcích nejlépe.“

„Je to důležité proto, že právě znalost lokálních podmínek se většinou udává jako hlavní důvod, proč by bytovou nouzi měla řešit obec, ta je problému nejblíž. U většiny měst ale tenhle předpoklad neplatí. Samozřejmě jsou výjimky, kde mají bytovou nouzi slušně zmapovanou: kromě Brna taky Liberec, Hradec Králové nebo Přerov,“ doplňuje Lesák.

Největší část ze šestiměsíčního shromažďování dat výzkumníci věnovali právě získávání informací od jednotlivých obcí. Oslovili 25 měst, ve kterých žije nejvíce rodin s dětmi v bytové nouzi. Zajímala je velikost bytového fondu, počet rodin v různých formách bytové nouze a počet bytů, které jim byly přiděleny.

<h3>Bytový fond</h3>

<wide>
<div id="bytyid">
	<table id="byty" style="width:100%; margin-bottom: 25px"></table>
</div>
</wide>

<a id="note1"></a>
<a id="note2"></a>

<small>Zdroj dat: Platforma pro sociální bydlení, Lumos</small>

_<sup>1</sup> V závorce údaje za bytový fond ve správě magistrátu, bez bytů svěřených do správy městským částem._

_<sup>2</sup> Číslo před lomítkem je odhad Platformy pro sociální bydlení, za lomítkem oficiální údaje města._

Poslední dva sloupce ilustrují právě to, že řada obcí nemá o svých klientech příliš dobrý přehled. Číslo před lomítkem v obou sloupcích mluví o odhadu výzkumníků, číslo za ním je oficiální údaj obce. V řadě případů je místo druhého čísla pomlčka – tedy informace, že úřad taková data neeviduje.

Podle publikace Zpráva o vyloučení z bydlení za rok 2018 se rodiny v závažné bytové nouzi k městským bytům dostanou jen vzácně: pokud obec sociální byty vůbec nabízí, jen asi 15 procent z nich získají rodiny v závažné bytové nouzi.

## XXX

Mapa ukazuje také to, že ubytovny a azylové domy se příliš nepřekrývají s rodinami v bytové nouzi.


Zejména obce s vysokou koncentrací osob v bytové nouzi v současnosti zpravidla sahají k neefektivním restriktivním krokům, jako je vyhlášení bezdoplatkové zóny. K listopadu 2018 mělo bezdoplatkové zóny na svém území již 52 obcí. Bezdoplatkové zóny však nevedou ke snížení bytové nouze, ale podle indicií z lokalit pravděpodobně přispívají k nucené migraci těchto osob, ke ztrátě sociálního zázemí a také hrozí, že se k nejohroženějším nedostanou potřebné dávky na bydlení.

Analyzovaná data navíc ukazují silnou regionální nerovnost mezi přístupem nejen samospráv, ale i státní správy. Například při vyplácení dávky MOP na kauci úspěšnost žadatelů osciluje mezi 25 a 90 %. Zavádějící je často nekriticky pozitivní interpretace trendu posledních let, kdy významně klesá počet vyplacených dávek na bydlení. To je samo o sobě nepochybně pravda, ale nelze vyvozovat, že se proto dávky začínají dostávat opravdu jen k těm potřebným ani že přímou měrou dochází ke snižování počtu domácností v bytové nouzi. Naše rozsáhlé šetření ukázalo, že doplatek na bydlení pobírá jen přibližně 60 % rodin a 40 % bezdětných domácností žijících na ubytovnách – tedy z domácností nacházejících se v závažné bytové nouzi.




Zejména jde o 20 tisíc nezletilých dětí, které vyrůstají v 10 tisících rodinách v závažné bytové nouzi. Alarmující je také 70% nárůst počtu domácností s osobami nad 65 let žijících na ubytovnách mezi lety 2015 a 2018.

Do bytové nouze se každoročně dostává přibližně 11 700 domácností.
 Neplatí však, že každý rok se do bytové nouze dostane 11 700 nových domácností. Mnoho domácností se dostává do bytové nouze opakovaně. Například rodiny, které pendlují mezi různými formami nejistého bydlení, či lidé po výkonu trestu, kteří se po propuštění z výkonu trestu dostanou do bytové nouze, opětovně skončí ve vězení a po ukončení výkonu trestu se znovu dostávají do bytové nouze.



## XXX

že počty ubytoven a azylových domů se příliš neprotínají s tím, kolik rodin v oblasti nemá bydlení,“ dodává Lesák. „Jinými slovy, tyhle instituce s řešením bydlení nemají mnoho společného.“

a další pointa je že se to ještě nikdo nepokusil kvalitně zmapovat na úroveň měst, často to byly jen vágní odhady na úroveň celé čr. navíc my to máme i na subkategorie (azyl, ubytovny..). stejně jako u exekucí výrazně líp funguje, když se to takto rozdělí do mapy a lidi se můžou podívat na své město.


