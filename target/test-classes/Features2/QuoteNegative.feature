Feature: Covea Scenarios

  Background:
    Given the user is on the quote page

  @negative
  Scenario Outline: Quote Negative Scenarios
    When the user insert invalid "<firstName>" or "<surname>" or "<emailAddress>" or "<phoneNumber>" or "<dayOB>" or "<monthOB>" or "<yearOB>" or "<postcode>" or "<accNumber>" or "<sortCode>"
    Then an error is displayed


    Examples:
      | firstName | surname | emailAddress     | phoneNumber     | dayOB | monthOB | yearOB | postcode | accNumber | sortCode  |
    #  | Goksa    | Cavdar  | goksal@gmail.com | 07776084567     | 05    | 01      | 2001   | M8 5SH   | 12345678  | 05-98-03  |

      #firstname
      | Goksa1    | Cavdar  | goksal@gmail.com | 07776084567     | 05    | 01      | 2001   | M8 5SH   | 12345678  | 05-98-03  |
      | Goks?     | Cavdar  | goksal@gmail.com | 07776084567     | 05    | 01      | 2001   | M8 5SH   | 12345678  | 05-98-03  |
      | @oksa     | Cavdar  | goksal@gmail.com | 07776084567     | 05    | 01      | 2001   | M8 5SH   | 12345678  | 05-98-03  |
      |           | Cavdar  | goksal@gmail.com | 07776084567     | 05    | 01      | 2001   | M8 5SH   | 12345678  | 05-98-03  |
      | 8oksa     | Cavdar  | goksal@gmail.com | 07776084567     | 05    | 01      | 2001   | M8 5SH   | 12345678  | 05-98-03  |

      #surname
      | Goksa     | Cav7ar  | goksal@gmail.com | 07776084567     | 05    | 01      | 2001   | M8 5SH   | 12345678  | 05-98-03  |
      | Goksa     | @avdar  | goksal@gmail.com | 07776084567     | 05    | 01      | 2001   | M8 5SH   | 12345678  | 05-98-03  |
      | Goksa     | Cavda;  | goksal@gmail.com | 07776084567     | 05    | 01      | 2001   | M8 5SH   | 12345678  | 05-98-03  |
      | Goksa     |         | goksal@gmail.com | 07776084567     | 05    | 01      | 2001   | M8 5SH   | 12345678  | 05-98-03  |
      | Goksa     | 9avdar  | goksal@gmail.com | 07776084567     | 05    | 01      | 2001   | M8 5SH   | 12345678  | 05-98-03  |

      #emailAddress
      | Goksa     | Cavdar  | goksal@gmailcom  | 07776084567     | 05    | 01      | 2001   | M8 5SH   | 12345678  | 05-98-03  |
      | Goksa     | Cavdar  | goksalgmail.com  | 07776084567     | 05    | 01      | 2001   | M8 5SH   | 12345678  | 05-98-03  |
      | Goksa     | Cavdar  | @goksalgmail.com | 07776084567     | 05    | 01      | 2001   | M8 5SH   | 12345678  | 05-98-03  |
      | Goksa     | Cavdar  | goksalgmail.com@ | 07776084567     | 05    | 01      | 2001   | M8 5SH   | 12345678  | 05-98-03  |
      | Goksa     | Cavdar  | gok.sal@gmailcom | 07776084567     | 05    | 01      | 2001   | M8 5SH   | 12345678  | 05-98-03  |

      #phoneNumber
      | Goksa     | Cavdar  | goksal@gmail.com | a7776084567     | 05    | 01      | 2001   | M8 5SH   | 12345678  | 05-98-03  |
      | Goksa     | Cavdar  | goksal@gmail.com | ?7776084567     | 05    | 01      | 2001   | M8 5SH   | 12345678  | 05-98-03  |
      | Goksa     | Cavdar  | goksal@gmail.com | 0777608uu67     | 05    | 01      | 2001   | M8 5SH   | 12345678  | 05-98-03  |
      | Goksa     | Cavdar  | goksal@gmail.com | 0777608456?     | 05    | 01      | 2001   | M8 5SH   | 12345678  | 05-98-03  |
      | Goksa     | Cavdar  | goksal@gmail.com | 077760845679768 | 05    | 01      | 2001   | M8 5SH   | 12345678  | 05-98-03  |
      | Goksa     | Cavdar  | goksal@gmail.com | 87776084567     | 05    | 01      | 2001   | M8 5SH   | 12345678  | 05-98-03  |
      | Goksa     | Cavdar  | goksal@gmail.com | +7776084567     | 05    | 01      | 2001   | M8 5SH   | 12345678  | 05-98-03  |

      #dayOB
      | Goksa     | Cavdar  | goksal@gmail.com | 07776084567     | k5    | 01      | 2001   | M8 5SH   | 12345678  | 05-98-03  |
      | Goksa     | Cavdar  | goksal@gmail.com | 07776084567     | 0j    | 01      | 2001   | M8 5SH   | 12345678  | 05-98-03  |
      | Goksa     | Cavdar  | goksal@gmail.com | 07776084567     | nn    | 01      | 2001   | M8 5SH   | 12345678  | 05-98-03  |
      | Goksa     | Cavdar  | goksal@gmail.com | 07776084567     | 0?    | 01      | 2001   | M8 5SH   | 12345678  | 05-98-03  |
      | Goksa     | Cavdar  | goksal@gmail.com | 07776084567     | -02   | 01      | 2001   | M8 5SH   | 12345678  | 05-98-03  |
      | Goksa     | Cavdar  | goksal@gmail.com | 07776084567     | 32    | 01      | 2001   | M8 5SH   | 12345678  | 05-98-03  |
      | Goksa     | Cavdar  | goksal@gmail.com | 07776084567     |       | 01      | 2001   | M8 5SH   | 12345678  | 05-98-03  |

      #monthOB
      | Goksa     | Cavdar  | goksal@gmail.com | 07776084567     | 05    | jj      | 2001   | M8 5SH   | 12345678  | 05-98-03  |
      | Goksa     | Cavdar  | goksal@gmail.com | 07776084567     | 05    | ;1      | 2001   | M8 5SH   | 12345678  | 05-98-03  |
      | Goksa     | Cavdar  | goksal@gmail.com | 07776084567     | 05    | 0?      | 2001   | M8 5SH   | 12345678  | 05-98-03  |
      | Goksa     | Cavdar  | goksal@gmail.com | 07776084567     | 05    | -1      | 2001   | M8 5SH   | 12345678  | 05-98-03  |
      | Goksa     | Cavdar  | goksal@gmail.com | 07776084567     | 05    | 13      | 2001   | M8 5SH   | 12345678  | 05-98-03  |
      | Goksa     | Cavdar  | goksal@gmail.com | 07776084567     | 05    | 00      | 2001   | M8 5SH   | 12345678  | 05-98-03  |
      | Goksa     | Cavdar  | goksal@gmail.com | 07776084567     | 05    |         | 2001   | M8 5SH   | 12345678  | 05-98-03  |

      #yearOB
      | Goksa     | Cavdar  | goksal@gmail.com | 07776084567     | 05    | 01      | 200    | M8 5SH   | 12345678  | 05-98-03  |
      | Goksa     | Cavdar  | goksal@gmail.com | 07776084567     | 05    | 01      | 200p   | M8 5SH   | 12345678  | 05-98-03  |
      | Goksa     | Cavdar  | goksal@gmail.com | 07776084567     | 05    | 01      | K001   | M8 5SH   | 12345678  | 05-98-03  |
      | Goksa     | Cavdar  | goksal@gmail.com | 07776084567     | 05    | 01      | 20"1   | M8 5SH   | 12345678  | 05-98-03  |
      | Goksa     | Cavdar  | goksal@gmail.com | 07776084567     | 05    | 01      |        | M8 5SH   | 12345678  | 05-98-03  |
      | Goksa     | Cavdar  | goksal@gmail.com | 07776084567     | 05    | 01      | -2001  | M8 5SH   | 12345678  | 05-98-03  |

      #postcode
      | Goksa     | Cavdar  | goksal@gmail.com | 07776084567     | 05    | 01      | 2001   | 88 5SH   | 12345678  | 05-98-03  |
      | Goksa     | Cavdar  | goksal@gmail.com | 07776084567     | 05    | 01      | 2001   | M8 5S1   | 12345678  | 05-98-03  |
      | Goksa     | Cavdar  | goksal@gmail.com | 07776084567     | 05    | 01      | 2001   | M8 -5SH  | 12345678  | 05-98-03  |
      | Goksa     | Cavdar  | goksal@gmail.com | 07776084567     | 05    | 01      | 2001   | M8 5S:   | 12345678  | 05-98-03  |
      | Goksa     | Cavdar  | goksal@gmail.com | 07776084567     | 05    | 01      | 2001   | ^8 5SH   | 12345678  | 05-98-03  |
      | Goksa     | Cavdar  | goksal@gmail.com | 07776084567     | 05    | 01      | 2001   |          | 12345678  | 05-98-03  |

      #accNum
      | Goksa     | Cavdar  | goksal@gmail.com | 07776084567     | 05    | 01      | 2001   | M8 5SH   | 123456787 | 05-98-03  |
      | Goksa     | Cavdar  | goksal@gmail.com | 07776084567     | 05    | 01      | 2001   | M8 5SH   | -12345678 | 05-98-03  |
      | Goksa     | Cavdar  | goksal@gmail.com | 07776084567     | 05    | 01      | 2001   | M8 5SH   | 1234567K  | 05-98-03  |
      | Goksa     | Cavdar  | goksal@gmail.com | 07776084567     | 05    | 01      | 2001   | M8 5SH   | @2345678  | 05-98-03  |
      | Goksa     | Cavdar  | goksal@gmail.com | 07776084567     | 05    | 01      | 2001   | M8 5SH   | 1234567   | 05-98-03  |
      | Goksa     | Cavdar  | goksal@gmail.com | 07776084567     | 05    | 01      | 2001   | M8 5SH   |           | 05-98-03  |

      #postCode
      | Goksa     | Cavdar  | goksal@gmail.com | 07776084567     | 05    | 01      | 2001   | M8 5SH   | 12345678  | 05-98-01  |
      | Goksa     | Cavdar  | goksal@gmail.com | 07776084567     | 05    | 01      | 2001   | M8 5SH   | 12345678  | 05-98-0?  |
      | Goksa     | Cavdar  | goksal@gmail.com | 07776084567     | 05    | 01      | 2001   | M8 5SH   | 12345678  | 05-9803   |
      | Goksa     | Cavdar  | goksal@gmail.com | 07776084567     | 05    | 01      | 2001   | M8 5SH   | 12345678  | ?5-98-03  |
      | Goksa     | Cavdar  | goksal@gmail.com | 07776084567     | 05    | 01      | 2001   | M8 5SH   | 12345678  | 05-nn-03  |
      | Goksa     | Cavdar  | goksal@gmail.com | 07776084567     | 05    | 01      | 2001   | M8 5SH   | 12345678  |           |
      | Goksa     | Cavdar  | goksal@gmail.com | 07776084567     | 05    | 01      | 2001   | M8 5SH   | 12345678  | -05-98-03 |
      | Goksa     | Cavdar  | goksal@gmail.com | 07776084567     | 05    | 01      | 2001   | M8 5SH   | 12345678  | 05/98/03  |
      | Goksa     | Cavdar  | goksal@gmail.com | 07776084567     | 05    | 01      | 2001   | M8 5SH   | 12345678  | 05-98-    |

