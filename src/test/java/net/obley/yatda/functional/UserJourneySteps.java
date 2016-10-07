package net.obley.yatda.functional;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.MatcherAssert.assertThat;


public class UserJourneySteps extends BaseFlow {

  @Before
  public void setUpUserJourney() {
    setUp();
  }

  @After
  public static void tearDownUserJourney() {
    driver.quit();
  }


  @When("^I am on the ToDo Page$")
  public void iAmOnTheToDoPage() {
    assertThat(driver.getCurrentUrl(), is(TODO_PAGE_URL));
  }

  @Then("^I see the ToDo title$")
  public void iSeeTheToDoTitle() {
    assertThat(elementByIdContainsText("title", TODO_PAGE_TITLE), is(true));
  }

  @When("^I write a ToDo to \"([^\"]*)\"$")
  public void iWriteAToDo(String toDo) {
    driver.findElement(By.id("new-todo")).sendKeys(toDo);
  }

  @And("^I click the add button$")
  public void iClickTheAddButton() {
    clickOnElementWithID("add-todo");
  }

//  @Then("^I see \"([^\"]*)\" in the list$")
//  public void iSeeToDoInTheList(String toDo) {
//
//  }

}
