/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/



//tested and working. /**Quotes**/
let quotes = [
  {quote:"Code is like humor. When you have to explain it, it’s bad." , source: 'Cory House'},
  {quote: "One of the best programming skills you can have is knowing when to walk away for awhile.", source:  'Oscar Godson'},
  {quote: "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.", source:' John Woods '},
  {quote:"That's the thing about people who think they hate computers. What they really hate is lousy programmers." , source:'Larry Niven'},
  {quote:"Computer science education cannot make anybody an expert programmer any more than studying brushes and pigment can make somebody an expert painter" , source:"Eric Raymond"},
  {quote:"We are looking at a society increasingly dependent on machines, yet decreasingly capable of making or even using them effectively." , source:" Douglas Rushkoff", citation: "Program or Be Programmed: Ten Commands for a Digital Age" },
  {quote:"I'm a programmer. I like programming. And the best way I've found to have a positive impact on code is to write it." , source:" Robert C. Martin"},
  {quote:"If you can write 'hello world' you can change the world" , source:"Raghu Venkatesh"},
  {quote:"Programming isn't about what you know; it's about what you can figure out." , source:"Chris Pine"},
  {quote:"The happiest moment i felt; is that moment when i realized my ability to create." , source:"Dr. Hazem Ali"},
  {quote:"Think twice, code once." , source:"Waseem Latif"},
  {quote:"...I’m not saying simple code takes less time to write. You’d think it would since you end up with less total code, but a good solution isn’t an accretion of code, it’s a distillation of it." , author:"Robert Nystrom "},
  {quote:"Programming is breaking of one big impossible task into several very small possible tasks." , source:"Jazzwant "},
  {quote:"Every great developer you know got there by solving problems they were unqualified to solve until they actually did it." , source:"Patrick McKenzie"}
] ;


/***
   Makes a random number and stores it in randomQuote. 
   Returns a random quotes object from the array
***/
function getRandomQuote() {
  let randomQuote = Math.floor(Math.random() * quotes.length);
  return quotes[randomQuote];
}

/***
  Create the `printQuote` function to: 
   - +Call the `getRandomQuote` function and assign it to a variable.
   - +Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
. 
***/
/***Prints a random quote to the quote-box in index.html***/
function printQuote() {
  let printOneQuote = getRandomQuote(); //gets random quote from calling the function and stores it in the variable.
  let string = '';
    string += "<p class= 'quote'>" + printOneQuote.quote + '</p>'; //adds the quote part of the object
    string += "<p class= 'source'>" + printOneQuote.source;        //adds the source part of the object
    if (printOneQuote.citation) { //checks if there is a citation key in the object
      string += "<span class= 'citation'>" + printOneQuote.citation + '</span>'; //adds the citation of the object
    }
    if (printOneQuote.year) {
      string += "<span class='year'>" + printOneQuote.year + "</span>" //adds the year of the object
    }
     
    string += '</p>'

/***Writes the string to the id: 'quote-box' in the html***/
  document.getElementById("quote-box").innerHTML = string;
  printQuote(); //calls the function printQuote


}

/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
