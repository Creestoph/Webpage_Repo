﻿<template>
  <lesson routeShortVersion="/ulamki-zwykle-short" routeLongVersion="/ulamki-zwykle">
    <lesson-title>Ułamki zwykłe</lesson-title>

    <lesson-intro>
	<p>
		W temacie o dzieleniu poskromiliśmy swoją barbarzyńską naturę i pohamowaliśmy się przed rozłupywaniem kamienia na trzy mniejsze. 
		Ponieważ mamy już więcej doświadczenia, możemy posunąć się do bardziej drastycznych kroków.
	</p>
	</lesson-intro>

    <lesson-chapter><template #title>Łupanie, płatanie i rąbanie</template>
	<p class = "type">
		Intuicje
	</p>

	<p>
		Dotąd cały czas opieraliśmy się na liczbach naturalnych, które przedstawiają wielokrotności jednostki: $1$, $2$, 
		$3$, $4$, … Gdy chcemy 
		zjeść hot-doga, liczby naturalne każą nam zjeść jednego hot-doga, dwa hot-dogi, trzy hot-dogi… Często jednak zmysł oszczędności lub 
		brak miejsca w żołądku nakazuje nam nie zjadać od razu całego hot-doga. Możemy mieć ochotę jedynie na pół bułki z parówką i nikt 
		na świecie nie zabroni nam zostawić drugiej połówki na później. Gdy kupujemy paczkę herbatników, nie musimy zjadać wszystkich 
		pięciu od razu. Możemy zjeść dwa herbatniki z pięciu. Gdy babcia piecze tort, nie musimy zjadać całego od razu. Gdy minotaur w 
		labiryncie dostaje dziecko, nie musi… to chyba zrozumiałe.
	</p>

	<p>
		Istotę przedstawiania części całości oddaje ułamek zwykły. Jeśli Michaś dzieli tort czekoladowy na $8$ kawałków, a następnie 
		zjada $3$ spośród nich, to mówimy, że zjadł $\frac{3}{8}$ tortu. Napis $\frac{3}{8}$ czytamy jako 
		„trzy ósme” – mówi on tyle, że spośród ośmiu części 
		całości wzięliśmy trzy części. Gdy bierzemy dwa herbatniki spośród pięciu w paczce, to 
		<comment text="Właściwie… nie przypominam sobie wspólnego konsumowania herbatników.">zjadamy</comment> 
		$\frac{2}{5}$ („dwie piąte”) paczki. 
		Pół hot-doga to to samo, co $\frac{1}{2}$ („jedna druga”) hot-doga.
	</p>

	<p>
		Ułamki stanowią pewien rodzaj liczb, podobnie jak liczby naturalne. Ułamki nazywamy inaczej 
		<i>liczbami wymiernymi</i>, ponieważ służą do mierzenia ("wymierzania") ilości. 
	</p>

	<div class="example">
		Babcia Teresa ma zamiar upiec dla wnuczka Michasia tort czekoladowy. W zaufanej książce kucharskiej znajduje przepis rozpoczynający się od listy
		potrzebnych składników:

		<ul>
			<li>$2$ tabliczki czekolady</li>
			<li>Jedna kostka masła</li>
			<li>$2$ łyżki kakao</li>
			<li>$\frac{7}{10}$ szklanki mąki</li>
			<li>$\frac{1}{2}$ łyżeczki proszku do pieczenia</li>
			<li>$\frac{1}{4}$ łyżeczki sody oczyszczonej</li>
			<li>Szklanka cukru</li>
			<li>$3$ jajka</li>
			<li>$\frac{3}{10}$ szklanki jogurtu</li>
		</ul>

		Każdy z podpunktów określa, jak dużo poszczególnych składników będzie potrzeba do przygotowania ciasta. Do opisu ilości stosujemy liczby naturalne: 
		$2$ tabliczki czekolady, $1$ kostka masła, $3$ jajka, $1$ szklanka cukru albo liczby ułamkowe: $\frac{7}{10}$ szklanki mąki, $\frac{1}{2}$ łyżeczki proszku do pieczeni,
		$\frac{1}{4}$ łyżeczki sody oczyszczonej, $\frac{3}{10}$ szklanki jogurtu.
	</div>
    </lesson-chapter>

    <lesson-chapter><template #title>Nazewnictwo</template>    
	<p class = "type">
		Intuicje
	</p>

	<p>
		Każdy ułamek zwykły składa się z następujących części: liczby u góry, poziomej kreski po środku i liczby na dole. Liczba u góry 
		to <i>licznik ułamka</i>. Liczba na dole to <i>mianownik ułamka</i>. Pozioma kreska to <i>kreska ułamkowa</i>. 
		<ul>
			<li>W ułamku $\frac{3}{4}$ licznikiem jest $3$, a mianownikiem $4$.</li>
			<li>W ułamku $\frac{123}{67}$ licznikiem jest $123$, a mianownikiem $67$.</li>
			<li>W ułamku $\frac{1}{1}$ licznikiem jest $1$, a mianownikiem $1$.</li>
		</ul>
	</p>

	<p>
		Ułamek, w którym licznik jest mniejszy niż mianownik, to <i>ułamek właściwy</i>. Ułamki właściwe to np. $\frac{3}{8}$, 
		$\frac{2}{5}$, $\frac{1}{2}$. Pozostałe 
		ułamki to <i>ułamki niewłaściwe</i> – np. $\frac{123}{67}$, $\frac{1}{1}$, $\frac{7}{5}$. 
		Ułamek z założenia ma przedstawiać część całości – dlatego „właściwie” ma licznik mniejszy niż mianownik. Ułamek $\frac{7}{5}$ interpretujemy jako 
		$7$ takich cząstek, że $5$ z nich tworzy jedną całość. Na przykład jeśli zjemy $7$ herbatników, a jedna paczka ma ich $5$, to zjedliśmy $\frac{7}{5}$
		paczki.
	</p>

	<p>
		<i>Liczby mieszane</i> składają się z części całkowitej i ułamkowej. Liczbę $3 \frac{1}{2}$ czytamy jako "trzy i jedna druga", oznacza ona 
		liczbę o pół większą niż trzy. Liczby mieszane można zapisywać jako sumę części całkowitej i ułamkowej:
		$$3 \frac{1}{2} = 3 + \frac{1}{2}$$
	</p>
    </lesson-chapter>

    <lesson-chapter><template #title>Ułamek jako zapis dzielenia</template>    
	<p class = "type">
		Intuicje
	</p>

	<p>
		Teraz możemy już w pełni okiełznać istotę dzielenia liczb naturalnych. Jeśli jedna liczba jest podzielna przez drugą, to nie 
		mamy problemu i dostajemy w wyniku dzielenia pulchną i pachnącą liczbę naturalną. Jeśl jenak nie jest podzielna, próbowaliśmy wybrnąć z niezręcznej 
		sytuacji przez użycie reszty z dzielenia. Teraz mamy coś dużo odważniejszego – ułamki. Wróćmy do problemu podzielenia siedmiu kamieni na trzy 
		równe grupy.
	</p>

	<center><img src="./.images/Screenshot_1.png" align="middle"></center>
	
	<p>
		Aby dokonać tego podziału kompletnie, musimy położyć na każdą grupkę dwa kamienie, a jeden, który pozostał, rozłupać na trzy 
		mniejsze i każdą z otrzymanych części rozłożyć na sterty.
	</p>

	<center><img src="./.images/Screenshot_2.png" align="middle"></center>
	
	<p>
		Gdy rozłupujemy kamień na trzy części, dostajemy kawałki, z których każdy jest $\frac{1}{3}$ („jedną trzecią”) kamienia. Ostatecznie w 
		wyniku dzielenia dostajemy dwa i jedną trzecią kamienia. Zapisujemy to tak:
	</p>

	$$
		7:3=2 \frac{1}{3}
	$$

	<p>
		Ponieważ rozłupywanie kamieni jest niezwykle wciągającym zajęciem, po krótkiej praktyce zaczynamy wyobrażać sobie każdy kamień 
		jako rozłupany. Naszym oczom ukazuje się następujący obraz:
	</p>

	<center><img src="./.images/Screenshot_3.png" align="middle"></center>
	
	<p>
		Jeden kamień to właściwie to samo, co trzy części spośród trzech części. W takim razie dwa kamienie to to samo, co sześć małych 
		części kamienia. Gdy dołożymy do tego jeszcze jedną cząstkę, będziemy mieli $7$ fragmentów. Dochodzimy do ciekawego wniosku:
	</p>

	$$
		7:3=  \frac{7}{3}
	$$

	<p>
		Okazuje się, że znak dzielenia ( $:$ ) możemy bez skrupułów zastąpić kreską ułamkową. Postać $7 : 3$ 
		jest dokładnie równoważna 
		postaci $\frac{7}{3}$. Tak samo:
	</p>
	
	<ul>
		<li>$3 : 4 = \frac{3}{4}$</li>
		<li>$6 : 2 = \frac{6}{2}$</li>
		<li>$5 : 5 = \frac{5}{5}$</li>
	</ul>
	
	<p>
		Warto mieć na uwadze, że kreska ułamkowa jest zawsze równoważna znakowi dzielenia. Brnąc dalej w odmęty matematyki, szybko 
		odzwyczaisz się od dwukropka na rzecz kreski ułamkowej.
	</p>

	<p>
		Każdy ułamek niewłaściwy można zapisać w postaci liczby mieszanej. Taką operację nazywa się czasem <i>wyłączaniem całości z ułamka</i>. Przed chwilą 
		doszliśmy do wniosku, że
	</p>

	$$
		\frac{7}{3} = 2 \frac{1}{3}
	$$

	<p>
		Na podobnej zasadzie:
	</p>

	<ul>
		<li>$\frac{7}{5} = 1 \frac{2}{5}$, ponieważ $7 : 5 = 1\ r. 2$</li>
		<li>$\frac{17}{5} = 3 \frac{2}{5}$, ponieważ $17 : 5 = 3\ r. 2$</li>
		<li>$\frac{23}{4} = 5 \frac{3}{4}$, ponieważ $23 : 4 = 5\ r. 3$</li>
	</ul>

	<p>
		Postać liczby mieszanej jest wygodna jako wynik ostateczny wykonywanych działań. Wtedy widać, jak duża właściwie jest ta liczba. Ułamek niewłaściwy 
		jest bardziej wygodną postacią, jeśli wykonywane będa na nim jakiekolwiek operacje.
	</p>
    </lesson-chapter>

    <lesson-chapter><template #title>Rozszerzanie ułamka</template> 
	<p class = "type">
		Intuicje
	</p>

	<p>
		Weźmy ponownie tort czekoladowy babci. Michaś dzieli go na 8 równych kawałków – każdy z nich to $\frac{1}{8}$ tortu.
	</p>

	<center><img src="./.images/Screenshot_4.png" align="middle"></center>
	
	<p>
		Spośród nich zjada trzy kawałki, czyli $\frac{3}{8}$ tortu.
	</p>

	<center><img src="./.images/Screenshot_5.png" align="middle"></center>
	
	<p>
		Rok później babcia znowu piecze tort czekoladowy. Tym razem Michaś postanowił podzielić go na $16$ równych fragmentów. Bez pohamowania wsuwa 
		$6$ takich kawałków.
	</p>

	<center><img src="./.images/Screenshot_6.png" align="middle"></center>
	
	<p>
		Ciężko oprzeć się wrażeniu, że w obydwu przypadkach Michaś zjadł dokładnie taką samą część tortu. Podzielił go na $2$ razy 
		więcej fragmentów, lecz jednocześnie zjadł $2$ razy więcej kawałków. Z przyjemnością ogłaszamy, że
	</p>

	$$
		\frac{3}{8}=\frac{6}{16}
	$$

	<p>
		Analityczny cynizm skłania Michasia do podziału tortu na $24$ fragmenty, czyli $3$ razy więcej niż początkowo. 
		Zaspokajając apetyt, Michaś zjada $3$ razy więcej kawałków, czyli $9$ sztuk.
	</p>

	<center><img src="./.images/Screenshot_7.png" align="middle"></center>
	
	<p>
		Efekt nie jest zaskoczeniem – ponownie zjadł dokładnie taką samą część tortu.
	</p>

	$$
		\frac{3}{8}=\frac{6}{16}=\frac{9}{24}
	$$

	<p>
		Okazuje się, że ułamek możemy bezkarnie przekształcać w taki sposób, że licznik i mianownik mnożymy przez taką samą liczbę. 
		Takie przekształcenie nazywa się <i>rozszerzaniem ułamka</i>. Rozszerzanie może działać też w drugą stronę. Wyobraźmy sobie, 
		że świętując zaliczony sprawdzian z matematyki Michaś pozwala sobie na grzech zjedzenia $4$ kawałków z $8$.
	</p>

	<center><img src="./.images/Screenshot_8.png" align="middle"></center>
	
	<p>
		Gdyby śmiałą ręką pokroić tort na $4$ kawałki i zjeść spośród nich $2$, efekt byłby ten sam.
	</p>

	<center><img src="./.images/Screenshot_9.png" align="middle"></center>
	
	<p>
		Prawdy nie da się ukryć – Michaś bestialsko wszamał połowę tortu.
	</p>

	<center><img src="./.images/Screenshot_10.png" align="middle"></center>
	
	<p>
		W ten sposób udało nam się wykonać uproszczenie:
	</p>

	$$
		\frac{4}{8}=\frac{2}{4}=\frac{1}{2}
	$$

	<p>
		Takie rozszerzanie ułamka, które w istocie doprowadza do prostszej postaci, nazywamy <i>skracaniem ułamka</i>. Skrócić ułamek 
		możemy wtedy, gdy potrafimy znaleźć liczbę, przez którą można podzielić zarówno licznik, jak i mianownik – musimy więc 
		znaleźć wspólny dzielnik licznika i mianownika (większy niż $1$, bo dzielenie przez $1$ nic nie zmienia). 
		Jeśli nie potrafimy znaleźć takiej liczby – czyli $NWD$ licznika i mianownika wynosi $1$ – to ułamek jest w 
		<i>postaci nieskracalnej</i>. Praktycznie postać nieskracalna jest najwygodniejsza do zabawy ułamkiem.
	</p>
    </lesson-chapter>

    <lesson-chapter><template #title>Dodawanie i odejmowanie ułamków</template> 
	<p class = "type">
		Intuicje
	</p>

	<p>
		Ułamki to – bez uprzedzeń – też liczby, więc można na nich wykonywać działania. Możemy ułamki <comment 
		text="A co, myślałeś że zabawy z działaniami się skończyły?">dodawać, odejmować, mnożyć i dzielić</comment>.
	</p> 

	<p>
		Dodawanie ułamków już wykonaliśmy potajemnie podczas rozłupywania kamieni na $3$ części. 
	</p>
	
	<div class="example">
		Pojedynczy fragment to $\frac{1}{3}$ kamienia.
		$$1:3=  \frac{1}{3}$$
		<center><img src="./.images/Screenshot_11.png" align="middle"></center>
	</div>
	<div class="example">
		Dwa fragmenty to $\frac{2}{3}$ kamienia.
		$$\frac{1}{3}+\frac{1}{3}=\frac{2}{3}$$
		<center><img src="./.images/Screenshot_12.png" align="middle"></center>
	</div>
	<div class="example">
		Trzy fragmenty to $\frac{3}{3}$ kamienia, czyli cały jeden kamień.
		$$\frac{1}{3}+\frac{1}{3}+\frac{1}{3}=\frac{3}{3}=1$$
		<center><img src="./.images/Screenshot_13.png" align="middle"></center>
	</div>

	<p>
		Gdy mianowniki dodawanych ułamków są takie same, nie mamy większych problemów – po prostu dodajemy ich liczniki.
	</p>
	
	<div class="example">
		Michaś dzieli tort na $8$ kawałków. Na obiad je $3$ kawałki, a na deser $2$ 
		kawałki. Razem wchłonął $5$ kawałków.
		$$\frac{3}{8}+\frac{2}{8}=\frac{5}{8}$$
		<center><img src="./.images/Screenshot_14.png" align="middle"></center>
	</div>

	<p>
		Ciekawie robi się wtedy, gdy ułamki mają różne mianowniki. Co zrobić, gdy dostaniemy do obliczenia $\frac{1}{3}+\frac{1}{6}$ ? Można 
		usiąść i płakać albo przypomnieć sobie, że dowolny ułamek można rozszerzyć. Gdy licznik i mianownik ułamka $\frac{1}{3}$ pomnożymy 
		przez $2$, dostaniemy $\frac{2}{6}$, a ułamki $\frac{2}{6}$ i $\frac{1}{6}$ potrafimy 
		już dodać.
	</p>

	$$
		\frac{1}{3}+\frac{1}{6}=\frac{2}{6}+\frac{1}{6}=\frac{3}{6}=\frac{1}{2}
	$$
	
	<center><img src="./.images/Screenshot_15.png" align="middle"></center>
	
	<p>		
		Zastosowany trik to <i>sprowadzenie do wspólnego mianownika</i>. Potrafimy dodać dowolne ułamki, jeśli mają takie same mianowniki. A żeby miały 
		te same mianowniki, musimy każdy z nich odpowiednio rozszerzyć. Nasz dylemat jest następujący: patrzymy na dwa mianowniki i 
		zastanawiamy się, przez co pomnożyć jeden i przez co pomnożyć drugi, żeby otrzymać równe liczby. Ten problem to dokładnie 
		poszukiwanie $NWW$ dwóch liczb. Aby dodać $\frac{5}{12}+\frac{7}{18}$, musimy znaleźć $NWW$ liczb $12$ i 
		$18$. Dostajemy $NWW (12, 18) = 36$.
		$$\frac{5}{12}+\frac{7}{18}=\frac{15}{36}+\frac{14}{36}=\frac{29}{36}$$
	</p>
	
			

	<p>
		Prawdopodobnie lenistwo podsunie nam rozwiązanie bardziej brutalne niż szukanie $NWW$. Wystarczy przecież, że rozszerzymy pierwszy 
		ułamek przez mianownik drugiego oraz drugi ułamek przez mianownik pierwszego.
	</p>

	$$
		\frac{5}{12}+\frac{7}{18}=\frac{5 \cdot 18}{12 \cdot 18}+\frac{7 \cdot 12}{18 \cdot 12}=\frac{90}{216}+\frac{84}{216}=\frac{174}{216}=\frac{29 \cdot 6}{36 \cdot 6}=\frac{29}{36}
	$$

	<p>
		Jedyna wada takiego rozwiązania jest taka, że pracujemy na większych liczbach, a wynik końcowy musimy jeszcze skrócić.
	</p>

	<p>
		Odejmowanie ułamków jest w pełni analogiczne do dodawania. Gdy mianowniki są równe, odejmujemy liczniki. Gdy mianowniki są różne, 
		wykonujemy sprowadzenie do wspólnego mianownika.
	</p>
	
	<div class="example">
		Michaś dzieli tort na $8$ kawałków i zjada spośród nich $5$. Stwierdzając, że zjadł za dużo, zwraca światu 
		dwa kawałki. W brzuchu pozostały mu $3$ kawałki.
		$$\frac{5}{8}-\frac{2}{8}=\frac{3}{8}$$
		<center><img src="./.images/Screenshot_16.png" align="middle"></center>
	</div>
    </lesson-chapter>

    <lesson-chapter><template #title>Mnożenie i dzielenie ułamków w wersji łagodnej</template> 
	<p class ="type">
		Intuicje
	</p>

	<p>
		Na dobry początek zajmijmy się mnożeniem ułamka przez liczbę naturalną. Mnożenie to wielokrotne dodawanie – prawidłowość ta dotyczy także ułamków. 
		Dodawanie do siebie pięciokrotnie ułamka $\frac{2}{13}$ daje wynik
	</p>

	$$
		\frac{2}{13}+\frac{2}{13}+\frac{2}{13}+\frac{2}{13}+\frac{2}{13}=\frac{10}{13}
	$$

	<p>
		czyli
	</p>

	$$
		5\cdot\frac{2}{13}=\frac{10}{13}
	$$

	<p>
		Taki sam efekt osiągniemy, mnożąc przez $5$ licznik ułamka $\frac{2}{13}$.
	</p>

	$$
		5\cdot \frac{2}{13}=\frac{5\cdot 2}{13}=\frac{10}{13}
	$$

	<div class="example">
		Pani Grażyna podzieliła marchewkę na $13$ równych plasterków. Następnie $5$ dni z rzędu jadła po 
		$2$ plasterki. W efekcie 
		zgromadziła w żołądku $10$ plasterków marchewki, czyli $\frac{10}{13}$ całej marchwi.
	</div>

	<p>
		Aby pomnożyć ułamek przez liczbę naturalną, wystarczy pomnożyć jego licznik przez tę liczbę.
	</p>

	<ul>
		<li>$\frac{3}{5} \cdot 2 = \frac{3 \cdot 2}{5} = \frac{6}{5}$</li>
		<li>$\frac{5}{8} \cdot 7 = \frac{5 \cdot 7}{8} = \frac{35}{8}$</li>
		<li>$\frac{3}{4} \cdot 2 = \frac{6}{4} = \frac{3}{2}$</li>
	</ul>

	<p>
		Dzielenie ułamka przez liczbę naturalną bywa podobnie proste. Wiemy, że
	</p>

	$$
		5\cdot \frac{2}{13}=\frac{10}{13}
	$$

	<p>
		A skoro dzielenie jest odwrotne do dodawania, to
	</p>

	$$
		\frac{10}{13} :5=\frac{2}{13}
	$$

	<p>
		W niektórych przypadkach dzielenie ułamka przez liczbę naturalną sprowadza się do podzielenia licznika przez tę liczbę. 
		Niestety nie zawsze wszystko idzie zgodnie z planem. Co mamy zrobić w takiej sytuacji?
	</p>

	$$
		\frac{5}{6}:2
	$$ 

	<p>
		Tu dzielenie liczby $5$ przez $2$ sprawia pewne trudności. Ale spójrzmy na sprawę inaczej. 
	</p>
	<p>
		Michaś dobrał się do ciasta czekoladowego, które zostało
		pokrojone na $6$ części, a ktoś uszczknął z niego jeden kawałek, oddając na pastwę Michasia $\frac{5}{6}$ tortu. Michaś postanowił poskromić swój
		apetyt i nie zjadać wszystkiego od razu. Rozważnie postanowił podzielić ciasto na dwa dni. Jednak w jaki sposób może rozplanować podział pięciu kawałków
		na dwa równe posiłki? Zaradny Michaś zabrał się do zadania w taki sposób: wyjął dwa talerzyki i zaczął dzielić każdy kawałek ciasta na pół. Jedną połówkę
		odkłada na pierwszy talerzyk, a drugą na drugi. W ten sposób na każdym talerzyku pozostało $5$ małych kawałków ciasta, spośród których każdy stanowi
		$\frac{1}{12}$ ciasta. W rezultacie:
	</p>

	$$
		\frac{5}{6} : 2 = \frac{5}{12}
	$$

	<p>
		Czyli inaczej
	</p>

	$$
		\frac{5}{6} : 2 = \frac{5}{6 \cdot 2} = \frac{5}{12}
	$$

	<p>
		Jest to bardzo przydatny wniosek. Aby podzielić ułamek przez liczbę naturalną, wystarczy pomnożyć mianownik ułamka przez tę 
		liczbę. Metoda ta zawsze będzie słuszna.
	</p>

	<div class="example">
		Krzysia złapał duży głód, więc zamówił dużą pizzę. Została podzielona na $8$ kawałków. Krzyś zjadł $3$ kawałki i poczuł, że duży głód go opuścił. 
		Stwierdził, że nie da rady zjeść całej reszty, więc pozostałe $\frac{5}{8}$ pizzy postanowił zjeść na spółkę z Maciusiem. Jaką część całej pizzy
		zje Maciuś? Gdyby dostarczona pizza
		była podzielona na dwa razy mniejsze fragmenty, byłoby ich w sumie $16$, a po samotnej konsumpcji Krzysia pozostałoby ich $10$ do podziału. Wtedy 
		każdy dostałby po $5$ małych kawałków, czyli $\frac{5}{16}$ całości 
		$$\frac{5}{8} : 2 = \frac{5}{8 \cdot 2} = \frac{5}{16}$$
	</div>

	<div class="example">
		Eustachy zamierza zjeść parówkę. Ponieważ odczuwa fizyczny wstręt wobec zaokrąglonych końcówek parówki, odkrawa z obydwu 
		stron $\frac{1}{11}$, zostawiając $\frac{9}{11}$ parówki zdatnej do spożycia. Do posiłku przygotował 
		sobie dwie kajzerki. Aby równomiernie rozłożyć spożycie parówki i bułki, na jedną kajzerkę musi przypadać $\frac{9}{11}:2=\frac{9}{22}$ parówki.
		<center><img src="./.images/Screenshot_17.png" align="middle"></center>
	</div>
    </lesson-chapter>

    <lesson-chapter><template #title>Obliczanie ułamka liczby</template>
	<p class ="type">
		Intuicje
	</p>

	<p>
		Jedna szklanka ma pojemność $250 \text{ ml}$. Jest to dość wygodna jednostka kuchenna pozwalająca łatwo odmierzać odpowiednią ilość cieczy. 
		Dwie szklanki pozwalają przechować dwa razy więcej płynu, czyli $2 \cdot 250 \text{ ml}$. Trzy szklanki mają pojemność $3 \cdot 250 \text{ ml}$ itd.
		Wysuwa się tendencja: ilość cieczy, jaką odmierzamy, wynosi
	</p>

	$$
		\text{ilość szklanek} \cdot 250 \text{ ml}
	$$

	<p>
		A co jak napełnimy szklankę do połowy? Wtedy będziemy mieli w niej $125 \text{ ml}$, czyli według powyższej tendencji: $\frac{1}{2} \cdot 250 \text{ ml} = 
		125 \text{ ml}$. Na podobnej zasadzie:
	</p>

	$$
		\begin{alignat*}{3}
		1 \text{ szklanka} &= 1 \cdot 250 \text{ ml} &&= 250 \text{ ml}\\
		2 \text{ szklanki} &= 2 \cdot 250 \text{ ml} &&= 500 \text{ ml}\\
		3 \text{ szklanki} &= 3 \cdot 250 \text{ ml} &&= 750 \text{ ml}\\
		4 \text{ szklanki} &= 4 \cdot 250 \text{ ml} &&= 1000 \text{ ml}\\
		\\
		\frac{1}{2} \text{ szklanki} &= \frac{1}{2} \cdot 250 \text{ ml} &&= 125 \text{ ml}\\
		\frac{1}{5} \text{ szklanki} &= \frac{1}{5} \cdot 250 \text{ ml} &&= 50 \text{ ml}\\
		\frac{1}{10} \text{ szklanki} &= \frac{1}{10} \cdot 250 \text{ ml} &&= 25 \text{ ml}\\
		\frac{1}{25} \text{ szklanki} &= \frac{1}{25} \cdot 250 \text{ ml} &&= 10 \text{ ml}
		\end{alignat*}
	$$

	<p>
		W matematyce branie "ułamka czegoś" jest równoznaczne z mnożeniem czegoś przez ułamek. Jeśli upieczony tort waży $3 \text{ kg}$, to jedna trzecia tortu waży
		$\frac{1}{3} \cdot 3 \text{ kg} = 1 \text{ kg}$. Jeśli roczna pensja pana janusza wynosi $36\ 000 \text{ zł}$, to miesięczna pensja wynosi 
		$\frac{1}{12} \cdot 36\ 000 \text{ zł} = 3\ 000 \text{ zł}$. Jeśli Michaś ma $10 \text{ lat}$, to połowa Michasia ma $5 \text{ lat}$. Czy jakoś tak.
		Warto przestawić się na ten typ myślenia, gdy widzimy mnożenie jakiejś liczby przez ułamek. Jest to inaczej "branie ułamka tej liczby".
	</p>

	<p>
		Skoro tak, to zauważmy, że $250 \text{ ml}$ to inaczej $\frac{1}{4}$ litra, bo $1 \text{ l}$ = $1000 \text{ ml}$. W takim razie powyższe notatki 
		możemy zreformować:
	</p>

	
	$$
		\begin{alignat*}{3}
		1 \text{ szklanka} &= 1 \cdot \frac{1}{4} \text{ l} &&= \frac{1}{4} \text{ l}\\
		2 \text{ szklanki} &= 2 \cdot \frac{1}{4} \text{ l} &&= \frac{2}{4} \text{ l}\\
		3 \text{ szklanki} &= 3 \cdot \frac{1}{4} \text{ l} &&= \frac{3}{4} \text{ l}\\
		4 \text{ szklanki} &= 4 \cdot \frac{1}{4} \text{ l} &&= \frac{4}{4} \text{ l}\\
		\\
		\frac{1}{2} \text{ szklanki} &= \frac{1}{2} \cdot \frac{1}{4} \text{ l} &&= \frac{1}{8} \text{ l}\\
		\frac{1}{5} \text{ szklanki} &= \frac{1}{5} \cdot \frac{1}{4} \text{ l} &&= \frac{1}{20} \text{ l}\\
		\frac{1}{10} \text{ szklanki} &= \frac{1}{10} \cdot \frac{1}{4} \text{ l} &&= \frac{1}{40} \text{ l}\\
		\frac{1}{25} \text{ szklanki} &= \frac{1}{25} \cdot \frac{1}{4} \text{ l} &&= \frac{1}{100} \text{ l}
		\end{alignat*}
	$$

	<p>
		Teraz pomnożenie dwóch ułamków nie powinno być nam straszne.
	</p>
    </lesson-chapter>

    <lesson-chapter><template #title>Mnożenie i dzielenie ułamków w wersji ostrej</template>
	<p class ="type">
		Intuicje
	</p>

	<p>
		Przysiądźmy nad następującym iloczynem:
	</p>

	$$
		\frac{5}{6} \cdot \frac{2}{3}
	$$

	<p>
		Idąc za morałem przypowieści o szklance, mnożenie liczby przez ułamek to inaczej "branie ułamka" tej liczby. W takim razie interesuje nas wyliczenie
		dwóch trzecich liczby $\frac{5}{6}$. Niniejszym przedstawiamy $\frac{5}{6}$: 
	</p>
	
	<center><img src="./.images/Screenshot_18.png" align="middle"></center>

	<p>
		Chcemy tę liczbę podzielić na trzy równe części, a następnie wziąć dwie takie cząstki. 
	</p>
	
	<center><img src="./.images/Screenshot_19.png" align="middle"></center>

	<p>
		Nic prostszego.
		Po podziale liczby $\frac{5}{6}$ na trzy części dostajemy 
		$$\frac{5}{6} : 3 = \frac{5}{6 \cdot 3} = \frac{5}{18}$$ 
		Zaś biorąc dwie takie części, mamy
		$$\frac{5}{18} \cdot 2 = \frac{5 \cdot 2}{18} = \frac{10}{18}$$ 
		Czyli po skróceniu $\frac{5}{9}$. 
	</p>

	<center><img src="./.images/Screenshot_20.png" align="middle"></center>

	<p>
		Okazuje się, że mnożenie dwóch ułamków jest bardzo proste. Aby obliczyć ich iloczyn, mnożymy ich liczniki oraz mianowniki:
	</p>

	$$
		\frac{5}{6} \cdot \frac{2}{3} = \frac{5 \cdot 2}{6 \cdot 3} = \frac{10}{18}
	$$

	<div class = "example">
		Wartość $\frac{3}{7} \cdot \frac{5}{2}$ to naczej trzy siódme liczby $\frac{5}{2}$. Podzielenie jej na $7$ części spowoduje pomnożenie przez $7$ jej mianownika. 
		Wzięcie trzech takich fragmentów to nic innego niż pomnożenie przez $3$ jej licznika:

		$$\frac{3}{7} \cdot \frac{5}{2} = \frac{3 \cdot 5}{7 \cdot 2} = \frac{15}{14}$$
	</div>

	<div class="example">
		Iloczyn $\frac{2}{5} \cdot \frac{9}{4}$ oznacza podzielenie liczby $\frac{9}{4}$ na pięć równych części, spośród których bierzemy dwie. Oczywiście
		równie dobrze można powiedzieć, że jest to podzielenie liczby $\frac{2}{5}$ na czworo, a następnie wzięcie dziewięciokrotności wyniku.

		$$\frac{2}{5} \cdot \frac{9}{4} = \frac{2 \cdot 9}{5 \cdot 4} = \frac{18}{20} = \frac{9}{10}$$
	</div>
	
	<p>
		Zastanówmy się teraz, co oznacza dzielenie dwóch ułamków, weźmy na stół
	</p>

	$$
		\frac{3}{4} : \frac{1}{4}
	$$
	
	<p>
		W kontekście liczb naturalnych nasze rozumienie istoty dzielenia sprowadzało się do równego podziału materiału na określoną liczbę fragmentów. 
		Dzielenie przez $2$ oznaczało podział na $2$ równe grupki, dzielenie przez $3$ podział na $3$ części itd. W takim ujęciu dzielenie przez 
		$\frac{1}{4}$ nie ma żadnego sensu. Ale spójrzmy na sprawę od drugiej strony. W dzbanku mieści się pewna ilość napoju, którą rozlewamy do 
		szklanek o pojemności $250 \text{ ml}$. Zastanawiamy się, do ilu szklanek damy radę rozlać całą zawartość dzbanka. Jeśli w dzbanku jest 
		$500 \text{ ml}$ napoju, to zapełnimy nim dwie szklanki. Jeśli w dzbanku mamy $750 \text{ ml}$ napoju, to uda się go rozlać do trzech szklanek. 
		Jeśli w dzbanku jest zaledwie $125 \text{ ml}$, to jego zawartość zapełni jedynie połowę szklanki.
		W ten sposób w istocie "rozdzielamy" zawartość dzbanka na jednostki o mierze $250 \text{ ml}$:
	</p>

	$$
		\begin{align}
		250 \text{ ml} : 250 \text{ ml} &= 1\\
		500 \text{ ml} : 250 \text{ ml} &= 2\\
		750 \text{ ml} : 250 \text{ ml} &= 3\\
		1000 \text{ ml} : 250 \text{ ml} &= 4\\
		\\
		50 \text{ ml} : 250 \text{ ml} &= \frac{1}{5}\\
		125 \text{ ml} : 250 \text{ ml} &= \frac{1}{2}\\
		375 \text{ ml} : 250 \text{ ml} &= 1 \frac{1}{2}\\
		\end{align}
	$$

	<p>
		Teraz wiedząc, że $250 \text{ ml}$ to w istocie $\frac{1}{4} \text{ l}$, dokonujemy odkrycia:
	</p>

	$$
		\begin{align}
		\frac{1}{4} \text{ litra} : \frac{1}{4} \text{ litra} &= 1\\
		\frac{2}{4} \text{ litra} : \frac{1}{4} \text{ litra} &= 2\\
		\frac{3}{4} \text{ litra} : \frac{1}{4} \text{ litra} &= 3\\
		\frac{4}{4} \text{ litra} : \frac{1}{4} \text{ litra} &= 4\\
		\\
		\frac{1}{20} \text{ litra} : \frac{1}{4} \text{ litra} &= \frac{1}{5}\\
		\frac{1}{8} \text{ litra} : \frac{1}{4} \text{ litra} &= \frac{1}{2}\\
		\frac{3}{8} \text{ litra} : \frac{1}{4} \text{ litra} &= \frac{3}{2}\\
		\end{align}
	$$

	<p>
		Skąd również odpowiedź na nasze pytanie:
	</p>

	$$
		\frac{3}{4} : \frac{1}{4} = 3
	$$

	<p>
		Gdy dzielimy pewną liczbę przez ułamek, zadajemy pytanie: ile razy ułamek mieści się w tej liczbie? Odpowiedź na nie jest raczej prosta, jeśli 
		dzielimy przez siebie ułamki o równych mianownikach:
	</p>

	<ul>
		<li>$\frac{4}{20} : \frac{2}{20} = 4 : 2 = 2$</li>
		<li>$\frac{15}{23} : \frac{3}{23} = 15 : 3 = 5$</li>
		<li>$\frac{5}{3} : \frac{4}{3} = 5 : 4 = \frac{5}{4}$</li>
	</ul>

	<p>
		A jeśli mianowniki nie są równe, zawsze możemy dokonać ich sprowadzenia do wspólnego mianownika. Aby podzielić $\frac{3}{7} : \frac{2}{5}$, 
		dokonujemy rozszerzenia obydwu ułamków: 
		$$\frac{3 \cdot 5}{7 \cdot 5} : \frac{7 \cdot 2}{7 \cdot 5} = \frac{3 \cdot 5}{35} : \frac{7 \cdot 2}{35}$$
		co sprowadza się do podzielenia przez siebie liczników: $(3 \cdot 5) : (7 \cdot 2) = \frac{3 \cdot 5}{7 \cdot 2}$. Dotarliśmy do bardzo
		ciekawego i nieoczywistego wniosku:
	</p>

	$$\frac{3}{7} : \frac{2}{5} = \frac{3 \cdot 5}{7 \cdot 2}$$

	<p>
		Aby podzielić przez siebie dwa ułamki, mnożymy licznik pierwszego przez mianownik drugiego oraz mianownik pierwszego przez licznik drugiego. 
		Co więcej, taki sam wynik otrzymalibyśmy, wykonując mnożenie:
	</p>

	$$
		\frac{3}{7} \cdot \frac{5}{2} = \frac{3 \cdot 5}{7 \cdot 2}
	$$

	<p>
		Wynika z tego, że
	</p>
	
	$$\frac{3}{7} : \frac{2}{5} = \frac{3}{7} \cdot \frac{5}{2}$$

	<p>
		Dzielenie ułamków zawsze możemy zastąpić mnożeniem – ułamek, przez który dzielimy, musimy „odwrócić”, czyli zamienić licznik z 
		mianownikiem miejscami. 
	</p>

	<p>
		Gdy weźmiemy jakiś ułamek i zamienimy licznik z mianownikiem, to otrzymamy jego <i>odwrotność</i> lub inaczej <i>liczbę odwrotną</i>. 
	</p>
	<ul>
		<li>Liczba odwrotna do $\frac{5}{7}$ to $\frac{7}{5}$.</li>
		<li>Liczbę $2$ można przedstawić jako $\frac{2}{1}$. W takim razie odwrotnością dwójki jest 
		$\frac{1}{2}$.</li>
		<li>$0$ nie ma swojej odwrotności. Gdyby ta odwrotność istniała, miałaby postać $\frac{1}{0}$, a niestety przez $0$ dzielić nie można.</li>
	</ul>

	<p>
		Nasze rozważania prowadzą do ogólniejszej reguły: dzielenie to mnożenie przez odwrotność.
	</p>

	<div class="example">
		Aby podzielić $\frac{11}{12}:\frac{5}{2}$, zamieniamy $\frac{5}{2}$ na odwrotność i mnożymy: 
		$$\frac{11}{12}:\frac{5}{2}=\frac{11}{12}\cdot\frac{2}{5}=\frac{22}{60}=\frac{11}{30}$$
	</div>

	<div class="example">
		Aby podzielić $\frac{6}{7}:4$, bierzemy liczbę odwrotną do $4$ i mnożymy:
		$$\frac{6}{7}:4=\frac{6}{7}\cdot\frac{1}{4}=\frac{6}{28}=\frac{3}{14}$$
	</div>

	<div class="example">
		Aby podzielić $2 : 3$, zamieniamy $2$ na $\frac{2}{1}$, liczbę $3$
		odwracamy i mnożymy: $$2:3=\frac{2}{1}\cdot \frac{1}{3}=\frac{2}{3}$$
	</div>


	<p>
		Zaszliśmy naprawdę daleko. Możemy brać części, części z częściami i części z części.
	</p>
	
	<div class="example">
		Al Habib kroczy przez pustynię z pełnym bukłakiem wody. Pierwszego dnia wypił $\frac{1}{3}$ zawartości butelki, więc zostało 
		$\frac{2}{3}$ zawartości. Drugiego dnia słońce przypiekło mocniej, więc Al Habib wypił aż połowę butelki, 
		pozostawiając jedynie $\frac{2}{3}-\frac{1}{2}=\frac{4}{6}-\frac{3}{6}=\frac{1}{6}$ butelki. Targany wyrzutami sumienia trzeciego dnia wypił ledwie 
		$\frac{3}{4}$ tego, co 
		zostało, czyli $\frac{3}{4}\cdot\frac{1}{6}=\frac{3}{24}=\frac{1}{8}$ butelki. Na czwarty dzień pozostało mu 
		$\frac{1}{6}-\frac{1}{8}=\frac{4}{24}-\frac{3}{24}=\frac{1}{24}$ butelki. Trzymamy kciuki.
	</div>
	<div class="example">
		Michaś zmartwiony myślą, że tort czekoladowy tak szybko znika, postanowił obrać taką taktykę: każdego dnia zje 
		$\frac{1}{3}$ tego, 
		co zostało. Pierwszego dnia zjadł $\frac{1}{3}$ tortu, więc zostało $\frac{2}{3}$ tortu. 
		Następnego dnia zjadł $\frac{1}{3}\cdot\frac{2}{3}$, czyli $\frac{2}{9}$ tortu. 
		Zostało $\frac{2}{3}-\frac{2}{9}=\frac{6}{9}-\frac{2}{9}=\frac{4}{9}$. Trzeciego dnia ubyło $\frac{1}{3}\cdot\frac{4}{9}=\frac{4}{27}$, więc zostało 
		$\frac{4}{9}-\frac{4}{27}=\frac{12}{27}-\frac{4}{27}=\frac{8}{27}$. Kolejnego dnia 
		porcja wyniosła $\frac{1}{3}\cdot \frac{8}{27}=\frac{8}{81}$, czyli pozostało $\frac{8}{27}-\frac{8}{81}=\frac{24}{81}-\frac{8}{81}=\frac{16}{81}$ placka. 
		Piątego dnia Michaś zbuntował się przeciw samozniewoleniu i zjadł całą resztę.
	</div>
	<div class="example">
		Szóstego dnia Michaś zaopatrzył się w $30$ tabletek na odchudzanie. Recepta mówi, że należy zażywać pół tabletki trzy razy 
		dziennie. W ciągu tygodnia Michaś skonsumował więc $\frac{7\cdot3\cdot1}{2}=\frac{21}{2}=10 \frac{1}{2}$ tabletki. 
		W takim razie zostało mu $30-10 \frac{1}{2}=19 \frac{1}{2} $
		tabletki. Zaczął zastanawiać się, na ile dni wystarczy mu takiego zapasu. Skoro w ciągu dnia bierze $\frac{3}{2}$ tabletki, to 
		$19 \frac{1}{2}=\frac{39}{2}$ tabletek wystarczy na $\frac{39}{2}:\frac{3}{2}=\frac{39}{2}\cdot\frac{2}{3}=\frac{39\cdot2}{2\cdot3}=13$ dni.
	</div>

    </lesson-chapter>

    <lesson-chapter><template #title>Skracanie ułamków</template>

	<p class = "type">
		Warsztat
	</p>

	<p>
		Wspomnieliśmy wcześniej, że postać nieskracalna ułamków jest nasza ulubioną postacią. Twoją również. Po co zajmować się ułamkami, których liczniki 
		i mianowniki są niepotrzebnie duże? Gdy patrzymy na ułamek, nasz instynkt matematyczny powinien pedantycznie sprawdzić, czy przypadkiem ułamka 
		nie da się skrócić, to znaczy podzielić jego licznika i mianownika przez jakąś ładną liczbę:
	</p>

	$$
		\frac{372}{144} = \frac{186 \cdot 2}{72 \cdot 2} = \frac{186}{72} = \frac{93 \cdot 2}{36 \cdot 2} = \frac{93}{36} = \frac{31 \cdot 3}{12 \cdot 3} =
		\frac{31}{12}
	$$

	<p>
		Jednak nasza praktyka skracania będzie sięgać jeszcze dalej. Przypuśćmy, że mamy pomnożyć dwa ułamki:
	</p>

	$$
		\frac{6}{25} \cdot \frac{35}{3}
	$$

	<p>
		Możemy dokonać tych obliczeń standardowo, mnożąc liczniki i mianowniki, a na koniec dokonując skrócenia:
	</p>

	$$
		\frac{6}{25} \cdot \frac{35}{3} = \frac{6 \cdot 35}{25 \cdot 3} = \frac{6 \cdot 35}{25 \cdot 3} = \frac{210}{75} = \frac{14}{5}
	$$

	<p>
		jednak wiąże się to z wykonaniem dość przykrych operacji na dużych liczbach. Po co mamy mnożyć liczby w licznikach i mianownikach, skoro zaraz 
		przyjdzie nam je skracać? Zamiast tego dokonamy skrócenia "na krzyż" na samym początku obliczeń. Skracamy szóstkę pierwszego ułamka z trójką 
		drugiego ułamka oraz $25$ pierwszego ułamka z $35$ drugiego.
	</p>

	$$
		\frac{\color{#dd3333}{\bf 6}}{25} \cdot \frac{35}{\color{#dd3333}{\bf 3}} = 
		\frac{\color{#dd3333}{\bf 2}}{25} \cdot \frac{35}{\color{#dd3333}{\bf 1}} = 
		\frac{2}{\color{#dd3333}{\bf25}} \cdot \frac{\color{#dd3333}{\bf 35}}{1} =
		\frac{2}{\color{#dd3333}{\bf 5}} \cdot \frac{\color{#dd3333}{\bf 7}}{1} =
		\frac{2 \cdot 7}{5 \cdot 1} = \frac{14}{5}
	$$

	<p>
		Gdy wykonujemy tego typu obliczenia na papierze, zwykle dokonujemy skróceń poprzez skreślanie skracanych liczb i zapisywanie tego, co zostało.
	</p>

	$$
		\frac{\require{bcancel} \bcancel{6}^2}{\require{cancel} \cancel{25}_5} \cdot \frac{\cancel{35}^7}{\bcancel{3}_1} = \frac{14}{5}
	$$
	
	<p>
		Skracania możemy dokonywać wielokrotnie, jeśli obliczamy iloczyn kilku ułamków:
	</p>

	$$
		\frac{40}{15} \cdot \frac{25}{36} \cdot \frac{42}{5 \cdot 20}
	$$
	$$
		\frac{\color{#dd3333}{\bf 40}}{\color{#000000}{\bf 15}} \cdot \frac{\color{#000000}{\bf 25}}{\color{#ffaaaa}{\bf 36}} \cdot \frac{\color{#ffaaaa}{\bf 42}}{5 \cdot \color{#dd3333}{\bf 20}} =
		\frac{\color{#dd3333}{\bf 20}}{\color{#000000}{\bf 3}} \cdot \frac{\color{#000000}{\bf 5}}{\color{#ffaaaa}{\bf 6}} \cdot \frac{\color{#ffaaaa}{\bf 7}}{5 \cdot \color{#dd3333}{\bf 1}}
	$$
	$$
		\frac{\color{#dd3333}{\bf 20}}{3} \cdot \frac{\color{#000000}{\bf 5}}{\color{#dd3333}{\bf 6}} \cdot \frac{7}{\color{#000000}{\bf 5} \cdot 1} = 
		\frac{\color{#dd3333}{\bf 10}}{3} \cdot \frac{\color{#000000}{\bf 1}}{\color{#dd3333}{\bf 3}} \cdot \frac{7}{\color{#000000}{\bf 1} \cdot 1} = 
		\frac{70}{9}
	$$

	<p>
		Na papierze tego typu zapiski odbywają się poprzez serię skreśleń, przez co ich forma jest krótsza. Jeśli chcemy wykonywać skracanie ułamków, gdy 
		w liczniku lub mianowniku pojawia się suma, musimy skrócić każdy element sumy:
	</p>

	$$
		\frac{\color{#dd3333}{\bf 14} + 5 \cdot \color{#dd3333}{\bf 7}}{3} \cdot \frac{4}{\color{#dd3333}{\bf 7}} = 
		\frac{\color{#dd3333}{\bf 2} + 5 \cdot \color{#dd3333}{\bf 1}}{3} \cdot \frac{4}{\color{#dd3333}{\bf 1}}
	$$
    </lesson-chapter>

    <lesson-chapter><template #title>Porównywanie ułamków</template>
	<p class = "type">
		Intuicje
	</p>

	<p>
		Podobnie jak liczby naturalne, możemy porównywać też ułamki. Nietrudno orzec, że po zjedzeniu $3$ z ośmiu kawałów tortu Michaś 
		będzie bardziej wysycony, niż po zjedzeniu jednego kawałka. Porównanie ułamków o równych mianownikach sprowadza się do 
		porównania ich liczników. Gdy mianowniki są różne – znamy już sposób – po prostu sprowadzamy obydwa ułamki do wspólnego 
		mianownika.
	</p>
	<ul>
		<li>$\frac{10}{3} \lt \frac{22}{3}$</li>
		<li>$\frac{10}{8} \gt \frac{6}{5}$, bo $\frac{25}{20} \gt \frac{24}{20}$</li>
		<li>$\frac{35}{49}=\frac{30}{42}$, bo $\frac{5}{7}=\frac{5}{7}$</li>
	</ul>

	<p>
		Gdy sprowadzenie do wspólnego mianownika jest uciążliwe (bo na przykład mianowniki są dość duże), możemy chwycić się innej metody. Chcemy 
		porównać ułamki $\frac{2}{7}$ i $\frac{2}{5}$. Gdy podzielimy tort na $7$ kawałków, 
		każdy z nich będzie mniejszy, niż gdybyśmy podzielili tort na 
		$5$ kawałków. W pierwszej sytuacji bierzemy $2$ stosunkowo małe kawałki tortu, a w drugiej sytuacji 
		$2$ nieco większe kawałki. W takim razie $\frac{2}{7} \lt \frac{2}{5}$.
	</p>

	<center><img src="./.images/Screenshot_21.png" align="middle"></center>
	
	<p>
		Gdy liczniki dwóch ułamków są równe, większy jest ten ułamek, który ma mniejszy mianownik.
	</p>

	<ul>
		<li>
			$\frac{5}{12} \lt \frac{5}{8}$ (licząc pierwszą metodą: $\frac{5}{12} \lt \frac{5}{8}$, ponieważ $\frac{10}{24} \lt \frac{15}{24}$)
		</li>

		<li>
			$\frac{2}{39} \gt \frac{4}{79}$, ponieważ $\frac{4}{78} \gt \frac{4}{79}$
		</li>
	</ul>
    </lesson-chapter>

    <lesson-chapter><template #title>Ułamki piętrowe</template>
	<p class = "type"> 
		Rozszerzenie
	</p>

	<p>
		Gdy mówiliśmy, że znak dzielenia można zawsze zastąpić kreską ułamkową, <comment text="My nigdy nie żartujemy.">nie żartowaliśmy</comment>. 
		Do postaci ułamka można sprowadzać dowolnie rozbudowane działania zawierające dzielenie:
	</p>

	$$
		(1 + 2 \cdot (5 : 3)) : (2 - 7) = \frac{1 + 2 \cdot \frac{5}{3}}{2 - 7}
	$$

	<p>
		W licznikach oraz mianownikach ułamków możemy zapisywać dowolnie rozbudowane wyrażenia. Jeśli zdarzy się, że ułamek zawiera w swoim 
		liczniku lub mianowniku inny ułamek, będziemy mieli do czynienia z ułamkiem piętrowym. Ciężko się nie zgodzić, że w ułamkach piętrowych jest coś
		potwornego, w związku z czym są zwykle mało porządane. Na szczęście każdy ułamek piętrowy można sprowadzić do postaci pojedynczego ułamka 
		poprzez odpowiednie rozszerzenie licznika i mianownika.
	</p>

	$$
		\frac{53 \cdot 23 + 2}{\frac{2}{3} - 1} = \frac{(53 \cdot 23 + 2) \cdot 3}{\left(\frac{2}{3} - 1 \right) \cdot 3} = 
		\frac{(53 \cdot 23 + 2) \cdot 3}{\frac{2}{3} \cdot 3 - 1 \cdot 3} = \frac{(53 \cdot 23 + 2) \cdot 3}{2 - 3}
	$$

	<p>
		Piętrowość ułamków możemy rozbudowywać do dowolnie dużych rozmiarów. Zwykle jednak taka forma jest mało przejrzysta, a przez to 
		mało praktyczna. Ponadto niestaranny zapis ułamka piętrowego może prowadzić do niejednoznaczności. Zapis
	</p>

	$$
		\underline{2}\\
		\underline{3}\\
		5
	$$
	
	<p>
		można interpretować na dwa sposoby:
	</p>
	<ul>
		<li>
			Jest to ułamek, którego licznikiem jest $\frac{2}{3}$, a mianownikiem $5$. Jego wartość jest 
			równa $\frac{2}{15}$.
		</li>
		<li>
			Jest to ułamek, którego licznikiem jest $2$, a mianownikiem $\frac{3}{5}$. Jego wartość jest równa 
			$\frac{10}{3}$.
		</li>
	</ul>

	<p>
		Z tego powodu wyróżnia się <i>kreskę główną</i> ułamka piętrowego. Pozwala ona jednoznacznie rozróżnić licznik od mianownika – jest ona 
		dłuższa od pozostałych kresek ułamka.
	</p>

	$$
		\frac{\frac{2}{3}}{5}
	$$

	<p>
		Dzięki takiemu zapisowi wiadomo, że $\frac{2}{3}$ jest licznikiem, a $5$ mianownikiem. Aby pozycja kreski głównej była 
		jeszcze wyraźniej widoczna, zawsze w równościach ułamek piętrowy zapisujemy tak, aby kreska główna była na wysokości znaku $=$ . Piszemy więc
	</p>

	$$
		\frac{\frac{2}{3}}{5}=\frac{2}{15}
	$$

	<p>
		Nie zaś
	</p>
	
	<center><img src="./.images/Screenshot_23.png" align="middle"></center>

	<!--Rozważam dodanie rozszerzenia o ułamkach łańcuchowych-->

    </lesson-chapter>

  </lesson>
</template>

<script>
import LessonTitle from "../../../lesson/LessonTitle";
import LessonIntro from "../../../lesson/LessonIntro";
import LessonChapter from "../../../lesson/chapter/LessonChapter";
import Lesson from "../../../lesson/Lesson.vue";

export default {
  name: "UlamkiZwykle",
  data() {
    return {
      chapters: []
    };
  },
  components: {
    LessonIntro,
    LessonTitle,
    LessonChapter,
    Lesson
  }
};
</script>

<style scoped>
</style>
