const content = document.querySelector('.content__txt')
const quoteApi = `http://api.quotable.io/random`

function getQuote(calback){
    
    fetch(quoteApi)
    .then(res => {return res.json("")})
    .then(displayQuote)
}

function displayQuote(quote){
    const html = `
    <p class="title">${quote.content}</p>
    <p class="des">${quote.author}</p>

    `
   content.innerHTML = html
}
getQuote()
