package ZADANIE2;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;


import java.io.File;
import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;

import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.firefox.FirefoxDriver;


import java.io.IOException;
import java.util.concurrent.TimeUnit;

import static java.lang.Thread.sleep;
import static org.junit.Assert.assertTrue;
import static org.openqa.selenium.Keys.*;

public class ZAD2Steps {
    WebDriver driver;
    String oczekiwanyRabat = "20%";



    @Given("^klient otwiera strone sklepu \"([^\"]*)\"$")
    public void klientOtwieraStroneSklepu(String sklep) throws Throwable {
        //System.setProperty("webdriver.chrome.driver", "src/main/resources/drivers/chromedriver");
        //this.driver = new ChromeDriver();
        System.setProperty("webdriver.gecko.driver", "src/main/resources/drivers/geckodriver");
        this.driver=new FirefoxDriver();
        this.driver.manage().window().maximize();
        this.driver.manage().timeouts().pageLoadTimeout(180, TimeUnit.SECONDS);
        driver.get(sklep);
        sleep(1000);
        driver.findElement(By.xpath("//*[contains(text(), 'Sign in')]")).click();
        sleep(1000);
    }


    @When("^klient loguje sie do sklepu podajac \"([^\"]*)\" i \"([^\"]*)\"$")
    public void klientLogujeSieDoSklepuPodajacI(String email, String haslo) throws Throwable {
        driver.findElement(By.name("email")).sendKeys(email);
        driver.findElement(By.name("password")).sendKeys(haslo);
        sleep(1000);
        driver.findElement(By.id("submit-login")).click();
        sleep(1000);

    }

    @And("^klient wyszuka produkt \"([^\"]*)\"$")
    public void klientWyszukaProdukt(String produkt) throws Throwable {
        WebElement search = driver.findElement(By.name("s"));
        search.sendKeys(produkt);
        search.sendKeys(ENTER);
        sleep(1000);

    }

    @And("^klient wybierze wyszukany produkt$")
    public void klientWybierzeWyszukanyProdukt() throws InterruptedException, IOException {
        //driver.findElement(By.xpath("//*[@class='h3 product-title']/@text='Hummingbird printed sweater']")).click();
        driver.findElement(By.xpath("//*[@id='js-product-list']/div[1]/article[1]/div/div[1]/h2/a")).click();
        //driver.findElement(By.xpath("//*[@class='h3 product-title' and @text='Hummingbird printed sweater']")).click();

        WebElement rabat = driver.findElement(By.xpath("//*[@id='main']/div[1]/div[2]/div[1]/div[2]/div/span[2]"));
        String rabatValue = rabat.getText();
        System.out.println("Rabat wynosi: " + rabatValue);
        assertTrue(rabatValue.contains(oczekiwanyRabat));
        sleep(1000);


    }

    @And("^klient wybierze rozmiar \"([^\"]*)\" i ilosc \"([^\"]*)\"$")
    public void klientWybierzeRozmiarIIlosc(String rozmiar, String sztuk) throws Throwable {
        driver.findElement(By.xpath("//*[@id=\"group_1\"]")).sendKeys(rozmiar);
        sleep(1000);
        WebElement ilosc = driver.findElement(By.name("qty"));
        ilosc.clear();
        sleep(1000);
        ilosc.sendKeys(sztuk);

    }

    @And("^klient doda produkt do koszyka$")
    public void klientDodaProduktDoKoszyka() throws Throwable {
        driver.findElement(By.xpath("//button[@class='btn btn-primary add-to-cart']")).click();
        sleep(1000);

    }


    @And("^klient klika w PROCEED TO CHECKOUT$")
    public void klientKlikaW_PROCEED_TO_CHECKOUT() throws Throwable {
        //driver.switchTo().activeElement();
        sleep(1000);
        driver.findElement(By.xpath("//div[@class='cart-content-btn']/child::a")).click(); // 1st Checkout - modal window
        sleep(1000);
        driver.findElement(By.xpath("//*[@class='btn btn-primary']")).click(); // 2nd Checkout - main window

    }

    @And("^klient wybierze i potwierdzi adres$")
    public void klientWybierzeIPotwierdziAdres() throws Throwable {
        driver.findElement(By.xpath("//span[text()='Dom2']")).click();
        sleep(1000);
        driver.findElement(By.xpath("//button[@name='confirm-addresses']")).click();
        sleep(1000);

    }


