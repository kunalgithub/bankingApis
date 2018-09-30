
const https = require("got");
const uuidv1 = require('uuid/v1');

exports.createSession = function (event, context, callback) {
    var sessionResp={"sessionId": "string"};
    sessionResp.sessionId=uuidv1();
    console.log("Generating the SessionId",sessionResp.sessionId);
    https('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', { json: true }).then(response => {
        console.log(response);
        callback(null, sessionResp);
    }).catch(error => {
        console.log(error.response.body);
        callback("Error in Accounts");
    });
}
