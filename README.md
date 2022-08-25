# Let's Play Who's Funnier

## Introduction 

Welcome to Who's Funnier, an interactive game where our users can sit 
and choose for themselves the corniest jokes in America. Prepare yourself
for some of the best (and genuinely some of the worst) laughs that we can offer.

## How to play

The usage of Who's Funnier is simple and extremely user friendly. 
Simply just click begin and you will be presented with two jokes.
Vote for your favorite between the two then ask for another joke to continue.

## How was it made?

Who's Funnier was made through a usage of html, js, and css. 
Our jokes our pulled through an jokes api, https://v2.jokeapi.dev/joke/Any?amount=2, 
fetched through asynchronus json. 
As we recieve our jokes from our api, we then utilize array iteration to manipulate 
our given array in order to separate and organize the two different kind of jokes we recieve, 
our jokes with punchlines and our oneliners. 
Finally, using event listeners is how we're able to provide users a change of word color when hovering their mouses over our jokes for clarity. Using click event listeners is also how we're able to change the colors of our vote buttons to make apparent the user's vote and also how we provide a message as the DOM content loads