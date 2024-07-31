const mongoose = require("mongoose");
const { schema } = mongoose;

const SubscriptionSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  nombre:{type:String},
  descripcion: { type: String },
  precio: { type: Number, require: true },
  duracion: { type: String, required: true },
  dia_creado: { type: Date, required: true, default: Date.now },
  dia_fin: { type: Date },
  imagen:{type:String}
  
});

const SubscriptionModel = mongoose.model("subscription", SubscriptionSchema);
module.exports = SubscriptionModel;
