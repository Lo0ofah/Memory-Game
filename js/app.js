
 // Create a list that holds all of your cards
 //get the ul that contains all the cards
  let ulCards = document.getElementsByClassName("deck")[0];
  //get all the cards
  let cardsCollection = ulCards.getElementsByTagName("li");
  //convert the HTMLCollection to an Array
  let cards = Array.from(cardsCollection);


  // Shuffle function from http://stackoverflow.com/a/2450976
  function shuffle(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;

      while (currentIndex !== 0) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
      }

      return array;
  }

 //Display the cards on the page
 // - shuffle the list of cards using the provided "shuffle" method below
 let shuffleCards = shuffle(cards);
 // - loop through each card and create its HTML
 //create a fregment to add all the cards in it
 const fragment = document.createDocumentFragment();
 for(let card = 0 ; card < shuffleCards.length ; card++){
   fragment.appendChild(shuffleCards[card]);
 }
 // - add each card's HTML to the page
 ulCards.innerHTML="";
 ulCards.appendChild(fragment);

//array for keep keeping  the clicked cards to look for a match between them
let flipedCardsList = [];
//get the moves span element
let movesSpan = document.getElementsByClassName("moves")[0];
//to count the number of moves
let movesCounter = 0 ;
//get the stars list
let ulStars = document.getElementsByClassName("stars")[0];
let starsCollection = ulStars.getElementsByTagName("li");
//get the timer span element
let timerSpan = document.getElementsByClassName("timer")[0];
// timer to count the time
let timeCounter = 0;
//every second increment the Timer counter
timeCounter = setInterval(incrementTimeCounter, 1000);


// set up the event listener for a card. If a card is clicked:
 ulCards.addEventListener("click" , CardsClick);
//method will call if cards clicked
 function CardsClick(e){
   if(e.target.nodeName === 'LI'){
     // cardsOpen for the cards status if opened or closed
    let cardsOpen = checkIfOpen(e.target);
    //if the cards closed call the method to display the symbol and adding the card to the list of opened cards
    if(!cardsOpen){
     displaySymbol(e.target);
     addOpenCards(e.target);
   }
   }
 }
//method to check if the cards was already clicked before or not
 function checkIfOpen(target){
  return  (target.className === "card flip open show") ||(target.className === "card match")? true : false;
 }

 // display the card's symbol
 function displaySymbol(target){
    target.setAttribute("class","card flip open show");
 }
// add the card to the list of opened cards
function addOpenCards(target){
  flipedCardsList.push(target);
  //if there is 2 cards opened check for match between them
  if(flipedCardsList.length === 2){
     setTimeout( checkForMatch , 500);
     modifyCounter();
     modifyStars();



  }
}
//method to check match between the two opened cards
function checkForMatch(){
  let card1 = flipedCardsList.pop() ;
  let card2 = flipedCardsList.pop();
  let icone1 = card1.getElementsByTagName("i")[0];
  let icone2 = card2.getElementsByTagName("i")[0];
  if(icone1.className === icone2.className){
      card1.setAttribute("class","card match");
      card2.setAttribute("class","card match");
  }else{
      card1.setAttribute("class","card flip");
      card2.setAttribute("class","card flip");
  }

}
// method to increment the moves counter and modify the move span
function modifyCounter(){
   movesCounter++;
   movesSpan.textContent = movesCounter;
}

//modify stars
function modifyStars(){
  if( movesCounter === 20){
      //2 stars
      ChangeStarStyle(0);
  }else if( movesCounter === 30){
      //1 star
      ChangeStarStyle(1);
  }else if(movesCounter === 40){
     //0 star
      ChangeStarStyle(2);
  }
  }

  function ChangeStarStyle(index){
     starsCollection[index].getElementsByTagName("i")[0].setAttribute("class","fa fa-star");
  }

  function incrementTimeCounter(){
    timerSpan.textContent  = timeCounter;
    timeCounter++;
  }




//  *   if the list already has another card, check to see if the two cards match
//  *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
//  *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
//  *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
//  *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
//  */
