$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Quote.feature");
formatter.feature({
  "name": "Covea Scenarios",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@quote"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the quote page",
  "keyword": "Given "
});
formatter.match({
  "location": "QuotePageSteps.the_user_is_on_the_quote_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "A invalid email address is entered",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@quote"
    }
  ]
});
formatter.step({
  "name": "an invalid email address is entered",
  "keyword": "When "
});
formatter.match({
  "location": "QuotePageSteps.an_invalid_email_address_is_entered()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "an error is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "QuotePageSteps.an_error_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the quote page",
  "keyword": "Given "
});
formatter.match({
  "location": "QuotePageSteps.the_user_is_on_the_quote_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "A valid email address is entered",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@quote"
    }
  ]
});
formatter.step({
  "name": "a valid email address is entered",
  "keyword": "When "
});
formatter.match({
  "location": "QuotePageSteps.a_valid_email_address_is_entered()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "no error is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "QuotePageSteps.no_error_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});