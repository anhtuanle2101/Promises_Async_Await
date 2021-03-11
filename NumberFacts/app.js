

//Deck of Cards

//https://deckofcardsapi.com/api/deck/<<deck_id>>/draw/?count=2
const DeckOfCardsURL = 'https://deckofcardsapi.com/api/'

// axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
// .then(res=>{
//     console.log(res.data);
//     const deckId = res.data.deck_id;
//     return axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
// })
// .then(res=>{
//     console.log(res.data);
//     const card = res.data.cards[0];
//     const deckId = res.data.deck_id;
//     console.log(`${card.value} of ${card.suit}`);
//     return axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
// })
// .then(res=>{
//     const card = res.data.cards[0];
//     const deckId = res.data.deck_id;
//     console.log(`${card.value} of ${card.suit}`);
// })
// .catch(err=>console.log(err));

const drawBtn = document.querySelector('.draw');
const cardsList = document.querySelector('.cards');
let deckId = undefined;
drawBtn.addEventListener('click', function(){
    if (!deckId){
        axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
        .then(res=>{
            console.log(res.data);
            deckId = res.data.deck_id;
            return axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
        })
        .then(res=>{
            console.log(res.data);
            const card = res.data.cards[0];
            console.log(`${card.value} of ${card.suit}`);
            cardHTML(card.value, card.suit, card.image);
            if (res.data.remaining == 0){
                drawBtn.style.display = 'none';
            }
        })
        .catch(err=>console.log(err));
    }else{
        axios.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then(res=>{
            console.log(res.data);
            const card = res.data.cards[0];
            console.log(`${card.value} of ${card.suit}`);
            cardHTML(card.value, card.suit, card.image);
            if (res.data.remaining == 0){
                drawBtn.style.display = 'none';
            }
        })
        .catch(err=>console.log(err));
    }
})

function cardHTML(value, suit, imgSrc){
    const newDiv = document.createElement('div');
    newDiv.classList.add('card');
    const randomDeg = Math.floor(Math.random()*60-30);
    newDiv.style.transform= `rotate(${randomDeg}deg)`
    const newImg = document.createElement('img');
    newImg.src = imgSrc;
    newImg.alt = `${value} of ${suit}`;
    newDiv.append(newImg);
    cardsList.append(newDiv);
}
