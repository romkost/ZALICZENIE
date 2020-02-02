$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/Cucumber/Features/zad1.feature");
formatter.feature({
  "line": 1,
  "name": "Zakupy",
  "description": "",
  "id": "zakupy",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "",
  "description": "",
  "id": "zakupy;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "uzytkownik otwiera strone sklepu \"\u003csklep\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "uzytkownik zaloguje sie do sklepu podajac \"\u003cemail\u003e\" i \"\u003chaslo\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "uzytkownik wejdzie w kafelek Addresses",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "adres na ktorym powinnismy sie znalezc to \"\u003curl2\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "uzytkownik doda nowy adres",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "uzytkownik wypelni zip \"\u003czip\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "uzytkownik wypelni alias \"\u003calias\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "uzytkownik wypelni adres \"\u003caddress\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "uzytkownik wypelni miasto \"\u003ccity\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "uzytkownik wypelni kraj \"\u003ccountry\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "uzytkownik wypelni \"\u003cphone\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "uzytkownik zapisuje adres",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "potwierdzenie dodania adresu \"\u003cmsg1\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "uzytkownik usunie adres",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "potwierdzenie usuniecia adresu \"\u003cmsg2\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "zakupy;;",
  "rows": [
    {
      "cells": [
        "sklep",
        "email",
        "haslo",
        "url2",
        "alias",
        "address",
        "city",
        "zip",
        "country",
        "phone",
        "msg1",
        "msg2"
      ],
      "line": 24,
      "id": "zakupy;;;1"
    },
    {
      "cells": [
        "https://prod-kurs.coderslab.pl",
        "Lolek@bolek.pl",
        "123qwe",
        "https://prod-kurs.coderslab.pl/index.php?controller\u003daddress",
        "Dom1",
        "Zytnia",
        "Wloclawek",
        "87-800",
        "United Kingdom",
        "654321789",
        "Address successfully added!",
        "Address successfully deleted!"
      ],
      "line": 25,
      "id": "zakupy;;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 25,
  "name": "",
  "description": "",
  "id": "zakupy;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 3,
  "name": "uzytkownik otwiera strone sklepu \"https://prod-kurs.coderslab.pl\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "uzytkownik zaloguje sie do sklepu podajac \"Lolek@bolek.pl\" i \"123qwe\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "uzytkownik wejdzie w kafelek Addresses",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "adres na ktorym powinnismy sie znalezc to \"https://prod-kurs.coderslab.pl/index.php?controller\u003daddress\"",
  "matchedColumns": [
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "uzytkownik doda nowy adres",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "uzytkownik wypelni zip \"87-800\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "uzytkownik wypelni alias \"Dom1\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "uzytkownik wypelni adres \"Zytnia\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "uzytkownik wypelni miasto \"Wloclawek\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "uzytkownik wypelni kraj \"United Kingdom\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "uzytkownik wypelni \"654321789\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "uzytkownik zapisuje adres",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "potwierdzenie dodania adresu \"Address successfully added!\"",
  "matchedColumns": [
    10
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "uzytkownik usunie adres",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "potwierdzenie usuniecia adresu \"Address successfully deleted!\"",
  "matchedColumns": [
    11
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://prod-kurs.coderslab.pl",
      "offset": 34
    }
  ],
  "location": "ZAD1Steps.uzytkownikOtwieraSklep(String)"
});
formatter.result({
  "duration": 8182940903,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Lolek@bolek.pl",
      "offset": 43
    },
    {
      "val": "123qwe",
      "offset": 62
    }
  ],
  "location": "ZAD1Steps.uzytkownikZalogujeSieDoSklepuPodajac(String,String)"
});
formatter.result({
  "duration": 2743841576,
  "status": "passed"
});
formatter.match({
  "location": "ZAD1Steps.uzytkownikWejdzieWKafelekAddresses()"
});
formatter.result({
  "duration": 667486699,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://prod-kurs.coderslab.pl/index.php?controller\u003daddress",
      "offset": 43
    }
  ],
  "location": "ZAD1Steps.adresNaKtorymPowinnismySieZnalezcTo(String)"
});
formatter.result({
  "duration": 1040178634,
  "status": "passed"
});
formatter.match({
  "location": "ZAD1Steps.uzytkownikDodaNowyAdres()"
});
formatter.result({
  "duration": 1854669165,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "87-800",
      "offset": 24
    }
  ],
  "location": "ZAD1Steps.uzytkownikWypelniZip(String)"
});
formatter.result({
  "duration": 843653215,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dom1",
      "offset": 26
    }
  ],
  "location": "ZAD1Steps.uzytkownikWypelniAlias(String)"
});
formatter.result({
  "duration": 803160630,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Zytnia",
      "offset": 26
    }
  ],
  "location": "ZAD1Steps.uzytkownikWypelniAdres(String)"
});
formatter.result({
  "duration": 783703947,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Wloclawek",
      "offset": 27
    }
  ],
  "location": "ZAD1Steps.uzytkownikWypelniMiasto(String)"
});
formatter.result({
  "duration": 910991594,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "United Kingdom",
      "offset": 25
    }
  ],
  "location": "ZAD1Steps.uzytkownikWypelniKraj(String)"
});
formatter.result({
  "duration": 956149207,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "654321789",
      "offset": 20
    }
  ],
  "location": "ZAD1Steps.uzytkownikWypelni(String)"
});
formatter.result({
  "duration": 853356666,
  "status": "passed"
});
formatter.match({
  "location": "ZAD1Steps.uzytkownikZapisujeAdres()"
});
formatter.result({
  "duration": 1212971012,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Address successfully added!",
      "offset": 30
    }
  ],
  "location": "ZAD1Steps.potwierdzenieDodaniaAdresu(String)"
});
formatter.result({
  "duration": 2093813007,
  "status": "passed"
});
formatter.match({
  "location": "ZAD1Steps.uzytkownikUsunieAdres()"
});
formatter.result({
  "duration": 696774204,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Address successfully deleted!",
      "offset": 32
    }
  ],
  "location": "ZAD1Steps.potwierdzenieUsunieciaAdresu(String)"
});
formatter.result({
  "duration": 1225168765,
  "status": "passed"
});
});