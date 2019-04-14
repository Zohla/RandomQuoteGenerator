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

//let randomQuote;

//tested and working. Quotes.
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

// let print = '';
// // let printOneQuote;
// let randomQuote;
/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/
function getRandomQuote() {
  var randomQuote = Math.floor(Math.random() * quotes.lenght);
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
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/

function printQuote() {
  var printOneQuote = getRandomQuote();
  let string = '';
    string += "<p class= 'quote'>" + printOneQuote.quote + '</p>'; 
    string += "<p class= 'source'>" + printOneQuote.source;
    if (printOneQuote.citation) {
      string += "<span class= 'citation'>" + printOneQuote.citation + '</span></p>';
    } else {
    string += '</p>'
    }

  document.getElementById("quote-box").innerHTML = string;
  printQuote();
//"<p class='quote'>" + actualQuote.quote +"</p> <p class='source'>" + actualQuote.source + " " + actualQuote.year + "</p>"
  //printOneQuote.getElementById("quote");

}
// function printQuote() {

//  var quotecall = getRandomQuote();

//  var html = ‘’; “<p class=‘quotes’>” + print.quotes + “</p>“;

//  html += “<p class=’source>” + print.source + “</p>“;

//  var element = document.getElementById(quotes).innerHTML = html;}
// // function printQuote() {
//   console.log("clicked")
//   actualQuote = getRandomQuote(quotes); /* printQuote function calls getRandomQuote */
//   stringOfQuoteProperties = "";
//   stringOfQuoteProperties += "<p class='quote'>" + actualQuote.quote +"</p> <p class='source'>" + actualQuote.source + " " + actualQuote.year + "</p>"
//   if (actualQuote.year.hasOwnProperty()) {
//     stringOfQuoteProperties += "<span class='year'>" + actualQuote.year + "</span>";
//   } else {} /* adds year property of quote, if there is one */

//   document.getElementById("quote-box").innerHTML = stringOfQuoteProperties; /* printQuote function should display the completed HTML */


/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.