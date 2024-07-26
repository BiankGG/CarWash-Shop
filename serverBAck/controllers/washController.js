const Wash = require("../models/wash");

//test
const washTest = (req, res) => {
  res.send("endPoint Working");
};

//create a wash
const createWash = async (req, res) => {
  const { user_id, service_id, date, location, status } = req.body;
  try {
    const newWash = new Wash({
      user_id,
      service_id,
      date,
      location,
      status,
    });

    const saveWash = await newWash.save();
    console.log(saveWash); //shows me what i am introducing on my washAppointment
    res.status(201).json(saveWash);
  } catch (error) {
    console.error("error creating wash", error);
  }
};

//get all the washes

const getAllWashes = async (req, res) => {
  try {
    const washes = await Wash.find();
    res.json(washes);
  } catch (error) {
    console.error("error catching all washes");
  }
};

//delete washes findByIdDelete(id)
const deleteWashes = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedWashes = await Wash.findByIdAndDelete(id);
    if (!deletedWashes) {
      return res.status(400).json({ message: "wash not found" });
    }
    res.status(200).json({ message: "hey! wash deleted correctly" });
  } catch (error) {
    console.error("error to delete", error);
  }
};

//edit wash findByIdUpdate
const updateWash = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const updatedWash = await Wash.findByIdAndUpdate(id, updates, {
      new: true,
    });
    if (!updatedWash) {
      return res.status(404).json({ message: "wash not found" });
    }
    res.status(200).json({ message: "wash edited", updateWash });
  } catch (error) {
    console.error("error edited;", error);
  }
};

module.exports = {
  washTest,
  createWash,
  getAllWashes,
  deleteWashes,
  updateWash,
};
