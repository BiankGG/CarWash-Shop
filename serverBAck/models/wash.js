 const mongoose= require('mongoose');
 const {Schema} = mongoose;

 //Wash id/service/date/location/status
 const WashSchema= new mongoose.Schema({
    user_id:{type: mongoose.Schema.Types.ObjectId,ref:'User', required: true},
    service_id:{type:mongoose.Schema.Types.ObjectId,ref:'Service', required:true},
    date: {type: Date, default: Date.now},
    location: {type: String, required: true},
    status: {type: String, enum: ['pending','completed', 'canceled'], default: 'pending'}

 })

 const WashModel= mongoose.model('Wash', WashSchema);
 module.exports = WashModel