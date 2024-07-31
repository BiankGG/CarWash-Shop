const Subscription = require("../models/subscription");
const User = require("../models/user");

const subTest = (req, res) => {
  res.send("endpoint Working");
};

//create subs
const createSubscription = async (req, res) => {
  const {
    user_id,
    nombre,
    descripcion,
    precio,
    duracion,
    dia_creado,
    dia_fin,
    imagen,
  } = req.body;

  try {
    let expiration = dia_fin;
    if (duracion === "12meses") {
      dia_fin = moment(dia_creado).add(12, "months").toDate();
    }
    const createSubs = new Subscription({
      user_id,
      nombre,
      descripcion,
      precio,
      duracion,
      dia_creado,
      dia_fin: expiration,
      imagen,
    });

    const saveSubs = await createSubs.save();
    res.status(201).json(saveSubs);
  } catch (error) {
    console.error("error getting subscription", error);
  }
};

//get subscriptions
const getMySubs = async (req, res) => {
  try {
    const getSubs = await Subscription.find();
    res.json(getSubs);
  } catch (error) {
    console.error("error catching subs", error);
  }
};

//delete subscripcion
const deleteSubs = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedSubs = await Subscription.findByIdAndDelete(id);
    if (!deletedSubs) {
      return res.status(400).json({ message: "subscripcion not found" });
    }
    res.status(200).json({ message: "you deleted your subscrition" });
  } catch (error) {
    console.error("error deleting subs", error);
  }
};

//edit wash findByUpdate
const updateSubs = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const updatedSubs = await Subscription.findByIdAndUpdate(id, updates, {
      new: true,
    });
    if (!updatedSubs) {
      return res.status(404).json({ message: "subscription not found" });
    }
    res.status(200).json({ message: "subscription edited", updateSubs });
  } catch (error) {
    console.error("error edited", error);
  }
};

//find user by id subscriptions
const specificUserSubs = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "not found" });
    }
    const specificSubs = await Subscription.find({ user_id: id });
    res.json(specificSubs);
  } catch (error) {
    console.error("error specific subscription", error);
  }
};

//find subscription by id req.params
const specificSubscripcionId = async (req, res) => {
  const { id } = req.params;
  try {
    const subscriptionId = await Subscription.findById(id);
    if (!subscriptionId) {
      return res.status(404).json({ message: "subscription not found" });
    }
    res.json(subscriptionId);
  } catch (error) {
    console.error("error specific id subscription", error);
  }
};




module.exports = {
  subTest,
  createSubscription,
  getMySubs,
  deleteSubs,
  updateSubs,
  specificUserSubs,
  specificSubscripcionId,
  
};
