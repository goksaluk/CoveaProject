package com.covea.pages;

import com.covea.utilities.BrowserUtils;
import com.covea.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.Select;
import java.util.ArrayList;
import java.util.List;

public class QuotePage extends BasePage {


    @FindBy(xpath = "//title")
    public WebElement title;

    @FindBy(xpath = "//select[@name='Questions[14].Value']")
    public WebElement selectButton;

    @FindBy(css = "[name='Questions[15].Value']")
    public WebElement firstName;

    @FindBy(css = "[name='Questions[16].Value']")
    public WebElement surname;

    @FindBy(css = "[name='Questions[17].Value']")
    public WebElement emailAddress;

    @FindBy(xpath = "(//*[contains(@class,'validation-error')])[1]")  // or //*[contains(@class,'input-validation-error')]
    public WebElement emailWithError;

    @FindBy(xpath = "(//*[contains(@class,'form-control valid')])[1]")
    public WebElement emailWithoutError;

    @FindBy(css = "[name='Questions[18].Value']")
    public WebElement confirmEmailAddress;

    @FindBy(xpath = "(//*[contains(@class,'form-control valid')])[2]")
    public WebElement emailMatchingLocator;

    @FindBy(xpath = "//*[text()='Confirm Email Address: does not match']") // or //*[contains(@class,'input-validation-error')]
    public WebElement confInvEmailAddMessage;

    @FindBy(css = "[name='Questions[19].Value']")
    public WebElement telephoneNumber;

    @FindBy(xpath = "(//*[contains(@class,'dd form-control')])[1]")
    public WebElement dayOfBirth;

    @FindBy(xpath = "(//*[contains(@class,'mm form-control')])[1]")
    public WebElement monthOfBirth;

    @FindBy(xpath = "(//*[contains(@class,'yyyy form-control')])[1]")
    public WebElement yearOfBirth;

    @FindBy(xpath = "//*[contains(text(),'aged between 18 and 70')]") // or //*[contains(@class,'input-validation-error')]
    public WebElement dateErrorMessage;

    @FindBy(xpath = "(//input[@type='checkbox'])[1]")
    public WebElement residentCheckbox;

    @FindBy(xpath = "//*[contains(@class,'Postcode')]")
    public WebElement postcode;

    @FindBy(xpath = "//*[text()='Find Address']")
    public WebElement findAddress;

    @FindBy(xpath = "//*[contains(@class,'search-results-address')]")
    public WebElement searchResultAddress;

    @FindBy(xpath = "//*[contains(@class,'search-results-address')]/option")
    public List<WebElement> addressOptions;

    @FindBy(xpath = "//select[@name='Questions[58].Value']")
    public WebElement selectPaymentDay;

    @FindBy(xpath = "//input[@name='Questions[59].Value']" )
    public WebElement accountHolder;

    @FindBy(xpath = "//input[@name='Questions[60].Value']")
    public WebElement accountNumber;

    @FindBy(css = "[name='Questions[61].Value']")
    public WebElement sortCode;

    @FindBy(xpath = "(//*[contains(@class,'validation-error')])[1]")  // or //*[contains(@class,'input-validation-error')]
    public WebElement errorAccountNum;

    @FindBy(xpath = "(//*[contains(@class,'validation-error')])[3]") // or //*[contains(@class,'input-validation-error')]
    public WebElement errorSortCode;

    @FindBy(xpath = "//*[@name='Questions[62].Value'][1]")
    public WebElement confirmAccHolder;

    @FindBy(xpath = "//select[@name='Questions[63].Value']")
    public WebElement selectAboutHear;

    @FindBy(id = "continueButton")
    public WebElement continueButton;

    @FindBy(xpath = "//h2")
    public WebElement quoteConfirmation;


    public String getPageTitle(){
        title.getText();
        return Driver.get().getTitle();
    }


    public void copmletionMyDetails(){
        BrowserUtils.waitForClickablility(selectButton,15);
        Select select =new Select(selectButton);
        select.selectByValue("Mr");
        BrowserUtils.waitForClickablility(firstName,10);
        firstName.sendKeys("John");
        surname.sendKeys("Smith");
        emailAddress.sendKeys("john@gmail.com");
        confirmEmailAddress.sendKeys("john@gmail.com");
        telephoneNumber.sendKeys("07776084567"); //it is accept letter as well (So, it is a bug)
        dayOfBirth.sendKeys("10");
        monthOfBirth.sendKeys("09");
        yearOfBirth.sendKeys("2002");
        residentCheckbox.click();
    }

    public List<WebElement> getAddressOptions(){
        searchResultAddress.click();
        List<WebElement> adressList= new ArrayList<>();
        for (WebElement address : addressOptions){
            adressList.add(address);
        }
        return adressList;
    }

    public void completionAboveDirectDebDetails(){
        copmletionMyDetails();
        postcode.sendKeys("M8 5SH");
        findAddress.click();
        BrowserUtils.waitForClickablility(searchResultAddress,20);
        Select select= new Select(searchResultAddress);
        select.selectByIndex(3);
    }

    public void invalidAccNumAndSortCode(){
        Select select= new Select(selectPaymentDay);
        select.selectByValue("4");
        accountHolder.sendKeys("John Smith");
        accountNumber.sendKeys("1234567"); //invalid acc. number
        sortCode.sendKeys("05-98-0");      //invalid sort code
        confirmAccHolder.click();

    }

    public void validDirectDebitDetails(){
        Select select= new Select(selectPaymentDay);
        select.selectByValue("4");
        accountHolder.sendKeys("John Smith");
        accountNumber.sendKeys("12345678");
        sortCode.sendKeys("05-98-03");
        confirmAccHolder.click();
        Select sel = new Select(selectAboutHear);
        sel.selectByIndex(2);
        BrowserUtils.wait(3);
    }


    public void negativeScenario(String fName, String sName, String email, String phone, String dayOB, String monthOB, String yearOB, String postC, String accNum, String sortCod){

        BrowserUtils.waitForClickablility(selectButton,15);
        Select select =new Select(selectButton);
        select.selectByValue("Mr");
        BrowserUtils.waitForClickablility(firstName,10);
        firstName.sendKeys(fName);
        surname.sendKeys(sName);
        emailAddress.sendKeys(email);
        confirmEmailAddress.sendKeys(email);
        telephoneNumber.sendKeys(phone);
        dayOfBirth.sendKeys(dayOB);
        monthOfBirth.sendKeys(monthOB);
        yearOfBirth.sendKeys(yearOB);
        residentCheckbox.click();
        postcode.sendKeys(postC);
        findAddress.click();
        BrowserUtils.waitForClickablility(searchResultAddress,20);
        Select select1= new Select(searchResultAddress);
        select1.selectByIndex(3);
        Select select2= new Select(selectPaymentDay);
        select2.selectByValue("4");
        accountHolder.sendKeys(fName + " " +sName);
        accountNumber.sendKeys(accNum);
        sortCode.sendKeys(sortCod);
        confirmAccHolder.click();
        Select sel = new Select(selectAboutHear);
        sel.selectByIndex(2);
        BrowserUtils.wait(3);
        //click_continue();
    }




}
