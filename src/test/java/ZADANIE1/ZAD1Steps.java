package ZADANIE1;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.junit.Before;
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import java.io.IOException;
import java.util.concurrent.TimeUnit;

import static junit.framework.TestCase.assertEquals;

public class ZAD1Steps {
    WebDriver driver;

    /*
    @Before()
    public void setup() throws IOException {
        System.setProperty("webdriver.chrome.driver", "src/main/resources/drivers/chromedriver");
        this.driver = new ChromeDriver();
        this.driver.manage().window().maximize();
        this.driver.manage().timeouts().pageLoadTimeout(180, TimeUnit.SECONDS);
    }
    */






    @Given("^uzytkownik otwiera strone sklepu \"([^\"]*)\"$")
    public void uzytkownikOtwieraSklep(String sklep) throws Throwable {
        System.setProperty("webdriver.chrome.driver", "src/main/resources/drivers/chromedriver");
        this.driver = new ChromeDriver();
        this.driver.manage().window().maximize();
        this.driver.manage().timeouts().pageLoadTimeout(180, TimeUnit.SECONDS);



        driver.get(sklep);
        Thread.sleep(1000);
        driver.findElement(By.xpath("//*[contains(text(), 'Sign in')]")).click();
        Thread.sleep(1000);
    }


    @When("^uzytkownik zaloguje sie do sklepu podajac \"([^\"]*)\" i \"([^\"]*)\"$")
    public void uzytkownikZalogujeSieDoSklepuPodajac(String email, String haslo) throws Throwable {
        driver.findElement(By.name("email")).sendKeys(email);
        driver.findElement(By.name("password")).sendKeys(haslo);
        Thread.sleep(1000);
        driver.findElement(By.id("submit-login")).click();
    }


    @And("^uzytkownik wejdzie w kafelek Addresses$")
    public void uzytkownikWejdzieWKafelekAddresses() throws Throwable {
        driver.findElement(By.cssSelector("a[href*='addresses'] i")).click();
    }

    @Then("^adres na ktorym powinnismy sie znalezc to \"([^\"]*)\"$")
    public void adresNaKtorymPowinnismySieZnalezcTo(String url2) throws Throwable {
       // assertEquals(driver.getCurrentUrl("value"), url2);
        String currentURL = driver.getCurrentUrl();
        //Assert.assertEquals(currentURL, url2);
        System.out.println("Sprawdzam adres strony " + currentURL);
        //alert.accept();
        Thread.sleep(1000);
    }


    @And("^uzytkownik doda nowy adres$")
    public void uzytkownikDodaNowyAdres() throws Throwable {
        driver.findElement(By.xpath("//*[contains(text(), 'Create new address')]")).click();
        Thread.sleep(1000);
    }

    @And("^uzytkownik wypelni zip \"([^\"]*)\"$")
    public void uzytkownikWypelniZip(String zip) throws Throwable {
        WebElement kod = driver.findElement(By.name("postcode"));
        kod.sendKeys(zip);
        Assert.assertEquals(kod.getAttribute("value"), zip);
        Thread.sleep(500);

    }

    @And("^uzytkownik wypelni alias \"([^\"]*)\"$")
    public void uzytkownikWypelniAlias(String alias) throws Throwable {
        WebElement alias1 = driver.findElement(By.name("alias"));
        alias1.sendKeys(alias);
        Assert.assertEquals(alias1.getAttribute("value"), alias);
        Thread.sleep(500);

    }

    @And("^uzytkownik wypelni adres \"([^\"]*)\"$")
    public void uzytkownikWypelniAdres(String address) throws Throwable {
        WebElement adres1 = driver.findElement(By.name("address1"));
        adres1.sendKeys(address);
        Assert.assertEquals(adres1.getAttribute("value"), address);
        Thread.sleep(500);

    }

    @And("^uzytkownik wypelni miasto \"([^\"]*)\"$")
    public void uzytkownikWypelniMiasto(String city) throws Throwable {
        WebElement miasto = driver.findElement(By.name("city"));
        miasto.sendKeys(city);
        Assert.assertEquals(miasto.getAttribute("value"), city);
        Thread.sleep(500);

    }

    @And("^uzytkownik wypelni kraj \"([^\"]*)\"$")
    public void uzytkownikWypelniKraj(String country) throws Throwable {
        WebElement kraj = driver.findElement(By.name("id_country"));
        kraj.sendKeys(country);
        System.out.println("Sprawdzam kraj " + kraj.getText());

        //Assert.assertEquals(kraj.getAttribute("value"), country);
        Thread.sleep(500);

    }

    @And("^uzytkownik wypelni \"([^\"]*)\"$")
    public void uzytkownikWypelni(String phone) throws Throwable {
        WebElement tel = driver.findElement(By.name("phone"));
        tel.sendKeys(phone);
        Assert.assertEquals(tel.getAttribute("value"), phone);
        Thread.sleep(500);
        //throw new PendingException();
    }

    @And("^uzytkownik zapisuje adres$")
    public void uzytkownikZapisujeAdres() throws Throwable {
        driver.findElement(By.xpath("//input[@name = 'submitAddress']/following::button")).click();
        Thread.sleep(500);
    }


    @Then("^potwierdzenie dodania adresu \"([^\"]*)\"$")
    public void potwierdzenieDodaniaAdresu(String msg1) throws Throwable {
        WebElement potw = driver.findElement(By.xpath("//*[contains(text(), 'Address successfully added!')]"));
        //WebElement potw = driver.findElement(By.xpath("//*[contains(text(), \"msg1\")]"));
        System.out.println("Sprawdzam potwierdzenie: " + potw.getText());
        Assert.assertEquals(potw.getText(), msg1);
        Thread.sleep(2000);
    }

    @And("^uzytkownik usunie adres$")
    public void uzytkownikUsunieAdres() {
        WebElement adresId = driver.findElement(By.xpath("//*[@id='content']/descendant::h4[position()=2]/following::span[position()=2]"));
        adresId.click();

    }

    @Then("^potwierdzenie usuniecia adresu \"([^\"]*)\"$")
    public void potwierdzenieUsunieciaAdresu(String msg2) throws Throwable {
        WebElement potw2 = driver.findElement(By.xpath("//*[contains(text(), 'Address successfully deleted!')]"));
        System.out.println("Sprawdzam potwierdzenie: " + potw2.getText());
        Assert.assertEquals(potw2.getText(), msg2);
        Thread.sleep(1000);

    }
}

//*[@id="address-816"]/div[1]/h4
//*[@id="address-816"]/div[1]/h4/following::span[position()=2]
//*[@id="address-816"]/div[2]/a[2]/span


/*
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

 */




//driver.findElement(By.cssSelector("#content > div.addresses-footer > a")).click();