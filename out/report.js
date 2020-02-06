$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/Cucumber/Features/zad2.feature");
formatter.feature({
  "line": 1,
  "name": "Zakupy2",
  "description": "",
  "id": "zakupy2",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "",
  "description": "",
  "id": "zakupy2;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "klient otwiera strone sklepu \"\u003csklep\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "klient loguje sie do sklepu podajac \"\u003cemail\u003e\" i \"\u003chaslo\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "klient wyszuka produkt \"\u003cprodukt\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "klient wybierze wyszukany produkt",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "klient wybierze rozmiar \"\u003crozmiar\u003e\" i ilosc \"\u003csztuk\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "klient doda produkt do koszyka",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "klient klika w PROCEED TO CHECKOUT",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "klient wybierze i potwierdzi adres",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "klient wybierze metode odbioru",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "klient wybierze opcje platnosci",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "klient wykona zrzut potwierdzenia zamowienia \"\u003cmsg\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "klient przechodzi do konta",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "klient przechodzi do historii zamowien",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "klient przechodzi do szczegolow zamowienia \"\u003cmsg2\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "zakupy2;;",
  "rows": [
    {
      "cells": [
        "sklep",
        "email",
        "haslo",
        "produkt",
        "rozmiar",
        "sztuk",
        "msg",
        "msg2"
      ],
      "line": 21,
      "id": "zakupy2;;;1"
    },
    {
      "cells": [
        "https://prod-kurs.coderslab.pl",
        "Lolek@bolek.pl",
        "123qwe",
        "Hummingbird printed sweater",
        "M",
        "5",
        "YOUR ORDER IS CONFIRMED",
        "Awaiting check payment"
      ],
      "line": 22,
      "id": "zakupy2;;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 22,
  "name": "",
  "description": "",
  "id": "zakupy2;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "klient otwiera strone sklepu \"https://prod-kurs.coderslab.pl\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "klient loguje sie do sklepu podajac \"Lolek@bolek.pl\" i \"123qwe\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "klient wyszuka produkt \"Hummingbird printed sweater\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "klient wybierze wyszukany produkt",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "klient wybierze rozmiar \"M\" i ilosc \"5\"",
  "matchedColumns": [
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "klient doda produkt do koszyka",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "klient klika w PROCEED TO CHECKOUT",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "klient wybierze i potwierdzi adres",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "klient wybierze metode odbioru",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "klient wybierze opcje platnosci",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "klient wykona zrzut potwierdzenia zamowienia \"YOUR ORDER IS CONFIRMED\"",
  "matchedColumns": [
    6
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "klient przechodzi do konta",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "klient przechodzi do historii zamowien",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "klient przechodzi do szczegolow zamowienia \"Awaiting check payment\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://prod-kurs.coderslab.pl",
      "offset": 30
    }
  ],
  "location": "ZAD2Steps.klientOtwieraStroneSklepu(String)"
});
formatter.result({
  "duration": 15685234507,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Lolek@bolek.pl",
      "offset": 37
    },
    {
      "val": "123qwe",
      "offset": 56
    }
  ],
  "location": "ZAD2Steps.klientLogujeSieDoSklepuPodajacI(String,String)"
});
formatter.result({
  "duration": 4021700415,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hummingbird printed sweater",
      "offset": 24
    }
  ],
  "location": "ZAD2Steps.klientWyszukaProdukt(String)"
});
formatter.result({
  "duration": 1473656366,
  "status": "passed"
});
formatter.match({
  "location": "ZAD2Steps.klientWybierzeWyszukanyProdukt()"
});
formatter.result({
  "duration": 2466889324,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "M",
      "offset": 25
    },
    {
      "val": "5",
      "offset": 37
    }
  ],
  "location": "ZAD2Steps.klientWybierzeRozmiarIIlosc(String,String)"
});
formatter.result({
  "duration": 2241542207,
  "status": "passed"
});
formatter.match({
  "location": "ZAD2Steps.klientDodaProduktDoKoszyka()"
});
formatter.result({
  "duration": 1329676296,
  "status": "passed"
});
formatter.match({
  "location": "ZAD2Steps.klientKlikaW_PROCEED_TO_CHECKOUT()"
});
formatter.result({
  "duration": 3873896042,
  "status": "passed"
});
formatter.match({
  "location": "ZAD2Steps.klientWybierzeIPotwierdziAdres()"
});
formatter.result({
  "duration": 3509179294,
  "status": "passed"
});
formatter.match({
  "location": "ZAD2Steps.klientWybierzeMetodeOdbioru()"
});
formatter.result({
  "duration": 3196143143,
  "status": "passed"
});
formatter.match({
  "location": "ZAD2Steps.klientWybierzeOpcjePlatnosci()"
});
formatter.result({
  "duration": 4779684018,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "YOUR ORDER IS CONFIRMED",
      "offset": 46
    }
  ],
  "location": "ZAD2Steps.klientWykonaZrzutPotwierdzeniaZamowienia(String)"
});
formatter.result({
  "duration": 7422997795,
  "status": "passed"
});
formatter.match({
  "location": "ZAD2Steps.klientPrzechodziDoKonta()"
});
formatter.result({
  "duration": 4047045455,
  "status": "passed"
});
formatter.match({
  "location": "ZAD2Steps.klientPrzechodziDoHistoriiZamowien()"
});
formatter.result({
  "duration": 3684999336,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Awaiting check payment",
      "offset": 44
    }
  ],
  "location": "ZAD2Steps.klientPrzechodziDoSzczegolowZamowienia(String)"
});
formatter.result({
  "duration": 7324946716,
  "status": "passed"
});
});