## Send SMS via AWS PinPoint

Parameters that needs to be passed for sending SMS are explained here in details:

- `ApplicationId` - It is the Project Id which can be found on the PinPoint dashboard alongside of your project's name

- `Addresses` - Array of phone numbers, _Note: same message will be delivered to all the numbers passed here_.

- `MessageType` - Type of message you want to send

  - If your message is time sensitive, set it to `TRANSACTIONAL`
  - If you are sending marketing related messages you sould set it to `PROMOTIONAL`

  - Pricing Per Message _(as of 6 June 2020)_
    | TRANSACTIONAL | PROMOTIONAL |
    | ------------- | ----------- |
    | \$0.00223 | \$0.00223 |

    _These pricing are for India. If you want to check pricing for some other country_ [_refer this article_](https://aws.amazon.com/pinpoint/pricing/)

### Reference

Official AWS documentation for sending sms via aws pinpoint can be found [here](https://docs.aws.amazon.com/pinpoint/latest/developerguide/send-messages-sms.html)
