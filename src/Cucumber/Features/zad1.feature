Feature: Zakupy
  Scenario Outline:
    Given uzytkownik otwiera strone sklepu "<sklep>"
    When uzytkownik zaloguje sie do sklepu podajac "<email>" i "<haslo>"
    And uzytkownik wejdzie w kafelek Addresses
    Then adres na ktorym powinnismy sie znalezc to "<url2>"
    And uzytkownik doda nowy adres
    And uzytkownik wypelni zip "<zip>"
    And uzytkownik wypelni alias "<alias>"
    And uzytkownik wypelni adres "<address>"
    And uzytkownik wypelni miasto "<city>"
    And uzytkownik wypelni kraj "<country>"
    And uzytkownik wypelni "<phone>"
    And uzytkownik zapisuje adres
    Then potwierdzenie dodania adresu "<msg1>"
    And uzytkownik usunie adres
    Then potwierdzenie usuniecia adresu "<msg2>"





Examples:
|sklep                          |email         |haslo |url2                                                       |alias|address|city     |zip   |country       |phone    |msg1                         |msg2                         |
|https://prod-kurs.coderslab.pl|Lolek@bolek.pl|123qwe|https://prod-kurs.coderslab.pl/index.php?controller=address |Dom1  |Zytnia |Wloclawek|87-800|United Kingdom|654321789|Address successfully added!|Address successfully deleted!|








#Zadanie 1 - Selenium WebDriver + Cucumber
        #Utwórz użytkownika manualnie na stronie https://prod-kurs.coderslab.pl/ .
        #Możesz wykorzystać tymczasowego maila do utworzenia użytkownika
        #https://10minutemail.com/10MinuteMail/index.html .
        #Napisz skrypt, który:
        #-będzie logować się na tego stworzonego użytkownika,
        #-wejdzie klikając w kafelek Addresses po zalogowaniu (adres, na którym powinniśmy się znaleźć to:
        #https://prod-kurs.coderslab.pl/index.php?controller=addresses ),
        #-kliknie w + Create new address,
        #-wypełni formularz New address - dane powinny być pobierane z tabeli Examples w Gherkinie
        #(alias, address, city, zip/postal code/country/phone),
        #-sprawdzi czy dane w dodanym adresie są poprawne.



        #Dodatkowe kroki dla chętnych:
        #- usunie powyższy adres klikając w "delete",
        #- sprawdzi czy adres został usunięty.



