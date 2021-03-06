var quotes = [
    'No One Can Change YOur Life ,Only You Can do it.',
    'If you think you can or you think you cannot either way you are both right.',
    'Don\'t Let Yesterday Take Up Too Much Of Today. Will Rogers',
    'You Learn More From Failure Than From Success. Don\'t Let It Stop You. Failure Builds Char',
    'It\'s Not Whether You Get Knocked Down, It\'s Whether You Get Up.- Vince Lombardi',
    'If You Are Working on Something That You Really Care About, You Don\'t Have To Be Pushed.',
    'People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.- Rob',
    'Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough. - Og Mandir',
    'Entrepreneurs Are Great At Dealing With Uncertainty And Also Very Good At Minimizing Risk.',
    'We May Encounter Many Defeats But We Must Not Be Defeated.- Maya Angelou'
]

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}