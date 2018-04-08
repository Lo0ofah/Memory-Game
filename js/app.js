
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


// set up the event listener for a card. If a card is clicked:
 ulCards.addEventListener("click" , CardsClick);
 function CardsClick(e){
   if(e.target.nodeName === 'LI'){
     e.target.setAttribute("class","card flip open show ");
   }
 }

// display the card's symbol (put this functionality in another function that you call from this one)
// add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
//  *   if the list already has another card, check to see if the two cards match
//  *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
//  *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
//  *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
//  *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
//  */
