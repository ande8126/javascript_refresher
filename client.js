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
        makeCard( i, 'Clubs')
    }
    for( let i=1; i<=13; i++ ){
        makeCard( i, 'Spades')
    }
    for( let i=1; i<=13; i++ ){
        makeCard( i, 'Hearts')
    }
    for( let i=1; i<=13; i++ ){
        makeCard( i, 'Diamonds')
    }
}//end buildDeck()

//function to determine value of hand
function handValue(){
    let sum = 0;
    //loop thru hand
    for( let i=0; i<hand.length; i++ ){
        //add all values
        sum += hand[i].value;
    }
    return sum;
}//end handValue

//add to hand
function hitMe(){
    hand.push( randomCard() );
}

//random card from deck
function randomCard(){
    const index = Math.floor(Math.random() * deck.length);
    const rando = deck[ index ];
    console.log( 'in randomCard ');
    return rando;
}

// DICE ROLL //

//roll two six-sided dice
//present total

function die(){
    let value = Math.floor(Math.random()*7)
    return value
}// end die

function rollTheDice(){
    let die1 = die();
    let die2 = die();
    let roll = die1 + die2;
    console.log( '...rolling' );
    console.log( 'Roll:' );
    console.log( 'Die 1:', die1 );
    console.log( 'Die 2:', die2 );
    return roll;
}

function diceGame(){
    console.log( '...OK, time to play' );
    let playerRoll = rollTheDice();
    console.log( 'Player roll is: ', playerRoll );
    let houseRoll = rollTheDice();
    console.log( 'House roll is: ', houseRoll ); 
    if( playerRoll > houseRoll ){
        return 'You win!';
    } 
    else if( playerRoll < houseRoll ){
        return 'You lose, sorry!';
    } else {
        return 'Tie! Ooo thats uncomfortable!';
    }
}
