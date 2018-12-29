const Discord = require("discord.js");
const btcValue = require('btc-value');
const TOKEN = "NDQwMjcxNjc2MzcwOTc2Nzcw.DgKFOQ.o7r54oyhJaNnsPBcoF09jUPwSXg";

let bot = new Discord.Client();

bot.on("ready", () => console.log("Servidor Pronto"))

bot.on("message", mensagem => {
 	// Verifica se a mensagem é do próprio bot
	if (mensagem.author.equals(bot.user)) return
 
 	if (message.content == "!btc") {
  		btcValue().then(value => {
   			btcValue.getPercentageChangeLastDay().then(percentage => {
    			let perc = percentage
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
 }

bot.login(TOKEN);
