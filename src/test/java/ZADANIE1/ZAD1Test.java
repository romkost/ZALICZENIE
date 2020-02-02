package ZADANIE1;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;



@RunWith(Cucumber.class)
@CucumberOptions(features = "src/Cucumber/Features/zad1.feature", plugin = {"pretty","html:out"})

public class ZAD1Test {
}
