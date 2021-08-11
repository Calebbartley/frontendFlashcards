const express = require('express');
const repoContext = require('./repository/repository-wrapper');
const validateCards = require('../middleware/cards-validation')

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.listen(5000,function(){
    console.log("server started. Listening on port 5000.")
});

app.get('/api/cards',(req,res)=> {
    const cards = repoContext.cards.findAllCards();
    return res.send(cards)
});

app.get('/api/cards/:id',(req,res)=>{
    const id = req.params.id;
    const cards = repoContext.cards.findCardsById(id);
    return res.send(cards);
});

app.post('/api/cards',(req,res)=> {
    const newCards = req.body;
    const addedCards = repoContext.cards.createCard(newCards);
    return res.send(addedCards);
});

app.put('/api/cards/:id',(req,res)=>{
    const id = req.params.id;
    const cardPropertiesToUpdate = req.body;
    const updatedCards = repoContext.cards.updatedCards(id, cardPropertiesToUpdate);
    return res.send(updatedCards)
})

app.delete('/api/cards/:id',(req,res)=>{
    const id = req.params.id;
    const updatedDataSet = repoContext.cards.deleteCards(id);
    return res.send(updatedDataSet);
})