    @And("^klient wybierze metode odbioru$")
    public void klientWybierzeMetodeOdbioru() throws Throwable {
        System.out.println("Czy jest selected? " + driver.findElement(By.xpath("//input[@name='delivery_option[1004]']")).isSelected());
        sleep(1000);
        driver.findElement(By.xpath("//button[@name='confirmDeliveryOption']")).click();
        sleep(1000);

    }

    @And("^klient wybierze opcje platnosci$")
    public void klientWybierzeOpcjePlatnosci() throws Throwable {
        driver.findElement(By.xpath("//input[@id='payment-option-1']")).click(); // payment-option-1 = Pay by Check // payment-option-2 = Pay by bank wire
        sleep(1000);
        driver.findElement(By.xpath("//input[@id='conditions_to_approve[terms-and-conditions]']")).click();
        sleep(1000);
        driver.findElement(By.xpath("//button[@class='btn btn-primary center-block']")).click(); // order with an obligation to pay
        sleep(1000);


    }

    @Then("^klient wykona zrzut potwierdzenia zamowienia \"([^\"]*)\"$")
    public void klientWykonaZrzutPotwierdzeniaZamowienia(String msg) throws Throwable {
        WebElement potwierdzenie = driver.findElement(By.xpath("//h3[@class='h1 card-title']")); //YOUR ORDER IS CONFIRMED
        System.out.println("Potwierdzenie zamowienia " + potwierdzenie.getText());
        sleep(1000);
        String actualString = driver.findElement(By.xpath("//h3[@class='h1 card-title']")).getText(); //walory dydaktyczne - dla assertu musi byc jako string a nie webelement
        assertTrue(actualString.contains(msg));
        System.out.println("Potwierdzenie zamowienia2 " + actualString);
        sleep(1000);

        File scrFile = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
        FileUtils.copyFile(scrFile, new File("/home/roman/Pobrane/ZALICZENIE/src/test/java/ZADANIE2/step12.png"));
        sleep(2000);

        String orderRef = driver.findElement(By.xpath("//div[@id='order-details']/ul/li[1]")).getText(); // Order reference
        System.out.println("Order Ref: " + orderRef);
        String orderCut = orderRef.substring(28);
        System.out.println("Order Ref: " + orderCut);
        sleep(1000);
        String total = driver.findElement(By.xpath("//div[@class='order-confirmation-table']/descendant::td[6]")).getText();
        System.out.println("Order Ref: " + total);
        sleep(1000);




    }

    @And("^klient przechodzi do konta$")
    public void klientPrzechodziDoKonta() throws InterruptedException, IOException {
        driver.findElement(By.xpath("//div[@class='user-info']/a[2]")).click(); // Idz do konta
        sleep(1000);
        driver.findElement(By.xpath("//div[@class='links']/a[3]")).click(); //Idz do historii
        File scrFile = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
        FileUtils.copyFile(scrFile, new File("/home/roman/Pobrane/ZALICZENIE/src/test/java/ZADANIE2/step13.png"));
        sleep(2000);
        String orderRefHist = driver.findElement(By.xpath("//div[@id='order-details']/ul/li[1]")).getText(); // Order reference


    }



}

//div[@class='order']/descendant::h3[contains(text(), 'HBCBQZFTI')]/ancestor::a  // link do zamowienia



//div[@class='order']/descendant::h3[contains(text(), 'HBCBQZFTI']

//[contains(text(), 'HBCBQZFTI')]



/*
Napisz skrypt, który:
+zaloguje się na tego samego użytkownika z zadania 1,
+wybierze do zakupu Hummingbird Printed Sweater (opcja dodatkowa: sprawdzi czy rabat na niego wynosi 20%),
+wybierze rozmiar M (opcja dodatkowa: zrób tak żeby można było sparametryzować rozmiar i wybrać S,M,L,XL),
+wybierze 5 sztuk według parametru podanego w teście (opcja dodatkowa: zrób tak żeby można było sparametryzować liczbę sztuk),
+dodaj produkt do koszyka,
+przejdzie do opcji - checkout,
+potwierdzi address (możesz go dodać wcześniej ręcznie),
+wybierze metodę odbioru - PrestaShop "pick up in store",
+wybierze opcję płatności - Pay by Check,
+kliknie na "order with an obligation to pay",
+zrobi screenshot z potwierdzeniem zamówienia i kwotą.

Dodatkowe kroki dla chętnych:
-Wejdź w historię zamówień i detale (najpierw kliknij w użytkownika zalogowanego, później kafelek),
-sprawdź czy zamówienie znajduje się na liście ze statusem "Awaiting check payment" i kwotą taką samą jak na zamówieniu dwa kroki wcześniej.


 */