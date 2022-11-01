const db = require('../database/db.js')
const express = require('express');
const router = express.Router();

//GET APIs -------------------->

//this route is for testing purposes
router.get("/api/test", (req, res) => {
    res.json({ result: "success" });
  });

//this route gets a list of gift_receivers for a particular gift_giver
//RETURNS ----------->
//users_id, name, email, password, picture, relationship_id
//gift_giver, gift_receiver, relation_id, relation_type 
router.get('/api/relations/:userId', (req,res)=>{
    
  const userId = req.params.userId;

    const sql=`SELECT * FROM users
               INNER JOIN relationship ON users.users_id = relationship.gift_receiver
               INNER JOIN relation ON relationship.relation_id = relation.relation_id
               WHERE relationship.gift_giver = $1; 
    `
    db.query(sql,[userId]).then((dbRes)=>{
      res.json(dbRes.rows);
    });
})

//this route gets a given gift_receiver based on a user_id
//RETURNS ----------->
//users_id, name, email, password, picture, relationship_id
//gift_giver, gift_receiver, relation_id, relation_type 
router.get('/api/relationsDetails/:id', (req, res) => {
    const relation_id = req.params.id;

    sql = `SELECT * FROM users
           INNER JOIN relationship ON users.users_id = relationship.gift_receiver
           INNER JOIN relation ON relationship.relation_id = relation.relation_id
           WHERE users.users_id = $1`;

    db.query(sql, [relation_id]).then((dbRes)=> {
      return res.json(dbRes.rows);
  });
})


//this route gets all event_types based on a event_id
//RETURNS ----------->
//event_type
router.get('/api/event-types', (req, res) => {
    sql=`SELECT * FROM events`;

    db.query(sql).then((dbRes)=> {
      return res.json(dbRes.rows);
    });  
})

//this route gets gifts for a particular relationship_id
//RETURNS ----------->
//gift_id, relationship_id, event_id, present_name, present_image, gift_date, gift_status, rating, event_type
router.get('/api/gifts/:relationship_id', (req,res) => {
    const relationship_id = req.params.relationship_id;

    sql = `SELECT * FROM gifts
           INNER JOIN events on gifts.event_id = events.event_id
           WHERE gifts.relationship_id = $1`;
    
    db.query(sql, [relationship_id]).then((dbRes)=> {
      return res.json(dbRes.rows);
    });       
})

//this route gets events for a particular gift_receiver (as identified by a relationship_id)
//RETURNS ----------->
//date_id, event_id, relationship_id, event_date, event_type
router.get('/api/events/:relationship_id', (req, res) => {
  const relationship_id = req.params.relationship_id;

  sql = `SELECT * FROM dates 
         INNER JOIN events ON dates.event_id = events.event_id 
         WHERE dates.relationship_id = $1`;

  db.query(sql, [relationship_id]).then((dbRes)=> {
    return res.json(dbRes.rows);
  });
})

//this route gets a gift receiver (as identified by a relationship_id)
//RETURNS ----------->
//user_id, username, name, email, password, picture, relationship_id, gift_giver, gift_receiver, relation_id
router.get('/api/gift-receiver/:relationship_id', (req,res) => {
  const relationship_id = req.params.relationship_id;

  sql = `SELECT * FROM users 
         INNER JOIN relationship ON users.users_id = relationship.gift_receiver
         WHERE relationship.relationship_id = $1`;

  db.query(sql, [relationship_id]).then((dbRes)=> {
    return res.json(dbRes.rows);
  });
})

//this route gets a gifts with a status of given (as identified by a users_id)
//RETURNS ----------->
//gift_id, relationship_id, event_id, present_name, present_image, gift_date, gift_status = GIVEN, rating, gift_giver, gift_receiver = users_id, relation_id
router.get('/api/gifts-to-rate/:users_id', (req,res) => {
  const users_id = req.params.users_id;

  sql = `SELECT * FROM gifts
         INNER JOIN relationship ON gifts.relationship_id = relationship.relationship_id
         INNER JOIN users ON relationship.gift_receiver = users.users_id
         WHERE relationship.gift_receiver = $1 
         AND gifts.gift_status = 'GIVEN'`;
  
  db.query(sql, [users_id]).then((dbRes)=> {
      return res.json(dbRes.rows);
  });
})

