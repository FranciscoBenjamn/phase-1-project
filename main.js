//Code for our api. function we will be using with fetch to get information from api
const BASE_URL = "https://v2.jokeapi.dev/joke/Any?amount=2"

//Uses getElementById to locate and return the element specifically mentioned in the string
const startButton = document.getElementById('start')
const likeButton1 = document.getElementById('likeButton1')
const likeButton2 = document.getElementById('likeButton2')
const joke1 = document.getElementById('joke1')
const joke2 = document.getElementById('joke2')

//Begins as soon as our HTML page is loaded. Delivers introduction and project purpose to users.
document.addEventListener('DOMContentLoaded', ()=> {
    alert('Are you ready to vote for the corniest jokes in America?')
})

//Code for our 'Start Now' button. Asynchronously fetches jokes from our api through use of a promise.
startButton.addEventListener('click', async () => {
//If we're able to retrieve our jokes from api, present them in json.
    const data = await fetch(BASE_URL)
        .then((response) => response.json())
//If not then report an error message in our console
        .catch((error) => console.error(error))

//Declares function jokes and uses .map to create a new array with different properties while also keeping orignal array unchanged         
    const jokes = data.jokes.map((x) => {
//If the type of joke in the array matches the string 'twopart', return both the setup and delivery found in the array
        if (x.type == "twopart"){
            return `${x.setup}. ${x.delivery}`
        }
//If x.type does not match the string 'twopart', return the joke found in array
        else {
          return x.joke
        }
    })

//Returns our HTML element with our new array created by Jokes
    document.getElementById('joke1').innerHTML = jokes[0]
    document.getElementById('joke2').innerHTML = jokes[1]

//Sets base color of our like buttons to White
    likeButton1.style.backgroundColor = 'white'
    likeButton2.style.backgroundColor = 'white'
})

//When likebutton1 is clicked, change color of button to purple. When button2 is clicked, remain and/or return to white
likeButton1.addEventListener('click', ()=> {
    likeButton1.style.backgroundColor = 'red'
    likeButton2.style.backgroundColor = 'white'
})
//When likebutton2 is clicked, change color of button to purple. When button1 is clicked, remain and/or return to white
likeButton2.addEventListener('click', ()=> {
    likeButton2.style.backgroundColor = 'red'
    likeButton1.style.backgroundColor = 'white'
})

// When mouse hovers over the joke, changes color of words for users
joke1.addEventListener('mouseover', (colorChange)=>{
    joke1.style.color = 'white';
})
joke2.addEventListener('mouseover', (mouseColor)=>{
    joke2.style.color = 'white';
})
//When mouse hovers off joke, return color to its base
joke1.addEventListener('mouseout', (colorReturn)=> {
    joke1.style.color = 'black';
})
joke2.addEventListener('mouseout', (colorReturn)=> {
    joke2.style.color = 'black';
})