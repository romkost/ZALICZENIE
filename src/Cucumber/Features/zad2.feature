Feature: Zakupy2
  Scenario Outline:
    Given klient otwiera strone sklepu "<sklep>"
    When klient loguje sie do sklepu podajac "<email>" i "<haslo>"
    And klient wyszuka produkt "<produkt>"
    And klient wybierze wyszukany produkt
    And klient wybierze rozmiar "<rozmiar>" i ilosc "<sztuk>"
    And klient doda produkt do koszyka
    And klient klika w PROCEED TO CHECKOUT
    And klient wybierze i potwierdzi adres
    And klient wybierze metode odbioru
    And klient wybierze opcje platnosci
    Then klient wykona zrzut potwierdzenia zamowienia "<msg>"
    And klient przechodzi do konta


    Examples:
      |sklep                         |email         |haslo |produkt                    |rozmiar|sztuk|msg                    |
      |https://prod-kurs.coderslab.pl|Lolek@bolek.pl|123qwe|Hummingbird printed sweater|M      |5    |YOUR ORDER IS CONFIRMED|



#Napisz skrypt, który:
#+zaloguje się na tego samego użytkownika z zadania 1,
#+wybierze do zakupu Hummingbird Printed Sweater (opcja dodatkowa: sprawdzi czy rabat na niego wynosi 20%),
#+wybierze rozmiar M (opcja dodatkowa: zrób tak żeby można było sparametryzować rozmiar i wybrać S,M,L,XL),
#+wybierze 5 sztuk według parametru podanego w teście (opcja dodatkowa: zrób tak żeby można było sparametryzować liczbę sztuk),
#+dodaj produkt do koszyka,
#+przejdzie do opcji - checkout,
#+potwierdzi address (możesz go dodać wcześniej ręcznie),
#+wybierze metodę odbioru - PrestaShop "pick up in store",
#+wybierze opcję płatności - Pay by Check,
#+kliknie na "order with an obligation to pay",




#-zrobi screenshot z potwierdzeniem zamówienia i kwotą.

#Dodatkowe kroki dla chętnych:
#-Wejdź w historię zamówień i detale (najpierw kliknij w użytkownika zalogowanego, później kafelek),
#-sprawdź czy zamówienie znajduje się na liście ze statusem "Awaiting check payment" i kwotą taką samą jak na zamówieniu dwa kroki wcześniej.