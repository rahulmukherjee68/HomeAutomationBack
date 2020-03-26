const mongoose = require("mongoose");

const deviceSchema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    device: String,
    room: String,
    status: Number,
    watt:Number,
    lastPowerOn:{type:Date, default: Date.now},
    lastPowerOff:{type:Date, default: Date.now},
    powerConsumption:{type:Number,default:0},
    create_at: {type: Date, default: Date.now} 
   
});

module.exports=mongoose.model('device',deviceSchema);