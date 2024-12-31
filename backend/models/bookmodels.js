const mongoose = require('mongoose');


const book_schema=mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    author:{
        type:String,
        required:true,
    },
    publish_year:{
        type:Number,
        required:true,
    },   
},
{
    timestamps:true,
}
)

const Book=mongoose.model('book',book_schema)
module.exports = Book;