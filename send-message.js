// Demo how to send message to SQS queue
// API reference https://docs.aws.amazon.com/AWSSimpleQueueService/latest/APIReference/API_SendMessage.html
require('dotenv').config()

var AWS = require('aws-sdk');
var uuid = require('uuid');

var credentials = new AWS.SharedIniFileCredentials({profile: process.env.AWSTIO_AWS_PROFILE});
AWS.config.credentials = credentials;

// Set the region 
AWS.config.update({region: process.env.AWSTIO_AWS_REGION});

// Create an SQS service object
var sqs = new AWS.SQS({apiVersion: '2012-11-05'});
var messageBody = {
    messageID: uuid.v4(),
    collectionID: 1,
    status: "success",
}
var queueURL = process.env.AWSTIO_CONTRACT_DEPLOYMENT_QUEUE_URL;
var params = {
    DelaySeconds: 5, // in seconds
    MessageBody: JSON.stringify(messageBody),
    QueueUrl: queueURL,
};

sqs.sendMessage(params, function(err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Success", data.MessageId);
    }
  });