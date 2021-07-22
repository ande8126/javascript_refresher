//variables to handle deck and hand
let deck = [];
let hand = [];

//function to make card
function makeCard( value, suit ){
    let face = value;
    //change face cards
    if( value === 11 ){
        face = 'Jack';
    }
    if( value === 12 ){
        face = 'Queen';
    }
    if( value === 13 ){
        face = 'King';
    }
    if( value === 1 ){
        face = 'Ace';
    }
    //make a card object
    let newCard = {
        face: face,
        suit: suit,
        faceUp: false,
        value: value
    }//end newCard
    //add newCard to deck
    deck.push( newCard );
    return true
}//end makeCard

//function to build a deck
function buildDeck(){
    //loop thru 1-13 to create cards
    for( let i=1; i<=13; i++ ){
        createCard( i, 'Clubs')
    }
    for( let i=1; i<=13; i++ ){
        createCard( i, 'Spades')
    }
    for( let i=1; i<=13; i++ ){
        createCard( i, 'Hearts')
    }
    for( let i=1; i<=13; i++ ){
        createCard( i, 'Diamonds')
    }
}//end buildDeck()

//function to determine value of hand

