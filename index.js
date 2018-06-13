const Discord = require("discord.js");
const TOKEN = "NDQwMjcxNjc2MzcwOTc2Nzcw.DgKFOQ.o7r54oyhJaNnsPBcoF09jUPwSXg";
const btcValue = require('btc-value');

var bot = new Discord.Client();

bot.on("ready", function(){
 console.log("ready");
})

bot.on("message", function(message){
 if(message.author.equals(bot.user)) return;

if (message.content == "!btc") {
  btcValue().then(value => {
   btcValue.getPercentageChangeLastDay().then(percentage => {
    var perc = percentage
    if (perc > 0){
        message.channel.send("O preço do  btc é " + value + " $ \nSubiu (ultimo dia): " + perc + "% :hugging:");
       } else if (perc < 0){
        message.channel.send("O preço do  btc é " + value + " $ \nDesceu (ultimo dia): " + perc + "% :sob:");
       } else {
        message.channel.send("O preço do  btc é " + value + " $ \nManteve (ultimo dia): " + perc + "% :rolling_eyes:");
       }

});
  });
 }
});

bot.login(TOKEN);
