# bankingApis
Sample Banking Apis for Amazon Gateway
Sample Banking API has 5 operations. 
The JS are Lamda functions doing Mock operations.
# Lamda Function Instructions
Remember the Lamda function's Handler on AWS console - should be named as per the instructions below
The module-name.export value in your function. For example, "index.handler" calls exports.handler in index.js. Hence in this case createSession.createSession Or if you want to modularize the code it should be index.createSession
# Use the Create Deployment for API Gateway using the following instructions
The rest-api-id can be found https://console.aws.amazon.com/apigateway/home?region=us-east-1#/apis/<xxxx>/resources/6edv2s/methods/POST
aws --debug apigateway create-deployment --rest-api-id "xxxxxx" --region "us-east-1" --stage-name=beta
