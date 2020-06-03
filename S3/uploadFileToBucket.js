const AWS = require('aws-sdk');
const dotenv = require('dotenv');

// Import ENV Variables
dotenv.config({ path: '../config.env' });

// Initialize S3 instance
const S3 = new AWS.S3({
  accessKeyId: process.env.ACCESS_KEY,
  secretAccessKey: process.env.SECRET_ACCESS_KEY
});

S3.upload(
  {
    Bucket: process.env.S3_BUCKET_NAME,
    Key: 'fileName.csv', // File name
    Body: './data.csv', // File
    ACL: 'public-read' // File Permissions
  },
  (err, res) => {
    if (err) {
      console.log(err.message);
    } else {
      console.log('File uploaded!');
    }
  }
);
