exports.handler = async (event) => {
  console.log("EVENT: \n" + JSON.stringify(event, null, 2))

  console.log(`1. Call to Blockchain for deploying smart contract ${process.env.BLOCKCHAIN_SERVICE_URL}`);
  console.log(`2. Call to Collection service to update status to processing ${process.env.COLLECTION_SERVICE_URL}`);
  
  const response = {
      statusCode: 200,
      body: JSON.stringify('request successfully'),
  };
  return response;
};
