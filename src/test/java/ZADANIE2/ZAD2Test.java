package ZADANIE2;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;



@RunWith(Cucumber.class)
@CucumberOptions(features = "src/Cucumber/Features/zad2.feature", plugin = {"pretty","html:out"})


public class ZAD2Test {
}
