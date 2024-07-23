import express from 'express';

const app = express();


app.get('/list', function(_, res){
   res.send('list');
})

// app.get('*', function(_, res){
//    res.send('Hello hermes backend !!');
// });

export default app;