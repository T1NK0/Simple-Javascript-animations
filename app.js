const text = document.querySelector(".fancy"); //Gets the thing we have written in the item with class "fancy" (h1)
const strText = text.textContent; //Sets strText to be the text we have in the h1
const splitText = strText.split(""); //Splits the text up by quotationmarks

text.textContent = ""; //Sets our text variable to be equal to nothing (removing the text in the h1)

for(let i = 0; i < splitText.length; i++){ //Loops through the splittext by length, for each letter we have 
    text.innerHTML += "<span>"+ splitText[i] +"</span>"; //adds innerhtml to our word so every letter is in a span by it self
} //Closes our for loop

let char = 0; //set char to be empty
let timer = setInterval(onTick, 50); //set the interval for the timer to go off (tick) to 50 milliseconds

function onTick(){ //Creates a new function "onTick" (needs to stop at the end of the chars)
    const span = text.querySelectorAll('span')[char]; //targets all the spans we've made earlier, and adds the character at the end of the spans
    span.classList.add("fade"); //creates a classlist on span, called 'fade'
    char++; //Adds the next chat in line to loop through them
    if(char === splitText.length){ //Checks if the char is equal to the lenght of the text
        complete(); //If it is say it's complete
        return;
    }
}

function complete(){ //If this complete, do this
    clearInterval(timer); //clear the interval called timer (our let timer on line 12)
    timer = null; //set timer to null
}// end our function