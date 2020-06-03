const AWS = require('aws-sdk');
const dotenv = require('dotenv');

dotenv.config({ path: '../config.env' });

const pinPoint = new AWS.Pinpoint({
  accessKeyId: process.env.ACCESS_KEY,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  region: process.env.REGION
});

// phone number should be in E.164 format.
const phoneNumbers = '+91XXXXXXXXXX';

// time-sensitive content, ==> TRANSACTIONAL.
// marketing-related content ==> PROMOTIONAL.
const MessageType = 'TRANSACTIONAL';

const params = {
  ApplicationId: process.env.APPLICATION_ID,
  MessageRequest: {
    Addresses: {
      [phoneNumbers]: {
        ChannelType: 'SMS'
      }
    },
    MessageConfiguration: {
      SMSMessage: {
        Body: 'Hello User, This is a test message',
        MessageType,

        // OPTIONAL PARAMETERS
        Keyword: '',
        OriginationNumber: '',
        SenderId: ''
      }
    }
  }
};

/**
 * sendMessages function takes in a params object &
 * a callback which retruns a response and an error
 */
pinPoint.sendMessages(params, (err, data) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log('Message Sent!');
  }
});
