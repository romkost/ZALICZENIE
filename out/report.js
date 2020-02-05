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
formatter.examples({
  "line": 17,
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
        "msg"
      ],
      "line": 18,
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
        "YOUR ORDER IS CONFIRMED"
      ],
      "line": 19,
      "id": "zakupy2;;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 19,
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
  "duration": 11198236092,
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
  "duration": 3516802761,
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
  "duration": 1233662433,
  "status": "passed"
});
formatter.match({
  "location": "ZAD2Steps.klientWybierzeWyszukanyProdukt()"
});
formatter.result({
  "duration": 2034678608,
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
  "duration": 2222925664,
  "status": "passed"
});
formatter.match({
  "location": "ZAD2Steps.klientDodaProduktDoKoszyka()"
});
formatter.result({
  "duration": 1300947257,
  "status": "passed"
});
formatter.match({
  "location": "ZAD2Steps.klientKlikaW_PROCEED_TO_CHECKOUT()"
});
formatter.result({
  "duration": 2692354720,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: //*[@class\u003d\u0027btn btn-primary\u0027]\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027roman-virtual-machine\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00275.3.0-29-generic\u0027, java.version: \u002713.0.2\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 72.0.2, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20200117190643, moz:geckodriverVersion: 0.26.0, moz:headless: false, moz:processID: 7404, moz:profile: /tmp/rust_mozprofileuRbrWf, moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, platformVersion: 5.3.0-29-generic, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: c9b896e7-7c4e-44cb-aa6a-f03bf0949a07\n*** Element info: {Using\u003dxpath, value\u003d//*[@class\u003d\u0027btn btn-primary\u0027]}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat ZADANIE2.ZAD2Steps.klientKlikaW_PROCEED_TO_CHECKOUT(ZAD2Steps.java:108)\n\tat ✽.And klient klika w PROCEED TO CHECKOUT(src/Cucumber/Features/zad2.feature:9)\n",
  "status": "failed"
});
formatter.match({
  "location": "ZAD2Steps.klientWybierzeIPotwierdziAdres()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ZAD2Steps.klientWybierzeMetodeOdbioru()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ZAD2Steps.klientWybierzeOpcjePlatnosci()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "ZAD2Steps.klientPrzechodziDoKonta()"
});
formatter.result({
  "status": "skipped"
});
});