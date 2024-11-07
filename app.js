const newQuoteButton = document.querySelector('button')
const quote = document.querySelector('div .quote p')
const quoteAuthor = document.querySelector('div .quote-author p')

const quotes = [
  {
    quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    author: "Mother Teresa"
  },
  {
    quote: "The only thing we have to fear is fear itself.",
    author: "Franklin D. Roosevelt"
  },
  {
    quote: "“Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate: only love can do that.”",
    author: "Martin Luther King Jr."
  },
  {
    quote: "“Well done is better than well said.”",
    author: "Benjamin Franklin"
  },
  {
    quote: "“The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.”",
    author: "Helen Keller"
  },
  {
    quote: "“It is during our darkest moments that we must focus to see the light.”",
    author: "Aristotle"
  },
  {
    quote: "“Do not go where the path may lead; go instead where there is no path and leave a trail.”",
    author: "Ralph Waldo Emerson"
  },
  {
    quote: "“Be yourself; everyone else is already taken.”",
    author: "Oscar Wilde"
  },
  {
    quote: "“Only a life lived for others is a life worthwhile.”",
    author: "Albert Einstein"
  },
  {
    quote: "“You only live once, but if you do it right, once is enough.”",
    author: "Mae West"
  },
]

newQuoteButton.addEventListener('click', () => {
  const random = Math.floor(Math.random() * quotes.length)

  quote.innerText = quotes[random].quote
  quoteAuthor.innerText = quotes[random].author
})
