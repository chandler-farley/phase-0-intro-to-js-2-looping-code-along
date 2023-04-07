// Code your solutions in this file

/* for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
} */

/* const gifts = ["teddy bear", "drone", "doll"];
function wrapGrifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }
    return gifts;
}
wrapGrifts(gifts); */

/* const tyCards = [];
function writeCards(cards, occasion) {
    for (let i = 0; i < cards.length; i++) {
        tyCards.push(`Thank you, ${cards[i]}, for the wonderful ${occasion} gift!`);
    };
    return tyCards;
}

function countDown(x) {
    while (x >= 0) {
        console.log(x--);
    };
} */

const names = [];
function writeCards(names, event) {
    let cards = [];
    for (let i = 0; i < names.length; i++) {
        cards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    };
    return cards;
}

function countDown(i) {
    while (i >= 0) {
        console.log(i);
        i--;
    };   
}