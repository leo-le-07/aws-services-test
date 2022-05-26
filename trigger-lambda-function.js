// Demo how to trigger lambda function
require('dotenv').config()

var AWS = require('aws-sdk');
var uuid = require('uuid');

var credentials = new AWS.SharedIniFileCredentials({profile: process.env.AWSTIO_AWS_PROFILE});
AWS.config.credentials = credentials;

// Set the region 
AWS.config.update({region: process.env.AWSTIO_AWS_REGION});

var payload = {
    messageID: uuid.v4(),
    message: "hey there",
}

var params = {
    FunctionName: process.env.AWSTIO_LAMBDA_HANDLE_DEPLOY_CONTRACT_REQUEST_NAME,
    Payload: JSON.stringify(payload),
}

var lambda = new AWS.Lambda();
lambda.invoke(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log(data);           // successful response
  });