/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/
/**Quotes**/
let quotes = [
  {quote:"Code is like humor. When you have to explain it, it’s bad." , source: 'Cory House', tag: 'humor'},
  {quote: "One of the best programming skills you can have is knowing when to walk away for awhile.", source:  'Oscar Godson', tag:'wisdom'},
  {quote: "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.", source:' John Woods', tag:'humor'},
  {quote:"That's the thing about people who think they hate computers. What they really hate is lousy programmers." , source:'Larry Niven', tag:'humor'},
  {quote:"Computer science education cannot make anybody an expert programmer any more than studying brushes and pigment can make somebody an expert painter", source:"Eric Raymond", tag:'inspirational'},
  {quote:"We are looking at a society increasingly dependent on machines, yet decreasingly capable of making or even using them effectively." , source:" Douglas Rushkoff", citation: "Program or Be Programmed: Ten Commands for a Digital Age", tag:'humor' },
  {quote:"I'm a programmer. I like programming. And the best way I've found to have a positive impact on code is to write it." , source:" Robert C. Martin", tag: 'inspirational'},
  {quote:"If you can write 'hello world' you can change the world" , source:"Raghu Venkatesh", tag:'inspirational'},
  {quote:"This coding stuff can really be frustrating, but it's so worth it when you finally crush a nasty bug or manage to make something you can be proud of", source: 'Maren Lilleberre', year: '18.04.2019'},
  {quote:"Programming isn't about what you know; it's about what you can figure out." , source:"Chris Pine", tag:'inspirational'},
  {quote:"The happiest moment i felt; is that moment when i realized my ability to create." , source:"Dr. Hazem Ali", tag:'inspirational'},
  {quote:"Think twice, code once." , source:"Waseem Latif", tag:'wisdom'},
  {quote:"...I’m not saying simple code takes less time to write. You’d think it would since you end up with less total code, but a good solution isn’t an accretion of code, it’s a distillation of it." , source:"Robert Nystrom ", tag:'wisdom'},
  {quote:"Programming is breaking of one big impossible task into several very small possible tasks." , source:"Jazzwant ", tag:'inspirational'}
];


/***
   Makes a random number and stores it in randomQuote. 
   Returns a random quotes object from the array
***/
function getRandomQuote() {
  let randomQuote = Math.floor(Math.random() * quotes.length);
  return quotes[randomQuote];
}

/***
   Takes a random color from the array colors.
***/
function makeRandomColor() {
      let colors = ["#5d77a3", '#2c706b','#3b8957','#6645a0', '#84475b', '#bc4b6f' ];
      let color = Math.floor(Math.random() * colors.length);
      // let randomColor = 
      return colors[color];
    }

/***
Prints a random quote to the quote-box in index.html
***/
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
    if (printOneQuote.tag) {
      string += "<p class='tag'>" + printOneQuote.tag + '</p>'; //adds tag
    } 
    string += '</p>'


  /***Changes the background color of body when button is clicked***/
  document.body.style.backgroundColor = makeRandomColor();


/***Writes the string to the id: 'quote-box' in the html***/
  document.getElementById("quote-box").innerHTML = string;
   
}
printQuote();//calls the function 

/***Automatically changes the quote and background color after the set time***/
setInterval(printQuote,10000);
/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
