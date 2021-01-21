package com.covea.step_definitions;

import com.covea.pages.QuotePage;
import com.covea.utilities.BrowserUtils;
import io.cucumber.java.en.*;

import org.junit.Assert;

public class QuotePageSteps {


    QuotePage quotePage = new QuotePage();

    @Given("the user is on the quote page")
    public void the_user_is_on_the_quote_page() {
        quotePage.navigateToHomepage();
        quotePage.clickStart();
        String ExpectedPageTitle = "Application - Technical Test Automation";
        Assert.assertEquals(ExpectedPageTitle, quotePage.getPageTitle());
    }

    @When("an invalid email address is entered")
    public void an_invalid_email_address_is_entered() {
        BrowserUtils.waitForClickablility(quotePage.emailAddress, 15);
        quotePage.emailAddress.sendKeys("jhon@gmailcom");
    }

    @Then("an error is displayed")
    public void an_error_is_displayed() {
        quotePage.confirmEmailAddress.click();
        Assert.assertTrue(quotePage.emailWithError.isDisplayed());

//  Second approach:
//        String ExpectedInvMessage = "Email Address: is invalid";
//        Assert.assertEquals(ExpectedInvMessage, quotePage.invalidEmailMessage.getText());
    }

    @When("a valid email address is entered")
    public void a_valid_email_address_is_entered() {
        BrowserUtils.waitForClickablility(quotePage.emailAddress, 15);
        quotePage.emailAddress.sendKeys("jhon@gmail.com");
    }

    @Then("no error is displayed")
    public void no_error_is_displayed() {
        quotePage.confirmEmailAddress.click();
        Assert.assertTrue(quotePage.emailWithoutError.isDisplayed());
    }

    @When("a different valid confirm email address is entered")
    public void a_different_valid_confirm_email_address_is_entered() {

        quotePage.confirmEmailAddress.click();
        quotePage.confirmEmailAddress.sendKeys("jhon01@gmail.com");
    }

    @Then("an error for email is displayed")
    public void anErrorForEmailIsDisplayed() {
        quotePage.telephoneNumber.click();
        String ExpectedMessage = "Confirm Email Address: does not match";
        Assert.assertEquals(ExpectedMessage, quotePage.confInvEmailAddMessage.getText());
    }

    @When("the same valid confirm email address is entered")
    public void the_same_valid_confirm_email_address_is_entered() {

        quotePage.confirmEmailAddress.click();
        quotePage.confirmEmailAddress.sendKeys("jhon@gmail.com");
    }

    @Then("no error for email is displayed")
    public void noErrorForEmailIsDisplayed() {
        quotePage.telephoneNumber.click();
        Assert.assertTrue(quotePage.emailMatchingLocator.isDisplayed());
    }

    @When("an invalid date of birth is entered")
    public void an_invalid_date_of_birth_is_entered() {
        BrowserUtils.waitForClickablility(quotePage.dayOfBirth, 15);
        quotePage.dayOfBirth.sendKeys("12");
        quotePage.monthOfBirth.sendKeys("11");
        quotePage.yearOfBirth.sendKeys("2004");
    }

    @Then("an error for date of birth is displayed")
    public void anErrorForDateOfBirthIsDisplayed() {
        quotePage.residentCheckbox.click();
        String ExpectedMessage = "This policy is only available for people aged between 18 and 70";
        Assert.assertEquals(ExpectedMessage, quotePage.dateErrorMessage.getText());
    }

    @When("they complete the Your Details section")
    public void they_complete_the_Your_Details_section() {
        quotePage.copmletionMyDetails();
    }

    @When("enter a valid postcode and clicks find address")
    public void enter_a_valid_postcode_and_clicks_find_address() {
        quotePage.postcode.sendKeys("M8 5SH");
        quotePage.findAddress.click();
    }

    @Then("a list of addresses is shown")
    public void a_list_of_addresses_is_shown() {
        BrowserUtils.waitForClickablility(quotePage.searchResultAddress,15);
        quotePage.searchResultAddress.click();
        Assert.assertEquals(61,quotePage.getAddressOptions().size());
    }

    @When("they complete all sections above Direct Debit Details")
    public void they_complete_all_sections_above_Direct_Debit_Details() {
        quotePage.completionAboveDirectDebDetails();
    }

    @And("enter an invalid account number - sort code combination is entered")
    public void enterAnInvalidAccountNumberSortCodeCombinationIsEntered() {
        quotePage.invalidAccNumAndSortCode();
        Assert.assertTrue(quotePage.errorAccountNum.isDisplayed());
        Assert.assertTrue(quotePage.errorSortCode.isDisplayed());
    }

    @When("they complete all sections with valid information")
    public void they_complete_all_sections_with_valid_information() {
        quotePage.completionAboveDirectDebDetails();
        quotePage.validDirectDebitDetails();
    }

    @When("click continue")
    public void click_continue() {
        quotePage.continueButton.click();
    }

    @Then("the summary page is displayed")
    public void the_summary_page_is_displayed() {
        BrowserUtils.waitForVisibility(quotePage.quoteConfirmation,20);
        String ExpectedText = "Quote Confirmation";
        Assert.assertEquals(ExpectedText, quotePage.quoteConfirmation.getText());

    }


}
