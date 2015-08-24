var http = require('http');
var qs = require('querystring');
var url = require('url');

// The port to listen for incoming HTTP requests on
var LISTEN_PORT = 1337;

function processRequest(httpPostData, successCallback, errorCallback) {
    var Tproxy = require('temboo/core/tembooproxy');
    var Tsession = require('temboo/core/temboosession');
    var Twitter = require('temboo/Library/Twitter/Search');

    // Initialize Temboo session
    var session = new Tsession.TembooSession("nathanholzinger", "myFirstApp", "a6ef7ff1242340079983fb3842f73905");

    // Initialize our request proxy
    var tembooProxy = new Tproxy.TembooProxy();

    // Instantiate the Choreo
    var tweetsChoreo = new Twitter.Tweets(session);

    // Add Choreo proxy with an ID for the JS Library
    tembooProxy.addChoreo('jsTweets', tweetsChoreo);
    
    // Whitelist client inputs
    tembooProxy.allowUserInputs('jsTweets', 'AccessToken');
    tembooProxy.allowUserInputs('jsTweets', 'Query');
    tembooProxy.allowUserInputs('jsTweets', 'AccessTokenSecret');
    tembooProxy.allowUserInputs('jsTweets', 'ConsumerSecret');
    tembooProxy.allowUserInputs('jsTweets', 'ConsumerKey');

    // Execute the requested Choreo
    tembooProxy.execute(httpPostData['temboo_proxy'], true, successCallback, errorCallback);
}