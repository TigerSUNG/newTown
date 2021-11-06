const quotes = [
	{
		quote: "What we dwell on is who we become.",
		author: "1",
	},
	{
		quote: "We generate fears while we sit.",
		author: "2",
	},
	{
		quote:
			"Our greatest weakness lies in giving up. The most certain way to succeed is  always to try just one more time.",
		author: "3",
	},
	{
		quote: "You will never know until you try.",
		author: "4",
	},
	{
		quote: "Well done is better than well said",
		author: "5",
	},
	{
		quote:
			"Lighten up on yourself.No one is perfect.Gently accept your humanness.",
		author: "6",
	},
	{
		quote: "Let bygones be bygones.",
		author: "7",
	},
	{
		quote:
			"Never give up on a dream just because of the time it will take to accomplish it. the time will pass anyway.",
		author: "8",
	},
	{
		quote: "You create your opportunties by asking for them.",
		author: "9",
	},
	{
		quote: "The future start today, not tomorrow.",
		author: "9",
	},
	{
		quote: "If you have the abiliy to love, love yourself first",
		author: "10",
	},
];

const qutoe = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
