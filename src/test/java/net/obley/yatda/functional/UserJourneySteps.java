package net.obley.yatda.functional;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.MatcherAssert.assertThat;


public class UserJourneySteps {

  private static WebDriver driver;
  private static final String EXPECTED_URL = "http://localhost:3000/";
  private static final String EXPECTED_TITLE = "Yet Another To Do App";

  @Before
  public void setUp() {
    driver = new FirefoxDriver();
    driver.navigate().to(EXPECTED_URL);
  }

  @When("^I am on the ToDo Page$")
  public void iAmOnTheToDoPage() {
    assertThat(driver.getCurrentUrl(), is(EXPECTED_URL));
  }

  @Then("^I see the ToDo title$")
  public void iSeeTheToDoTitle() {
    assertThat(driver.findElement(By.tagName("h1")).getText(), is(EXPECTED_TITLE));
  }

  @After
  public static void after() {
    driver.quit();
  }

}
