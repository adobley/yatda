package net.obley.yatda.functional;

import com.google.common.base.Function;
import cucumber.api.java.Before;
import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.FluentWait;
import org.openqa.selenium.support.ui.Wait;

import java.util.concurrent.TimeUnit;

public class BaseFlow {

  protected static WebDriver driver;
  protected static final String TODO_PAGE_URL = "http://localhost:3000/";
  protected static final String TODO_PAGE_TITLE = "Yet Another To Do App";

  @Before
  public void setUp() {
    driver = new FirefoxDriver();
    driver.navigate().to(TODO_PAGE_URL);
  }

  private WebElement fluentWait(final By locator) {
    Wait<WebDriver> wait = new FluentWait<WebDriver>(driver)
      .withTimeout(30, TimeUnit.SECONDS)
      .pollingEvery(5, TimeUnit.SECONDS)
      .ignoring(NoSuchElementException.class);

    WebElement webElement = wait.until(new Function<WebDriver, WebElement>() {
      public WebElement apply(WebDriver driver) {
        return driver.findElement(locator);
      }
    });

    return webElement;
  }

  protected boolean elementByIdContainsText(String elementId, String text) {
    return fluentWait(By.id(elementId)).getText().equals(text);
  }

  protected void clickOnElementWithID(String elementId){
    fluentWait(By.id(elementId)).click();
  }

}
