/**
 * Created by msmart on 19.04.17.
 */
var restify = require('restify');
var builder = require('botbuilder');
//=========================================================
// Bot Setup
//=========================================================
// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
    console.log('%s listening to %s', server.name, server.url);
});
// Create chat bot
var connector = new builder.ChatConnector({
    appId: 'b37247ec-5619-4784-8789-613d710d3b5a',
    appPassword: 'eBiLMgiYjn24O6hsD04VY5z'
});
var bot = new builder.UniversalBot(connector);
server.post('/api/messages', connector.listen());
//=========================================================
// Bots Dialogs
//=========================================================
bot.dialog('/', function (session) {
    session.send("Hello World");
});