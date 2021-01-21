package com.covea.pages;

import com.covea.utilities.ConfigurationReadar;
import com.covea.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.concurrent.TimeUnit;

public abstract class BasePage {

    public BasePage() {
        PageFactory.initElements(Driver.get(), this);
    }

    @FindBy(css = "[title='Get Quote']")
    public WebElement start;

    public void navigateToHomepage(){
        Driver.get().get(ConfigurationReadar.get("url"));
        Driver.get().manage().window().maximize();
        Driver.get().manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
    }

    public void clickStart(){
        start.click();
    }

}
