const mongoose = require('mongoose');

const Dishes = require('./models/dishes');

const url = 'mongodb://localhost:27017/conFusion';
const connect = mongoose.connect(url);

connect.then((db)=>{
    console.log("connect correctly!");

    var newDish = Dishes({
        name: "abc",
        description: 'test data'
    });

    newDish.save()
    .then((dish)=>{
        console.log(dish);

        return Dishes.find({}).exec();
    })
    .then((dishes)=>{
        console.log(dishes);
        return Dishes.remove({});
    })
    .then(()=>{
        return mongoose.connection.close();
    })
    .catch((err)=>{
        console.log(err);
    });
});