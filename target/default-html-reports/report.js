$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features2/QuoteNegative.feature");
formatter.feature({
  "name": "Covea Scenarios",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Quote Negative Scenarios",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@negative"
    }
  ]
});
formatter.step({
  "name": "the user insert invalid \"\u003cfirstName\u003e\" or \"\u003csurname\u003e\" or \"\u003cemailAddress\u003e\" or \"\u003cphoneNumber\u003e\" or \"\u003cdayOB\u003e\" or \"\u003cmonthOB\u003e\" or \"\u003cyearOB\u003e\" or \"\u003cpostcode\u003e\" or \"\u003caccNumber\u003e\" or \"\u003csortCode\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "an error is displayed",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "firstName",
        "surname",
        "emailAddress",
        "phoneNumber",
        "dayOB",
        "monthOB",
        "yearOB",
        "postcode",
        "accNumber",
        "sortCode"
      ]
    },
    {
      "cells": [
        "Goksa1",
        "Cavdar",
        "goksal@gmail.com",
        "07776084567",
        "05",
        "01",
        "2001",
        "M8 5SH",
        "12345678",
        "05-98-03"
      ]
    },
    {
      "cells": [
        "Goks?",
        "Cavdar",
        "goksal@gmail.com",
        "07776084567",
        "05",
        "01",
        "2001",
        "M8 5SH",
        "12345678",
        "05-98-03"
      ]
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
  "name": "Quote Negative Scenarios",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@negative"
    }
  ]
});
formatter.step({
  "name": "the user insert invalid \"Goksa1\" or \"Cavdar\" or \"goksal@gmail.com\" or \"07776084567\" or \"05\" or \"01\" or \"2001\" or \"M8 5SH\" or \"12345678\" or \"05-98-03\"",
  "keyword": "When "
});
formatter.match({
  "location": "QuotePageSteps.theUserInsertInvalidOrOrOrOrOrOrOrOrOrOr(String,String,String,String,String,String,String,String,String,String)"
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
  "name": "Quote Negative Scenarios",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@negative"
    }
  ]
});
formatter.step({
  "name": "the user insert invalid \"Goks?\" or \"Cavdar\" or \"goksal@gmail.com\" or \"07776084567\" or \"05\" or \"01\" or \"2001\" or \"M8 5SH\" or \"12345678\" or \"05-98-03\"",
  "keyword": "When "
});
formatter.match({
  "location": "QuotePageSteps.theUserInsertInvalidOrOrOrOrOrOrOrOrOrOr(String,String,String,String,String,String,String,String,String,String)"
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
});