//this route gets a birthdate of a gift receiver (as identified by a users_id)
//RETURNS ----------->
//event_date from dates
router.get('/api/birthdate/:users_id', (req, res)=> {
  const users_id = req.params.users_id;

  sql = `SELECT event_date FROM dates
         INNER JOIN relationship ON dates.relationship_id = relationship.relationship_id
         WHERE dates.event_id = '1'
         AND relationship.gift_receiver = $1`;
  
  db.query(sql, [users_id]).then((dbRes)=> {
        return res.json(dbRes.rows);
  });

})

//POST APIs -------------------->

//add an event to a gift receiver
router.post('/api/event', (req,res) => {
  const { event_id, relationship_id, event_date } = req.body;

  const sql = `
      INSERT INTO dates (event_id, relationship_id, event_date)
      VALUES ($1, $2, $3)
      `;

      db.query(sql, [event_id, relationship_id, event_date]).then((dbRes) => {
        console.log("API-event-updated")
        res.sendStatus(200); //everything is okay 

      }).catch((err) => {
        res.status(500).json({}); //everything is not okay 500 - Internal Server Error - sends message to user
      });        
});

//give gift to gift receiver
router.post('/api/gift', (req,res) => {
  const { relationship_id, event_id, present_name, present_image, gift_date, gift_status, rating } = req.body;
  //console.log("DB", relationship_id, event_id, present_name, present_image, gift_date, gift_status, rating);

  const sql = `
      INSERT INTO gifts (relationship_id, event_id, present_name, present_image, gift_date, gift_status, rating)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      `;

      db.query(sql, [relationship_id, event_id, present_name, present_image, gift_date, gift_status, rating]).then((dbRes) => {
        console.log("API-event-updated")
        res.sendStatus(200); //everything is okay 

      }).catch((err) => {
        res.status(500).json({}); //everything is not okay 500 - Internal Server Error - sends message to user
      });        
});

//UPDATE APIs -------------------->
router.put('/api/gift-status/:id', (req,res)=>{
  const giftId = req.params.id;
  
  const sql = `UPDATE gifts SET gift_status='GIVEN' WHERE gift_id = $1`;

  db.query(sql, [giftId]).then(dbRes=>{
      res.sendStatus(200);
  }).catch(err =>{
      res.sendStatus(500);
  })
});

router.put('/api/rating', (req,res) => {
    //console.log("API-put-rating", req.body);
    const ratingArray = req.body;
    
    const sql = `UPDATE gifts 
                SET gift_status='RATED', rating=$1 
                WHERE gift_id = $2`;
    
    ratingArray.forEach(element => {
      db.query(sql, [element.rating, element.gift_id]).then(dbRes=>{
          res.sendStatus(200);
      }).catch(err =>{
          res.sendStatus(500);
      })
    });
  


});



//DELETE APIs -------------------->

//delete gift for a particular gift id
router.delete('/api/gift/:id', (req, res) => {
  const giftId = req.params.id;
  //console.log('Deleting gift id:'+ giftId)
  const queryGift = "SELECT * FROM gifts WHERE gift_id = $1";
  db.query(queryGift, [giftId]).then((dbRes)=>{
    if(dbRes.rows.length !== 1){
      return res.status(404).json({message: 'Gift not found!'})
    }
    const sqlGift = `DELETE FROM gifts WHERE gift_id = $1`;
    db.query(sqlGift,[giftId]).then((dbRes)=>{
      res.json({});
    })
  }).catch(err =>{
    res.status(500).json({});
  });
});

module.exports = router;
