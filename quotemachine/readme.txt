var author = document.getElementById('author');
var quotes = document.getElementById('quotes');
var button = document.getElementById('btn');

var quoteOptions = [
	{
		quotes: "If life gives you lemons, ask for tequilla and salt",
		author: "@Vogt",
	},
	{
		quotes: "Together we can change the world, just one random act of kindness at a time.",
		author: "Ron Hall",
	},
	{
		quotes: "I believe life is an intelligent thing: that things aren't random.",
		author: "Steve Jobs",
	}
];

function randomQuote() {
	var randNum = Math.floor(Math.random() * quoteOptions.length);
	var randAuthor = quoteOptions[randNum].author;
	var customQuote = quoteOptions[randNum].quotes;

	author.innerHTML = randAuthor;
	quotes.innerHTML = customQuote;
}

 button.addEventListener("click", function(event) {
 	randomQuote();

 });
