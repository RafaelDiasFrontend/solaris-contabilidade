const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const servicesSchema = new Schema({
    photo: String,
    title: String,  
    description: String,  
    paragraph: String,  
    paragraph2: String    
});

module.exports = mongoose.model("Services", servicesSchema);