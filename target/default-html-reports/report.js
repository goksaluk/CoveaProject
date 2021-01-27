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
    },
    {
      "cells": [
        "@oksa",
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
        "",
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
        "8oksa",
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
        "Goksa",
        "Cav7ar",
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
        "Goksa",
        "@avdar",
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
        "Goksa",
        "Cavda;",
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
        "Goksa",
        "",
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
        "Goksa",
        "9avdar",
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
        "Goksa",
        "Cavdar",
        "goksal@gmailcom",
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
        "Goksa",
        "Cavdar",
        "goksalgmail.com",
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
        "Goksa",
        "Cavdar",
        "@goksalgmail.com",
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
        "Goksa",
        "Cavdar",
        "goksalgmail.com@",
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
        "Goksa",
        "Cavdar",
        "gok.sal@gmailcom",
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
        "Goksa",
        "Cavdar",
        "goksal@gmail.com",
        "a7776084567",
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
        "Goksa",
        "Cavdar",
        "goksal@gmail.com",
        "?7776084567",
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
        "Goksa",
        "Cavdar",
        "goksal@gmail.com",
        "0777608uu67",
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
        "Goksa",
        "Cavdar",
        "goksal@gmail.com",
        "0777608456?",
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
        "Goksa",
        "Cavdar",
        "goksal@gmail.com",
        "077760845679768",
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
        "Goksa",
        "Cavdar",
        "goksal@gmail.com",
        "87776084567",
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
        "Goksa",
        "Cavdar",
        "goksal@gmail.com",
        "+7776084567",
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
        "Goksa",
        "Cavdar",
        "goksal@gmail.com",
        "07776084567",
        "k5",
        "01",
        "2001",
        "M8 5SH",
        "12345678",
        "05-98-03"
      ]
    },
    {
      "cells": [
        "Goksa",
        "Cavdar",
        "goksal@gmail.com",
        "07776084567",
        "0j",
        "01",
        "2001",
        "M8 5SH",
        "12345678",
        "05-98-03"
      ]
    },
    {
      "cells": [
        "Goksa",
        "Cavdar",
        "goksal@gmail.com",
        "07776084567",
        "nn",
        "01",
        "2001",
        "M8 5SH",
        "12345678",
        "05-98-03"
      ]
    },
    {
      "cells": [
        "Goksa",
        "Cavdar",
        "goksal@gmail.com",
        "07776084567",
        "0?",
        "01",
        "2001",
        "M8 5SH",
        "12345678",
        "05-98-03"
      ]
    },
    {
      "cells": [
        "Goksa",
        "Cavdar",
        "goksal@gmail.com",
        "07776084567",
        "-02",
        "01",
        "2001",
        "M8 5SH",
        "12345678",
        "05-98-03"
      ]
    },
    {
      "cells": [
        "Goksa",
        "Cavdar",
        "goksal@gmail.com",
        "07776084567",
        "32",
        "01",
        "2001",
        "M8 5SH",
        "12345678",
        "05-98-03"
      ]
    },
    {
      "cells": [
        "Goksa",
        "Cavdar",
        "goksal@gmail.com",
        "07776084567",
        "",
        "01",
        "2001",
        "M8 5SH",
        "12345678",
        "05-98-03"
      ]
    },
    {
      "cells": [
        "Goksa",
        "Cavdar",
        "goksal@gmail.com",
        "07776084567",
        "05",
        "jj",
        "2001",
        "M8 5SH",
        "12345678",
        "05-98-03"
      ]
    },
    {
      "cells": [
        "Goksa",
        "Cavdar",
        "goksal@gmail.com",
        "07776084567",
        "05",
        ";1",
        "2001",
        "M8 5SH",
        "12345678",
        "05-98-03"
      ]
    },
    {
      "cells": [
        "Goksa",
        "Cavdar",
        "goksal@gmail.com",
        "07776084567",
        "05",
        "0?",
        "2001",
        "M8 5SH",
        "12345678",
        "05-98-03"
      ]
    },
    {
      "cells": [
        "Goksa",
        "Cavdar",
        "goksal@gmail.com",
        "07776084567",
        "05",
        "-1",
        "2001",
        "M8 5SH",
        "12345678",
        "05-98-03"
      ]
    },
    {
      "cells": [
        "Goksa",
        "Cavdar",
        "goksal@gmail.com",
        "07776084567",
        "05",
        "13",
        "2001",
        "M8 5SH",
        "12345678",
        "05-98-03"
      ]
    },
    {
      "cells": [
        "Goksa",
        "Cavdar",
        "goksal@gmail.com",
        "07776084567",
        "05",
        "00",
        "2001",
        "M8 5SH",
        "12345678",
        "05-98-03"
      ]
    },
    {
      "cells": [
        "Goksa",
        "Cavdar",
        "goksal@gmail.com",
        "07776084567",
        "05",
        "",
        "2001",
        "M8 5SH",
        "12345678",
        "05-98-03"
      ]
    },
    {
      "cells": [
        "Goksa",
        "Cavdar",
        "goksal@gmail.com",
        "07776084567",
        "05",
        "01",
        "200",
        "M8 5SH",
        "12345678",
        "05-98-03"
      ]
    },
    {
      "cells": [
        "Goksa",
        "Cavdar",
        "goksal@gmail.com",
        "07776084567",
        "05",
        "01",
        "200p",
        "M8 5SH",
        "12345678",
        "05-98-03"
      ]
    },
    {
      "cells": [
        "Goksa",
        "Cavdar",
        "goksal@gmail.com",
        "07776084567",
        "05",
        "01",
        "K001",
        "M8 5SH",
        "12345678",
        "05-98-03"
      ]
    },
    {
      "cells": [
        "Goksa",
        "Cavdar",
        "goksal@gmail.com",
        "07776084567",
        "05",
        "01",
        "20\"1",
        "M8 5SH",
        "12345678",
        "05-98-03"
      ]
    },
    {
      "cells": [
        "Goksa",
        "Cavdar",
        "goksal@gmail.com",
        "07776084567",
        "05",
        "01",
        "",
        "M8 5SH",
        "12345678",
        "05-98-03"
      ]
    },
    {
      "cells": [
        "Goksa",
        "Cavdar",
        "goksal@gmail.com",
        "07776084567",
        "05",
        "01",
        "-2001",
        "M8 5SH",
        "12345678",
        "05-98-03"
      ]
    },
    {
      "cells": [
        "Goksa",
        "Cavdar",
        "goksal@gmail.com",
        "07776084567",
        "05",
        "01",
        "2001",
        "88 5SH",
        "12345678",
        "05-98-03"
      ]
    },
    {
      "cells": [
        "Goksa",
        "Cavdar",
        "goksal@gmail.com",
        "07776084567",
        "05",
        "01",
        "2001",
        "M8 5S1",
        "12345678",
        "05-98-03"
      ]
    },
    {
      "cells": [
        "Goksa",
        "Cavdar",
        "goksal@gmail.com",
        "07776084567",
        "05",
        "01",
        "2001",
        "M8 -5SH",
        "12345678",
        "05-98-03"
      ]
    },
    {
      "cells": [
        "Goksa",
        "Cavdar",
        "goksal@gmail.com",
        "07776084567",
        "05",
        "01",
        "2001",
        "M8 5S:",
        "12345678",
        "05-98-03"
      ]
    },
    {
      "cells": [
        "Goksa",
        "Cavdar",
        "goksal@gmail.com",
        "07776084567",
        "05",
        "01",
        "2001",
        "^8 5SH",
        "12345678",
        "05-98-03"
      ]
    },
    {
      "cells": [
        "Goksa",
        "Cavdar",
        "goksal@gmail.com",
        "07776084567",
        "05",
        "01",
        "2001",
        "",
        "12345678",
        "05-98-03"
      ]
    },
    {
      "cells": [
        "Goksa",
        "Cavdar",
        "goksal@gmail.com",
        "07776084567",
        "05",
        "01",
        "2001",
        "M8 5SH",
        "123456787",
        "05-98-03"
      ]
    },
    {
      "cells": [
        "Goksa",
        "Cavdar",
        "goksal@gmail.com",
        "07776084567",
        "05",
        "01",
        "2001",
        "M8 5SH",
        "-12345678",
        "05-98-03"
      ]
    },
    {
      "cells": [
        "Goksa",
        "Cavdar",
        "goksal@gmail.com",
        "07776084567",
        "05",
        "01",
        "2001",
        "M8 5SH",
        "1234567K",
        "05-98-03"
      ]
    },
    {
      "cells": [
        "Goksa",
        "Cavdar",
        "goksal@gmail.com",
        "07776084567",
        "05",
        "01",
        "2001",
        "M8 5SH",
        "@2345678",
        "05-98-03"
      ]
    },
    {
      "cells": [
        "Goksa",
        "Cavdar",
        "goksal@gmail.com",
        "07776084567",
        "05",
        "01",
        "2001",
        "M8 5SH",
        "1234567",
        "05-98-03"
      ]
    },
    {
      "cells": [
        "Goksa",
        "Cavdar",
        "goksal@gmail.com",
        "07776084567",
        "05",
        "01",
        "2001",
        "M8 5SH",
        "",
        "05-98-03"
      ]
    },
    {
      "cells": [
        "Goksa",
        "Cavdar",
        "goksal@gmail.com",
        "07776084567",
        "05",
        "01",
        "2001",
        "M8 5SH",
        "12345678",
        "05-98-01"
      ]
    },
    {
      "cells": [
        "Goksa",
        "Cavdar",
        "goksal@gmail.com",
        "07776084567",
        "05",
        "01",
        "2001",
        "M8 5SH",
        "12345678",
        "05-98-0?"
      ]
    },
    {
      "cells": [
        "Goksa",
        "Cavdar",
        "goksal@gmail.com",
        "07776084567",
        "05",
        "01",
        "2001",
        "M8 5SH",
        "12345678",
        "05-9803"
      ]
    },
    {
      "cells": [
        "Goksa",
        "Cavdar",
        "goksal@gmail.com",
        "07776084567",
        "05",
        "01",
        "2001",
        "M8 5SH",
        "12345678",
        "?5-98-03"
      ]
    },
    {
      "cells": [
        "Goksa",
        "Cavdar",
        "goksal@gmail.com",
        "07776084567",
        "05",
        "01",
        "2001",
        "M8 5SH",
        "12345678",
        "05-nn-03"
      ]
    },
    {
      "cells": [
        "Goksa",
        "Cavdar",
        "goksal@gmail.com",
        "07776084567",
        "05",
        "01",
        "2001",
        "M8 5SH",
        "12345678",
        ""
      ]
    },
    {
      "cells": [
        "Goksa",
        "Cavdar",
        "goksal@gmail.com",
        "07776084567",
        "05",
        "01",
        "2001",
        "M8 5SH",
        "12345678",
        "-05-98-03"
      ]
    },
    {
      "cells": [
        "Goksa",
        "Cavdar",
        "goksal@gmail.com",
        "07776084567",
        "05",
        "01",
        "2001",
        "M8 5SH",
        "12345678",
        "05/98/03"
      ]
    },
    {
      "cells": [
        "Goksa",
        "Cavdar",
        "goksal@gmail.com",
        "07776084567",
        "05",
        "01",
        "2001",
        "M8 5SH",
        "12345678",
        "05-98-"
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
  "name": "the user insert invalid \"@oksa\" or \"Cavdar\" or \"goksal@gmail.com\" or \"07776084567\" or \"05\" or \"01\" or \"2001\" or \"M8 5SH\" or \"12345678\" or \"05-98-03\"",
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
  "name": "the user insert invalid \"\" or \"Cavdar\" or \"goksal@gmail.com\" or \"07776084567\" or \"05\" or \"01\" or \"2001\" or \"M8 5SH\" or \"12345678\" or \"05-98-03\"",
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"(//*[contains(@class,\u0027validation-error\u0027)])[1]\"}\n  (Session info: chrome\u003d88.0.4324.96)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u002700136C\u0027, ip: \u0027fe80:0:0:0:474:b45a:e7d9:f80a%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.7\u0027, java.version: \u002712.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.96, chrome: {chromedriverVersion: 88.0.4324.27 (6347fe8bf1e48..., userDataDir: /var/folders/8d/2k8k0_ns53q...}, goog:chromeOptions: {debuggerAddress: localhost:56484}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 620f7f48b246dc65131ae5f83b28f20c\n*** Element info: {Using\u003dxpath, value\u003d(//*[contains(@class,\u0027validation-error\u0027)])[1]}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy21.isDisplayed(Unknown Source)\n\tat com.covea.step_definitions.QuotePageSteps.an_error_is_displayed(QuotePageSteps.java:32)\n\tat ✽.an error is displayed(file:src/test/resources/features2/QuoteNegative.feature:9)\n",
  "status": "failed"
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
  "name": "the user insert invalid \"8oksa\" or \"Cavdar\" or \"goksal@gmail.com\" or \"07776084567\" or \"05\" or \"01\" or \"2001\" or \"M8 5SH\" or \"12345678\" or \"05-98-03\"",
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
  "name": "the user insert invalid \"Goksa\" or \"Cav7ar\" or \"goksal@gmail.com\" or \"07776084567\" or \"05\" or \"01\" or \"2001\" or \"M8 5SH\" or \"12345678\" or \"05-98-03\"",
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
  "name": "the user insert invalid \"Goksa\" or \"@avdar\" or \"goksal@gmail.com\" or \"07776084567\" or \"05\" or \"01\" or \"2001\" or \"M8 5SH\" or \"12345678\" or \"05-98-03\"",
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
  "name": "the user insert invalid \"Goksa\" or \"Cavda;\" or \"goksal@gmail.com\" or \"07776084567\" or \"05\" or \"01\" or \"2001\" or \"M8 5SH\" or \"12345678\" or \"05-98-03\"",
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
  "name": "the user insert invalid \"Goksa\" or \"\" or \"goksal@gmail.com\" or \"07776084567\" or \"05\" or \"01\" or \"2001\" or \"M8 5SH\" or \"12345678\" or \"05-98-03\"",
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"(//*[contains(@class,\u0027validation-error\u0027)])[1]\"}\n  (Session info: chrome\u003d88.0.4324.96)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u002700136C\u0027, ip: \u0027fe80:0:0:0:474:b45a:e7d9:f80a%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.7\u0027, java.version: \u002712.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.96, chrome: {chromedriverVersion: 88.0.4324.27 (6347fe8bf1e48..., userDataDir: /var/folders/8d/2k8k0_ns53q...}, goog:chromeOptions: {debuggerAddress: localhost:56602}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: f19291075386bd20b01c5b061ceba466\n*** Element info: {Using\u003dxpath, value\u003d(//*[contains(@class,\u0027validation-error\u0027)])[1]}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy21.isDisplayed(Unknown Source)\n\tat com.covea.step_definitions.QuotePageSteps.an_error_is_displayed(QuotePageSteps.java:32)\n\tat ✽.an error is displayed(file:src/test/resources/features2/QuoteNegative.feature:9)\n",
  "status": "failed"
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
  "name": "the user insert invalid \"Goksa\" or \"9avdar\" or \"goksal@gmail.com\" or \"07776084567\" or \"05\" or \"01\" or \"2001\" or \"M8 5SH\" or \"12345678\" or \"05-98-03\"",
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
  "name": "the user insert invalid \"Goksa\" or \"Cavdar\" or \"goksal@gmailcom\" or \"07776084567\" or \"05\" or \"01\" or \"2001\" or \"M8 5SH\" or \"12345678\" or \"05-98-03\"",
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
  "name": "the user insert invalid \"Goksa\" or \"Cavdar\" or \"goksalgmail.com\" or \"07776084567\" or \"05\" or \"01\" or \"2001\" or \"M8 5SH\" or \"12345678\" or \"05-98-03\"",
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
  "name": "the user insert invalid \"Goksa\" or \"Cavdar\" or \"@goksalgmail.com\" or \"07776084567\" or \"05\" or \"01\" or \"2001\" or \"M8 5SH\" or \"12345678\" or \"05-98-03\"",
  "keyword": "When "
});
formatter.match({
  "location": "QuotePageSteps.theUserInsertInvalidOrOrOrOrOrOrOrOrOrOr(String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d88.0.4324.96)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u002700136C\u0027, ip: \u0027fe80:0:0:0:474:b45a:e7d9:f80a%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.7\u0027, java.version: \u002712.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.96, chrome: {chromedriverVersion: 88.0.4324.27 (6347fe8bf1e48..., userDataDir: /var/folders/8d/2k8k0_ns53q...}, goog:chromeOptions: {debuggerAddress: localhost:56694}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: af040f0bbbd0dfcf6e3790c20df5570b\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\n\tat org.openqa.selenium.remote.RemoteWebElement.sendKeys(RemoteWebElement.java:106)\n\tat jdk.internal.reflect.GeneratedMethodAccessor1.invoke(Unknown Source)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:567)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\n\tat com.sun.proxy.$Proxy21.sendKeys(Unknown Source)\n\tat com.covea.pages.QuotePage.negativeScenario(QuotePage.java:183)\n\tat com.covea.step_definitions.QuotePageSteps.theUserInsertInvalidOrOrOrOrOrOrOrOrOrOr(QuotePageSteps.java:147)\n\tat ✽.the user insert invalid \"Goksa\" or \"Cavdar\" or \"@goksalgmail.com\" or \"07776084567\" or \"05\" or \"01\" or \"2001\" or \"M8 5SH\" or \"12345678\" or \"05-98-03\"(file:src/test/resources/features2/QuoteNegative.feature:8)\n",
  "status": "failed"
});
formatter.step({
  "name": "an error is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "QuotePageSteps.an_error_is_displayed()"
});
formatter.result({
  "status": "skipped"
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
  "name": "the user insert invalid \"Goksa\" or \"Cavdar\" or \"goksalgmail.com@\" or \"07776084567\" or \"05\" or \"01\" or \"2001\" or \"M8 5SH\" or \"12345678\" or \"05-98-03\"",
  "keyword": "When "
});
formatter.match({
  "location": "QuotePageSteps.theUserInsertInvalidOrOrOrOrOrOrOrOrOrOr(String,String,String,String,String,String,String,String,String,String)"
});
